import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios';

  private usersState = signal<any[]>([]);

  public users = this.usersState.asReadonly();

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.usersState.set(data);
      console.log(data);
    })
  }

  // para vincular nuestro back tenemos que configurar el cors
  post(user: any){
    return this.http.post(this.apiUrl, user).pipe( // pipe permite encadenar operadores
      // tap permite mirar lo que pasa en el flujo sin modificarlo
      tap(
        newUser => {
          this.usersState.update(currentUsers => [...currentUsers, newUser])
        }
      )
    );
  }
}

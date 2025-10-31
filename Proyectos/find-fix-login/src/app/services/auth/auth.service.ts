import { inject, Injectable, signal } from '@angular/core';
import { RegistroDTO } from '../../interfaces/dtos/registro.dto';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from '../../interfaces/apiResponse/apiresponse';
import { MostrarRegistroDTO } from '../../interfaces/dtos/mostrar-registro.dto';
import { PerfilDTO } from '../../interfaces/dtos/perfil.dto';
import { LoginDTO } from '../../interfaces/dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'

  private http = inject(HttpClient);

  private currentUserSignal = signal<PerfilDTO | null>(null);
  public currentUser = this.currentUserSignal.asReadonly();

  registrarUsuario(registroDto: RegistroDTO): Observable<ApiResponse<MostrarRegistroDTO>> {
    return this.http.post<ApiResponse<MostrarRegistroDTO>>(`${this.apiUrl}/usuario/registrar`, registroDto);
  }

  // --- ¡NUEVO! MÉTODO DE LOGIN ---
  login(loginDto: LoginDTO): Observable<ApiResponse<PerfilDTO>> {

    return this.http.post<ApiResponse<PerfilDTO>>(`${this.apiUrl}/usuario/login`, loginDto, {

      // 3. ¡VITAL! Esto permite que Angular envíe y reciba
      // la cookie de sesión (JSESSIONID) de tu backend.
      withCredentials: true

    }).pipe(
      // 4. Usamos 'tap' para "espiar" la respuesta exitosa
      tap(response => {
        // 5. Si el login tiene éxito, guardamos el perfil del usuario
        // (que viene en response.data) en nuestra señal.
        this.currentUserSignal.set(response.data);
      })
    );
  }

  // --- ¡NUEVO! MÉTODO DE LOGOUT ---
  logout(): Observable<ApiResponse<string>> { // Asumiendo que tu backend devuelve un string

    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/usuario/logout`, {}, {
      // También necesita 'withCredentials' para enviar la cookie que debe invalidar
      withCredentials: true
    }).pipe(
      tap(() => {
        // 6. Al cerrar sesión, limpiamos la señal
        this.currentUserSignal.set(null);
      })
    );
  }
}

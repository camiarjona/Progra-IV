import { inject, Injectable } from '@angular/core';
import { RegistroDTO } from '../../interfaces/dtos/registro.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/apiResponse/apiresponse';
import { MostrarRegistroDTO } from '../../interfaces/dtos/mostrar-registro.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'

  private http = inject(HttpClient);

  registrarUsuario(registroDto: RegistroDTO): Observable<ApiResponse<MostrarRegistroDTO>> {
    return this.http.post<ApiResponse<MostrarRegistroDTO>>(`${this.apiUrl}/usuario/registrar`, registroDto);
  }
}

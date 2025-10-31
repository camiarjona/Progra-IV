import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Para redirigir al usuario
import { AuthService } from '../../services/auth/auth.service';
import { LoginDTO } from '../../interfaces/dtos/login.dto';

// ¡Importante! Asegúrate de importar los módulos necesarios
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule // <-- Necesario para [formGroup]
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Inyectamos los servicios
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router); // Para la redirección

  // Creamos el formulario reactivo
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  // Variable para mensajes de error
  errorMessage: string | null = null;

  // Método que se llama al enviar el formulario
  onSubmit() {
    // Si el formulario no es válido, no hacemos nada
    if (this.form.invalid) {
      return;
    }

    // Limpiamos errores previos
    this.errorMessage = null;

    // Obtenemos los valores del formulario
    const credentials: LoginDTO = this.form.value as LoginDTO;

    // Llamamos al servicio de autenticación
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // ¡ÉXITO!
        console.log('Login exitoso:', response.mensaje);
        // Usamos el 'data' (VerPerfilUsuarioDTO) que guardó el servicio
        console.log('Usuario logueado:', this.authService.currentUser());

        // Redirigimos al usuario a la página principal o a su perfil
        this.router.navigate(['/']); // Cambia '/' por la ruta que quieras
      },
      error: (err) => {
        // ¡ERROR!
        console.error('Error en el login:', err);
        // Mostramos un mensaje de error genérico o el del backend
        // (Esto depende de cómo manejes tus errores HTTP)
        this.errorMessage = 'Email o contraseña incorrectos. Por favor, intente de nuevo.';
      }
    });
  }
}

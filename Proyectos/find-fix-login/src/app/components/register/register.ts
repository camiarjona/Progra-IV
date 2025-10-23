import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { RegistroDTO } from '../../interfaces/dtos/registro.dto';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  authService = inject(AuthService);

  private fb = inject(FormBuilder); // inject FormBuilder service

  form = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ]],
    nombre: ['', [
      Validators.required,
      Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$')
    ]],
    apellido: ['', [
      Validators.required,
      Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$')
    ]],
  });

  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const user: RegistroDTO = this.form.value as RegistroDTO;

    this.authService.registrarUsuario(user).subscribe(
      {
        next: (response) => {
          console.log(response.mensaje);

          console.log(response.data.nombre);
          console.log(response.data.apellido);
          console.log(response.data.email);
          this.form.reset();
        },
        error: (err) => {
          console.error('Error en el registro:', err);
          alert(`Error: ${err.error.message || 'El email ya puede estar en uso'}`);
        }
      }
    )

  }

}

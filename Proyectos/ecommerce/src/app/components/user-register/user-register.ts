import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css'
})
export class UserRegister {

  private fb = inject(FormBuilder); // inject FormBuilder service
  userService = inject(UserService); // inyectamos el servicio de usuario

  // creamos un formulario reactivo con valores por defecto
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['123456'],
    email: ['pepe@gmail.com']
  });

  addUser() {
    // primero validamos el formulario
    if (this.form.invalid) {
      return;
    }
    const user = this.form.value;

    this.userService.post(user).subscribe(
      {
        next: (newUser) => {
          console.log("Usuario creado:", newUser);
          this.form.reset();
        },
        error: () => {
          console.log("Error...");
        }
      }
    )
  }
}

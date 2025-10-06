import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  username: WritableSignal<string> = signal('Cami') // creamos una señal de tipo string
  userStatus = signal('Online')
  avatarUrl = signal('https://i.pinimg.com/736x/92/ef/12/92ef1214eec640f9ebf59b8fc3d104f2.jpg')
  isDisable = signal(true)

  greetUser() {
    alert(`¡Hola! ${this.username}`)
  }
}

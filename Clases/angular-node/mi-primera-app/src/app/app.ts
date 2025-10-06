import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'
import { UserProfile } from "./components/user-profile/user-profile";
import { UserList } from "./components/user-list/user-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserProfile, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primera-app');
}

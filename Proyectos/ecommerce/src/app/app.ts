import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { UserRegister } from "./components/user-register/user-register";
import { UserList } from "./components/user-list/user-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, UserRegister, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');
}

import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComicForm } from './components/comic-form/comic-form';
import { Header } from "./components/header/header";
import {ComicList} from "./components/comic-list/comic-list";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComicForm, Header, Footer, ComicList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda-comics');

  @ViewChild(ComicForm) list!: ComicList;
}

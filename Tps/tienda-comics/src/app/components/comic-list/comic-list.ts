import { ComicService } from './../../services/comicService';
import { Component, inject, signal, Input } from '@angular/core';

import { Comic } from '../../models/comic';
import { ComicForm } from '../comic-form/comic-form';
import { ComicCard } from "../comic-card/comic-card";

@Component({
  selector: 'app-comic-list',
  imports: [ComicCard],
  templateUrl: './comic-list.html',
  styleUrl: './comic-list.css'
})
export class ComicList {

  //inyectamos el servicio
  private comicService = inject(ComicService);
  //creamos una señal para almacenar la lista de comics
  public comics = signal<Comic[]>([]);

  // declaramos el input para recibir el formulario
  @Input() formulario!: ComicForm;

  // contructor para inicializar la lista de comics
  constructor() {
    this.refreshComics();
  }

  // metodo para refrescar la lista de comics
  refreshComics(): void {
    const comicsFromService = this.comicService.list();
    this.comics.set(comicsFromService);
  }

  onEditComic(comic: Comic): void {
    this.formulario.loadComic(comic);
  }

  onDeleteComic(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cómic?')) {
      this.comicService.delete(id);
      this.refreshComics();
    }
  }
}

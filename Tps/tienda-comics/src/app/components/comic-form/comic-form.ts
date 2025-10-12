import { ComicService } from './../../services/comicService';
import { Component, inject, Output, signal, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './comic-form.html',
  styleUrl: './comic-form.css'
})
export class ComicForm {
  //creamos una instancia de comic vacia para bindear el formulario
  public comic = signal(new Comic('', '', 0, 0, ''));
  //public editMode: boolean = false;
  public editMode = signal(false);

  //inyectamos el servicio
  // constructor(private comicService: ComicService) {}
  private comicService = inject(ComicService);

  @Output() comicAdded = new EventEmitter<void>();

  //metodo para cargar un comic en el formulario
  loadComic(comic: Comic): void {
    this.comic.set({ ...comic }); //desestructuracion
    this.editMode.set(true);
  }

  //metodo para agregar o editar un comic
  addComic(): void {
    if (this.editMode()) {
      this.comicService.update(this.comic());
    } else {
      this.comicService.add(this.comic());
    }
    this.resetForm();
    this.comicAdded.emit();
  }

  //metodo para resetear el formulario
  resetForm(): void {
    this.comic.set(new Comic('', '', 0, 0, ''));
    this.editMode.set(false);
  }
}

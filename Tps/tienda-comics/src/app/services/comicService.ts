import { Comic } from './../models/comic';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comics: Comic[] = [];

  add(newComic: Comic) {
    this.comics.push(newComic);
    this.saveToLocalStorage();
  }

  delete(id: number): void {
    this.comics = this.comics.filter(c => c.id !== id);
    this.saveToLocalStorage();
  }

  update(comicActualizado: Comic): void {
    const index = this.comics.findIndex(c => c.id === comicActualizado.id);

    if (index !== -1) {
      this.comics[index] = comicActualizado;
      this.saveToLocalStorage();
    }
  }

  list(): Comic[] {
    const comicJSON = localStorage.getItem('comics');

    if (!comicJSON) {
      this.comics = [];
      return this.comics;
    }

    const comicPlain = JSON.parse(comicJSON);

    this.comics = comicPlain.map((c: any) => new Comic(c.titulo, c.autor, c.paginas, c.precio, c.imagen, c.id));

    return this.comics;
  }

  private saveToLocalStorage() {
    localStorage.setItem('comics', JSON.stringify(this.comics))
  }
}

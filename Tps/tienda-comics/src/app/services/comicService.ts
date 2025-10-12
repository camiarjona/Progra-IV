import { Comic } from './../models/comic';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comics: Comic[] = [];

  add(titulo: string, editorial: string, anio: number, precio: number, imgUrl: string) {
    const comic: Comic = new Comic(titulo, editorial, anio, precio, imgUrl);
    this.comics.push(comic);
    this.saveToLocalStorage();
  }

  delete(id: number) {
    const comic: Comic | undefined = this.findById(id);

    if (comic) {
      const index = this.comics.findIndex(c => c.id === id);
      this.comics.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  update(id: number, ntitulo: string, neditorial: string, nanio: number, nprecio: number, nimgUrl: string) {
    const comic: Comic | undefined = this.findById(id);

    if (comic) {
      comic.titulo = ntitulo;
      comic.editorial = neditorial;
      comic.anio = nanio;
      comic.precio = nprecio;
      comic.imgUrl = nimgUrl;

      this.saveToLocalStorage();
    }
  }

  findById(id: number) {
    return this.comics.find(c => c.id === id);
  }

  list() {
    const comicItem = localStorage.getItem('comics');
    if (comicItem) {
      const comicPlain: { titulo: string; editorial: string; anio: number; precio: number; imgUrl: string; id: number }[] = JSON.parse(comicItem);
      this.comics = comicPlain.map(c => {
        const comic = new Comic(c.titulo, c.editorial, c.anio, c.precio, c.imgUrl)
        comic.id = c.id;
        return comic;
      });
    } else {
      this.comics = [];
    }

    return this.comics;
  }

  private saveToLocalStorage() {
    localStorage.setItem('comics', JSON.stringify(this.comics))
  }
}

import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-card',
  standalone: true,
  imports: [],
  templateUrl: './comic-card.html',
  styleUrl: './comic-card.css'
})
export class ComicCard {

  @Input() comic!: Comic;

  @Output() edit = new EventEmitter<Comic>();
  @Output() delete = new EventEmitter<number>();

  onEditClick(): void {
    this.edit.emit(this.comic);
  }

  onDeleteClick(): void {
    this.delete.emit(this.comic.id);
  }
}

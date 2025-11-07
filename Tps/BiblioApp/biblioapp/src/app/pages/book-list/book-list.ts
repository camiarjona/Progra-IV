import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {

  bookService = inject(BookService);

  books = this.bookService.books;

  constructor() {
    this.bookService.getBooks().subscribe();
  }

  onDelete(bookId: number): void {
    if (confirm("¿Estás seguro de que deseas eliminar este libro?")) {
      this.bookService.deleteBook(bookId).subscribe();
    }
  }

}

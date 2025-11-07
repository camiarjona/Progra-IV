import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  bookService = inject(BookService);

  private editBookId: number | null = null;
  public editMode: boolean = false;

  public genres: string[] = [
    'Ficción',
    'No Ficción',
    'Misterio',
    'Ciencia Ficción',
    'Fantasía',
    'Biografía'
  ];

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    genre: ['', [Validators.required]]
  })

  constructor() {
    const idFromUrl = this.route.snapshot.paramMap.get('id');

    if (idFromUrl) {
      this.editMode = true;
      this.editBookId = Number(idFromUrl);

      this.bookService.getById(this.editBookId).subscribe(book => {
        this.form.patchValue(book);
      })
    }
  }

  addBook() {
    if (this.form.invalid) {
      return;
    }

    const bookData = this.form.getRawValue();

    if (this.editBookId) {
      this.update(bookData as Book);
    } else {
      this.create(bookData as Book);
    }
  }

  update(bookData: Book) {
    this.bookService.updateBook(this.editBookId!, bookData).subscribe({
      next: (updatedBook) => {
        console.log("Libro actualizado: ", updatedBook);
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error("Error al actualizar el libro: ", err);
      }
    })
  }

  create(bookData: Book) {
    this.bookService.createBook(bookData).subscribe({
      next: (newBook) => {
        console.log("Libro creado: ", newBook);
        this.form.reset();
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error("Error al crear el libro: ", err);
      }
    })
  }

}

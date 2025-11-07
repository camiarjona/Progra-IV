import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private apiUrl = 'http://localhost:3000/books'
  private http = inject(HttpClient);
  private booksState = signal<Book[]>([]);

  public books = this.booksState.asReadonly();

  constructor() { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      tap(books => {
        this.booksState.set(books)
      })
    )
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book).pipe(
      tap(newBook => {
        this.booksState.update(currentBooks => [...currentBooks, newBook])
      })
    )
  }

  deleteBook(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}`).pipe(
      tap(() => {
        this.booksState.update(currentsBooks => currentsBooks.filter(book => book.id !== bookId));
      })
    )
  }

  getById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${bookId}`);
  }

  updateBook(bookId:number, updatedBook: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${bookId}`, updatedBook).pipe(
      tap((book) => {
        this.booksState.update(currentBooks => currentBooks.map(b => b.id ===
          bookId ? book : b
        ))
      })
    )
  }
}

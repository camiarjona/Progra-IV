import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Event } from '../models/event.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = "http://localhost:3000/events";

  private eventState = signal<Event[]>([]);
  public events = this.eventState.asReadonly();

  private http = inject(HttpClient);

  constructor() { }

  //metodo para obtener eventos
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl).pipe(
      tap(data => {
        this.eventState.set(data);
      }
      )
    )
  }

  //metodo para crear eventos
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event).pipe(
      tap(
        newEvent => {
          this.eventState.update(currentEvents => [...currentEvents, newEvent])
        }
      )
    )
  }

  // metodo para eliminar eventos
  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${eventId}`).pipe(
      tap(() => {
        this.eventState.update(currentEvents => currentEvents.filter(event => event.id !== eventId));
      }));
  }

  //obtener evento por id
  getById(eventId: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${eventId}`);
  }

  updateEvent(eventId: number, updatedEvent: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${eventId}`, updatedEvent).pipe(
      tap((event) => {
        this.eventState.update(currentEvents => currentEvents.map(e => e.id === eventId ? event : e));
      })
    );
  }
}


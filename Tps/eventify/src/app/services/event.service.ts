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

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl).pipe(
      tap(data => {
        this.eventState.set(data);
      }
      )
    )
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event).pipe(
      tap(
        newEvent => {
          this.eventState.update(currentEvents => [...currentEvents, newEvent])
        }
      )
    )
  }
}


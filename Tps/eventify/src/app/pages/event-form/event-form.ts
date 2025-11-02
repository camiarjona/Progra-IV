import { Component, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {

  eventService = inject(EventService);

  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    name: ['', [Validators.required]],
    date: ['', [Validators.required]],
    category: ['', [Validators.required]],
    description: ['', [Validators.required]]
  })

  addEvent() {
    if (this.form.invalid) {
      return;
    }
    const eventData = this.form.getRawValue();

    this.eventService.createEvent(eventData as Event).subscribe({
      next: (newEvent) => {
        console.log("Evento creado:", newEvent);
        this.form.reset();
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error("Error al crear evento:", err);
      }
    });
  }
}

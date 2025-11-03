import { Component, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  // para leer el id de la url
  private route = inject(ActivatedRoute);

  // variable para almacenar el id del evento en edición
  private editEventId: number | null = null;

  constructor() {
    // leer el id de la url si existe
    const idFromUrl = this.route.snapshot.paramMap.get('id');

    if (idFromUrl) {
      this.editEventId = Number(idFromUrl);

      // cargar los datos del evento en el formulario
      this.eventService.getById(this.editEventId).subscribe(event => {
        this.form.patchValue(event);
      })
    }
  }

  form = this.fb.nonNullable.group({
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

    if (this.editEventId) {
      this.update(eventData as Event);
    } else {
      this.create(eventData as Event);
    }
  }

  create(eventData: Event) {
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

  update(eventData: Event) {
    this.eventService.updateEvent(this.editEventId!, eventData).subscribe({
      next: (updatedEvent) => {
        console.log("Evento actualizado:", updatedEvent);
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error("Error al actualizar evento:", err);
      }
    });
  }
}

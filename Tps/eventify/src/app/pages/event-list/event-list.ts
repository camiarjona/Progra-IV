import { Component, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {

  eventService = inject(EventService);

  events = this.eventService.events;

  constructor() {
    this.eventService.getEvents().subscribe();
  }

}

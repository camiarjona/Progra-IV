import { Routes } from '@angular/router';
import { EventList } from './pages/event-list/event-list';
import { EventForm } from './pages/event-form/event-form';

export const routes: Routes = [
  {path: 'events', component: EventList },
  {path: 'events/create', component: EventForm },
  { path: 'events/edit/:id', component: EventForm},
  { path: '', redirectTo: 'events', pathMatch: 'full' }
];

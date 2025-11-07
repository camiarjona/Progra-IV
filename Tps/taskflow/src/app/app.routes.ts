import { Routes } from '@angular/router';
import { TaskDetails } from './pages/task-details/task-details';
import { TaskForm } from './pages/task-form/task-form';
import { TaskPage } from './pages/task-page/task-page';

export const routes: Routes = [
  {path: 'tasks', component: TaskPage},
  {path: 'tasks/new', component: TaskForm},
  {path: 'tasks/:id', component: TaskDetails},
  {path: 'task/edit/:id', component: TaskForm},
  {path: '', component: TaskPage},
];

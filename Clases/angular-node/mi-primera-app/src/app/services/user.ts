import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private users = signal([
    { id: 1, name: 'María', status: 'active' },
    { id: 2, name: 'Ana', status: 'inactive' },
    { id: 3, name: 'Juan', status: 'active' }
  ])

  getUsers() {
    return this.users.asReadonly();
  }
}

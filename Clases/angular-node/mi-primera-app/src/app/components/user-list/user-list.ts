import { User } from './../../services/user';
import { Component, signal, inject } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  showList = signal(true);

  private userService = inject(User)

  users = this.userService.getUsers();

  toggleList() {
    this.showList.update(value => !value)
  }
}

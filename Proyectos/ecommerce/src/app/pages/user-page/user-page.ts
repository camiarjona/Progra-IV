import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { UserRegister } from "../../components/user-register/user-register";
import { UserList } from "../../components/user-list/user-list";

@Component({
  selector: 'app-user-page',
  imports: [UserRegister, UserList],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css'
})
export class UserPage {
  userService = inject(UserService);
}

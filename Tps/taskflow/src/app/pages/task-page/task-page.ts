import { Component } from '@angular/core';
import { TaskForm } from "../task-form/task-form";
import { TaskList } from "../task-list/task-list";

@Component({
  selector: 'app-task-page',
  imports: [TaskForm, TaskList],
  templateUrl: './task-page.html',
  styleUrl: './task-page.css',
})
export class TaskPage {

}

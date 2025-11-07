import { TaskService } from './../../services/task.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  TaskService = inject(TaskService);
  tasks = this.TaskService.tasks;

  constructor() {
    this.TaskService.getTasks().subscribe();
  }

  onDelete(taskId: number): void {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      this.TaskService.deleteTask(taskId).subscribe();
    }
  }

  onToggle(taskId: number, task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    this.TaskService.updateTask(taskId, updatedTask).subscribe();
  }
}

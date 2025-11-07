import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router)
  private taskService = inject(TaskService);

  private editTaskId: number | null = null;
  public editMode: boolean = false;

  public priorities: string[] = [
    'Baja',
    'Media',
    'Alta'
  ]

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    description: [''],
    priority: ['', [Validators.required]]
  })

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editTaskId = +idParam;
      this.editMode = true;

      this.taskService.getById(this.editTaskId).subscribe(task => {
        this.form.patchValue(task);
      })
    }
  }

  addTask() {
    if (this.form.invalid) {
      return;
    }

    const taskData = this.form.getRawValue();

    if (this.editTaskId) {
      this.update(taskData);
    } else {
      this.create(taskData);
    }
  }

  update(taskData: Task) {
    if (!this.editTaskId) return;

    this.taskService.updateTask(this.editTaskId, taskData).subscribe({
      next: (updatedTask) => {
        console.log("Tarea actualizada", updatedTask);
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error("Error al actualizar la tarea", error);
      }
    })
  }

  create(taskData: Task) {
    this.taskService.postTask(taskData).subscribe({
      next: (newTask) => {
        console.log("Tarea creada", newTask);
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error("Error al crear la tarea", error);
      }
    })
  }
}

import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  private http = inject(HttpClient);

  private taskState = signal<Task[]>([]);
  public tasks = this.taskState.asReadonly();

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      tap(tasks => {
        this.taskState.set(tasks)
      })
    )
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      tap(newTaks => {
        this.taskState.update(currentTasks => [...currentTasks, newTaks]);
      })
    )
  }

  updateTask(taskId: number, updatedTask: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${taskId}`, updatedTask).pipe(
      tap((task) => {
        this.taskState.update(currentTaks => currentTaks.map(t => t.id === taskId ? task : t))
      })
    )
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`).pipe(
      tap(() => {
        this.taskState.update(currentTasks => currentTasks.filter(task => task.id !== taskId));
      })
    )
  }

  getById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${taskId}`);
  }

  toggleTaskCompletion(task: Task): Observable<Task> {
    const updatedTask = { ...task, completed: !task.completed };
    return this.updateTask(task.id!, updatedTask);
  }
}

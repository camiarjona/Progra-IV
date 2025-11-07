import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para el pipe 'lowercase'
import { RouterLink } from '@angular/router'; // Para el botón de "Volver"
import { ActivatedRoute } from '@angular/router'; // Para leer el ID de la URL
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    CommonModule, // Necesario para el pipe | lowercase
    RouterLink    // Necesario para routerLink
  ],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css'
})
export class TaskDetails {

  // 1. Inyectamos las herramientas que necesitamos
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  // 2. Definimos la propiedad pública que usará el HTML
  public task: Task | undefined;

  // 3. Ponemos la lógica en el CONSTRUCTOR
  constructor() {
    // Leemos el 'id' de la URL en el momento que se crea el componente
    const taskId = this.route.snapshot.paramMap.get('id');

    // Si existe un 'id' en la URL...
    if (taskId) {
      // ...llamamos al servicio para buscar esa tarea
      this.taskService.getById(Number(taskId)).subscribe(taskData => {
        // Asignamos la tarea recibida a nuestra propiedad pública
        this.task = taskData;
      });
    }
  }

}

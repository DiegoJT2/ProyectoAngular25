import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alumnos-count',
  imports: [],
  templateUrl: './alumnos-count.html',
  styleUrl: './alumnos-count.css',
})
export class AlumnosCount {
  opcionElegida: string = 'Todos';
  @Input() todos: number = 0;
  @Input() hombres: number = 0;
  @Input() mujeres: number = 0;
}

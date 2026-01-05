import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos-count',
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos-count.html',
  styleUrl: './alumnos-count.css',
})
export class AlumnosCount {
  opcionElegida: string = 'Todos';

  @Output() globalElegido: EventEmitter<string> = new EventEmitter<string>();

  @Input() todos: number = 0;
  @Input() hombres: number = 0;
  @Input() mujeres: number = 0;

  cuandoCambiemos(){
    this.globalElegido.emit(this.opcionElegida);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-un-alumno',
  imports: [CommonModule],
  templateUrl: './un-alumno.html',
  styleUrl: './un-alumno.css',
})
export class UnAlumno {
  nombre: string = 'Perico';
  apellidos: string = 'Delgado';
  direccion: string = 'Segovia Capital';
  edad: number = 60;
  columnas: number = 2;
  visibles: boolean = false;

  alternarVisibles(): void {
    this.visibles = !this.visibles;
  }
}
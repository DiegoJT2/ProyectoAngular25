import { Component } from '@angular/core';
import { Alumno } from '../Alumno';
import { Alumnos } from '../alumnos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumno-formulario',
  imports: [FormsModule],
  templateUrl: './alumno-formulario.html',
  styleUrl: './alumno-formulario.css',
})
export class AlumnoFormulario {
  alumno: Alumno = new Alumno(0, "", "", "", 1, "", "", "");

  constructor(private alumnoService: Alumnos) {}
  onSubmit() {
    this.alumnoService.addAlumno(this.alumno).subscribe();
  }
}

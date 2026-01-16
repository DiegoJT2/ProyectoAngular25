import { Component } from '@angular/core';
import { UnAlumno } from './alumnos/un-alumno/un-alumno';
import { AlumnosListado } from './alumnos/alumno-listado/alumnos-listado';
import { AlumnoFormulario } from './alumnos/alumno-formulario/alumno-formulario';

@Component({
  selector: 'app-root',
  imports: [UnAlumno, AlumnosListado, AlumnoFormulario],
  template: `
      <app-un-alumno></app-un-alumno>
      <app-alumno-formulario></app-alumno-formulario>
      <app-alumnos-listado></app-alumnos-listado>
  `,
  styleUrl: './app.css'
})
export class AppComponent {
  enzabezado: string = "DATOS COLEGIO";
  nombre: string = "Salesianos";
  ciudad: string = "Zaragoza";
  imagen: string = "https://zaragoza.salesianos.edu/colegio/wp-content/uploads/sites/2/2017/03/IMG_2114_p.jpg";

  getNombreCompleto(): string {
    return this.nombre + " " + this.ciudad;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnAlumno } from './alumnos/un-alumno/un-alumno';
import { AlumnosListado } from './alumnos/alumno-listado/alumnos-listado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UnAlumno, AlumnosListado],
  template: `
    <div align="center">
      <h1>{{ enzabezado }}</h1>
      <h2>{{ getNombreCompleto() }}</h2>
      <img [src]="imagen" height=200/>
      <app-un-alumno></app-un-alumno>
      <app-alumnos-listado></app-alumnos-listado>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  enzabezado: string = "DATOS COLEGIO";
  nombre: string = "Salesianos";
  ciudad: string = "Zaragoza";
  imagen: string = "https://zaragoza.salesianos.edu/colegio/wp-content/uploads/sites/2/2017/03/IMG_2114_p.jpg";

  getNombreCompleto(): string {
    return this.nombre + " " + this.ciudad;
  }
}

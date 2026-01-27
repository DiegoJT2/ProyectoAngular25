import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './elementos/menu/menu';
import { Selector } from "./elementos/selector/selector";
import { Alumnos } from './alumnos/alumnos';
import { Alumno } from './alumnos/Alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Selector],
  template: `
      <div class="container mt-5">
        <app-selector
        label="Alumnos: "
        [options]="alumnos"
        (selectedValueChange)="onAlumnoChange($event)">
      </app-selector>
      <p class="mt-3">Alumno seleccionado: {{selectedAlumno}}</p>
      </div>
      <app-menu
        [title] = "'Salesianos'"
        [menuItems] = "[
          {label: 'Inicio', link: '/', icono: 'fa fa-home'},
          {label: 'Alumno', link: '/alumno', icono: 'fa fa-user'},
          {label: 'Listado', link: '/alumno-lista', icono: 'fa fa-film'},
          {label: 'Insertar', link: '/alumno-insertar', icono: 'fa fa-pen'}
        ]"
      ></app-menu>
      <div class="container mt-4">
        <router-outlet></router-outlet>
      </div>
  `,
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  alumnos: {value: number, text: string}[] = [];
  selectedAlumno: number = 0;

  constructor(private alumnoService: Alumnos) {}
  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((data: Alumno[]) =>{
      this.alumnos = data.map(alumno => ({
        value: alumno.id,
        text: alumno.nombre
      }))
    })
  }
  onAlumnoChange(optionElegida:number):void{
    this.selectedAlumno = optionElegida;
  }
}
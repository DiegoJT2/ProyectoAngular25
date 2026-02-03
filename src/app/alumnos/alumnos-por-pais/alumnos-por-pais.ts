import { Component, OnInit } from '@angular/core';
import { Alumno } from '../Alumno';
import { Alumnos } from '../alumnos';
import { Paises } from '../../paises/paises';
import { Pais } from '../../paises/pais';
import { RouterLink } from '@angular/router';
import { AlumnoTituloPipe } from "../alumno-titulo.pipe";
import { BotonComponent } from "../../elementos/boton/boton";
import {Selector} from "../../elementos/selector/selector";

@Component({
  selector: 'app-alumnos-por-pais',
  imports: [RouterLink, AlumnoTituloPipe, BotonComponent, Selector],
  templateUrl: './alumnos-por-pais.html',
  styleUrl: './alumnos-por-pais.css',
})
export class AlumnosPorPais implements OnInit {
  alumnos: Alumno[] = [];
  paises: {value: any, text: string}[] = [];
  constructor(private alumnosService: Alumnos, private paisesService: Paises) {}
  ngOnInit(): void {
    this.paisesService.getPaises().subscribe((data: Pais[]) => {
      this.paises = data.map(pais => ({
        value: pais.id,
        text: pais.nombre
      }))
    });
  }
  onPaisChange(opcionElegida: number): void {
    this.alumnosService.getAlumnosByPais(opcionElegida).subscribe((data: Alumno[]) => {
      this.alumnos = data;
    })
  }
}
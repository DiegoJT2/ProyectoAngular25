import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlumnoTituloPipe } from '../alumno-titulo.pipe';
import { AlumnosCount } from '../alumnos-count/alumnos-count';
import { Alumno } from '../Alumno';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-alumnos-listado',
  imports: [CommonModule, AlumnoTituloPipe, AlumnosCount],
  templateUrl: './alumnos-listado.html',
  styleUrl: './alumnos-listado.css',
  providers: [Alumnos]
})
export class AlumnosListado implements OnInit {
  seleccion: string = 'Todos';
  
  alumnos: Alumno[] = [];

  constructor(private losAlumnos: Alumnos){}
  ngOnInit(): void {
    this.losAlumnos.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

  alCambiar(opcionElegida: string){
    this.seleccion = opcionElegida;
  }
  getTodos(): number {
    return this.alumnos.length;
  }
  getHombres(): number {
    return this.alumnos.filter(a => a.sexo == 'Hombre').length;
  }
  getMujeres(): number {
    return this.alumnos.filter(a => a.sexo == 'Mujer').length;
  }
}

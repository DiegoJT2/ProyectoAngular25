import { Component, OnInit } from '@angular/core';
import { Alumno } from '../Alumno';
import { Alumnos } from '../alumnos';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno-formulario',
  imports: [FormsModule],
  templateUrl: './alumno-formulario.html',
  styleUrl: './alumno-formulario.css',
})
export class AlumnoFormulario implements OnInit {
  alumno: Alumno = new Alumno(0, "", "", "", 1, "", "", "");
  editar: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private alumnoService: Alumnos) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if(id){
        this.editar = true;
        this.alumnoService.getAlumnosById(id).subscribe(alumno => {
          this.alumno = alumno;
        });
      }
    });
  }

  onSubmit() {
    this.alumnoService.addAlumno(this.alumno).subscribe(
      response => {
        this.router.navigate(['/alumno-lista']);
      }
    );
  }
}

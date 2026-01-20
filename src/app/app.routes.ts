import { Routes } from '@angular/router';
import { UnAlumno } from './alumnos/un-alumno/un-alumno';
import { AlumnosListado } from './alumnos/alumno-listado/alumnos-listado';
import { AlumnoFormulario } from './alumnos/alumno-formulario/alumno-formulario';

export const routes: Routes = [
    {path: '', redirectTo: '/alumno-lista', pathMatch: 'full'},
    {path: 'alumno', component: UnAlumno},
    {path: 'alumno-lista', component: AlumnosListado},
    {path: 'alumno-insertar', component: AlumnoFormulario},
];

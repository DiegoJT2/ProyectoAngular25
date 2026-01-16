import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Alumnos {
  private apiURL = "https://localhost:7232/api/alumno";

  constructor(private http: HttpClient){}

  getAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.apiURL).pipe(
      map(data => data)
    );
  }
  getAlumnosById(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${this.apiURL}/${id}`);
  }
  addAlumno(alumno: Alumno): Observable<Alumno>{
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post<Alumno>(this.apiURL, alumno, { headers });
  }
  deleteAlumno(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
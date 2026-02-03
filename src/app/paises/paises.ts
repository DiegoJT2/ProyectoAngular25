import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from './pais';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Paises {
  private apiURL = "https://localhost:7232/api/paises";
  constructor(private http: HttpClient) {}
  getPaises(): Observable<Pais[]>{
      return this.http.get<Pais[]>(this.apiURL).pipe(
        map(data => data)
      );
    }
}

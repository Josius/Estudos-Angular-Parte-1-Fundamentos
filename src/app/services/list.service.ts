import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(id: number) {
    // abaixo, código usado nas aulas anteriores a aula 20
    // return animals.filter((a) => animal.name !== a.name);
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {

    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}

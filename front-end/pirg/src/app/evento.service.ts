import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/api';

  getEvento(semana: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/evento?semana=${semana}`);
  }


  postEvento(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/evento`, payload);
  }
}

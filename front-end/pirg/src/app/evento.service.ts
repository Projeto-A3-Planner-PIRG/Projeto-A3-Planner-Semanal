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

  deletarEvento (id: number) {
    return this.http.delete<any>(`${this.apiUrl}/evento/del/${id}`);
  }

  postEvento(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/evento`, payload);
  }

  putEvento(payload: any, id): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/evento/${id}`, payload);
  }
}

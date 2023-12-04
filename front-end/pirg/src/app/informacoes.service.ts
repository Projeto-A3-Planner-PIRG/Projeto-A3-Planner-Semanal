import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacoesService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  postInformacoes(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/informacao`, payload);
  }

}

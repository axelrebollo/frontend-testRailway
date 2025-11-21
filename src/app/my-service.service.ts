import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private url = 'http://localhost:8080/api/textos'; //Call to endpoint

  constructor(private http: HttpClient) {}

  saveText(text: string): Observable<any> {
    return this.http.post(this.url, { text });
  }

  getTexts(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}

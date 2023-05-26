import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CardClient {
  constructor(private http: HttpClient) { }

  public getCard(name: string): Observable<any> {
    return this.http.get(`http://localhost:3000/cards?name=${name}`);
  }
}

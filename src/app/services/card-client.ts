import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardClient {
  constructor(private http: HttpClient) { }

  public getCard() {
    return this.http.get('http://localhost:3000/cards?name=Counterspell');
  }
}

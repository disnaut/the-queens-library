import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CardClient {
  constructor(private http: HttpClient) { }

  public getCard(name: string, types: string, artist: string, set: string, rarity: string,
                 colors: string[], keywords: string[]): Observable<any> {
    return this.http.get(`http://localhost:3000/cards`, { params: { name, types, artist, set, rarity, colors, keywords } });
  }
}

import { Component, OnInit } from '@angular/core';
import { CardClient } from 'src/app/services/card-client';

class Card {
  name: string;
  description: string;
  cmc: number;
  type: string;

  constructor(name: string, description: string, cmc: number, type: string) {
    this.name = name;
    this.description = description;
    this.cmc = cmc;
    this.type = type;
  }
}

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'cmc', 'type'];
  dataSource: Card[] = [];
  cardClient: CardClient;

  constructor(cardClient: CardClient) {
    this.cardClient = cardClient;
  }

  ngOnInit(): void {
    this.cardClient.getCard().subscribe((response: any) => {
      let card: Card = new Card(response.name, response.oracle_text, response.cmc, response.type_line);
      this.dataSource.push(card);
    });
  }
}

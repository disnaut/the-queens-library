import { Component, OnInit } from '@angular/core';
import { CardClient } from 'src/app/services/card-client';
import { Card } from 'src/app/types/Card';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'cmc', 'type'];
  dataSource: Card[] = [];
  cardClient: CardClient;
  searchQuery: any;

  constructor(cardClient: CardClient) {
    this.cardClient = cardClient;
  }

  ngOnInit(): void {
  }

  public search(): void {
    this.cardClient.getCard(this.searchQuery).subscribe((data: any) => {
      this.dataSource = data;
    });
  }
}

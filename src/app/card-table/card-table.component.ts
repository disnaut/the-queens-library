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
  nameInput: string = '';
  typeInput: string = '';
  artistInput: string = '';
  setInput: string = '';
  rarityInput: string = '';
  colorsInput: string[] = [];
  keywordsInput: string[] = [];

  constructor(cardClient: CardClient) {
    this.cardClient = cardClient;
  }

  ngOnInit(): void {
  }

  public search(): void {
    this.cardClient.getCard(this.nameInput, this.typeInput, this.artistInput, this.setInput,
                            this.rarityInput, this.colorsInput, this.keywordsInput)
                            .subscribe((data: any) => {
      this.dataSource = data;
    });
  }
}

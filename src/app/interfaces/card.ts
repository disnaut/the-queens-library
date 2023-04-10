export class Card {
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

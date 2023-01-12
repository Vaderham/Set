import type { Card } from "../Cards/Card";

export class DeckController {
    private deck: Card[];
    private cardsInPlay: Card[] = [];

    constructor(deck: Card[]){
        this.deck = this.shuffle(deck);
    }

    public dealStartingCards(): Card[]{
        this.dealCards(12);
        return this.cardsInPlay;
    }

    public dealCards(numberToDeal: number): Card[]{
        if(this.deck.length < numberToDeal) {
            this.cardsInPlay.push(...this.deck.splice(0, this.deck.length));
            return this.cardsInPlay;
        }
        this.cardsInPlay.push(...this.deck.splice(0, numberToDeal));
        return this.cardsInPlay;
    }

    private shuffle(deck: Card[]): Card[] {
        let currentIndex = deck.length;
        let randomIndex: number;
      
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
      
          [deck[currentIndex], deck[randomIndex]] = [
            deck[randomIndex], deck[currentIndex]];
        }
        return deck;
      }
}
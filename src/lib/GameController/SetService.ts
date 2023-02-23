import type { CardModel } from "$lib/Cards/Card";

export class SetService {
    constructor(){}

    public findSets(cards: CardModel[]): CardModel[][] {
        let sets: CardModel[][] = [];
        cards.forEach(
            (card1, index) => {
                for (let card2 = index + 1; card2 < cards.length; card2++) {
                    for (let card3 = index + 2; card3 < cards.length; card3++) {
                        if (this.isSet(cards[index], cards[card2], cards[card3])) {
                            sets.push([cards[index], cards[card2], cards[card3]]);
                        } 
                    }
                }
            }
        )
        return sets;
    }

    //TODO: Refactor this to take in a cardModel array
    public isSet(card1: CardModel, card2: CardModel, card3: CardModel): boolean{
        return ((card1.amount - 1) + (card2.amount - 1) + (card3.amount - 1)) % 3 === 0
            && ((card1.colour.id) + (card2.colour.id) + (card3.colour.id)) % 3 === 0
            && ((card1.fill.id) + (card2.fill.id) + (card3.fill.id)) % 3 === 0
            && ((card1.shape.id) + (card2.shape.id) + (card3.shape.id)) % 3 === 0;
    }
}
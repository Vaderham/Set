import { CardModel } from "../Cards/Card";
import { AvailableColours, AvailableAmounts, AvailableFills, AvailableShapes } from "../Cards/Features/FeaturesConstants";

export class DeckBuilder {
    constructor(){}

    public BuildDeck(): CardModel[] {
        let deck : CardModel[] = [];

        AvailableColours.forEach(colour => {
            AvailableAmounts.forEach(amount => {
                AvailableFills.forEach(fill => {
                    AvailableShapes.forEach(shape => {
                        deck.push(new CardModel(colour, shape, amount, fill));
                    });
                });
            });
        });
        return deck;
    }
}
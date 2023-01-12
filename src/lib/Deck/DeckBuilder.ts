import { Card } from "../Cards/Card";
import { AvailableColours, AvailableAmounts, AvailableFills, AvailableShapes } from "../Cards/Features/FeaturesConstants";

export class DeckBuilder {
    constructor(){}

    public BuildDeck(): Card[] {
        let deck : Card[] = [];

        AvailableColours.forEach(colour => {
            AvailableAmounts.forEach(amount => {
                AvailableFills.forEach(fill => {
                    AvailableShapes.forEach(shape => {
                        deck.push(new Card(colour, shape, amount, fill));
                    });
                });
            });
        });

        return deck;
    }
}
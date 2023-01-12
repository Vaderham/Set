import type { Colour } from "./Features/Colour";
import type { Fill } from "./Features/Fill";
import type { Shape } from "./Features/Shape";


export class Card {
    public colour: Colour;
    public shape: Shape;
    public amount: number;
    public fill: Fill;

    constructor(colour: Colour, shape: Shape, amount: number, fill: Fill){
        this.colour = colour;
        this.shape = shape;
        this.amount = amount;
        this.fill = fill;
    }


}
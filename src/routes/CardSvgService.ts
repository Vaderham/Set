import type { Colour } from "$lib/Cards/Features/Colour";
import type { Fill } from "$lib/Cards/Features/Fill";
import type { Shape } from "$lib/Cards/Features/Shape";
import * as FeaturesConstants from "$lib/Cards/Features/FeaturesConstants";

export class CardSvgService{
    constructor(){};

    // public GetSvgSource(shape: Shape): string{
    //     // Find the correct shape for the input.
    //     // Get shape base, insert colour and fill.
    //     let shapeBase: string;

    //     switch(shape.name){
    //         case "Squiggle": {
    //             shapeBase = './'
    //             break;
    //         }
    //         case "": {

    //         }
    //     } 
    // };

    public GetSvgPattern(colour: Colour, fill: Fill): SVGElement {
        // 
        let thing: SVGElement = new SVGElement();
        return thing;
    }
}
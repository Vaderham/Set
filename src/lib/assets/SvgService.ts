import type { CardModel } from "$lib/Cards/Card";
import type { Colour } from "$lib/Cards/Features/Colour";
import type { Fill } from "$lib/Cards/Features/Fill";

export class SvgService {
    private svgFormatting = {
        height: 50,
        width: 125    
    }

    //TODO: Fix up the card types to make more sense in this context. Fill value?! More like "pattern"

    constructor(){
    }

    public getSVG(cardData: CardModel): string {
        switch (cardData.shape.name) {
            case 'Squiggle':
                return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.svgFormatting.width}" height="${this.svgFormatting.height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="squiggle">
                            <defs id="1"/>
                            ${cardData.fill.fillValue}
                            <g id="layer1">
                                <path fill="${this.getFill(cardData.fill, cardData.colour)}" style="stroke:${cardData.colour.colourValue};stroke-width:3;stroke-opacity:1" d="m 2.7360853,31.850165 c 0,0 -5.32258,-15.701613 8.0725807,-25.6370966 13.39516,-9.9354838 31.491935,1.951613 31.491935,1.951613 0,0 9.048388,3.5483866 22.08871,-3.459677 13.040321,-7.0080649 13.040321,2.83871 13.040321,2.83871 0,0 1.153226,10.9999996 -3.725805,17.2096776 -4.879033,6.209676 -12.774194,10.733871 -20.491936,11.177418 -7.717743,0.443548 -16.23387,-4.524192 -16.23387,-4.524192 0,0 -10.467742,-3.19355 -15.524194,0.798385 C 16.397375,36.196939 6.1070533,44.180809 2.7360853,31.850165 Z" id="path285"/>
                            </g>
                        </svg>`
            case 'Pill':
            return `<svg width="${this.svgFormatting.width}" height="${this.svgFormatting.height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="pill" xmlns="http://www.w3.org/2000/svg">
                        <defs id="2"/>
                        ${cardData.fill.fillValue}
                        <g id="layer1">
                            <g class="currentLayer" id="g10588" transform="matrix(0.30855563,0,0,0.33563276,-76.099803,-41.62419)">
                                <title id="title10585">Layer 1</title>
                                <path fill="${this.getFill(cardData.fill, cardData.colour)}" style="stroke-width:4" stroke="${cardData.colour.colourValue}" stroke-linejoin="round" stroke-dashoffset=" id="svg_1" d="m 293.95861,138.30364 h 162.61913 v 0 c 21.30357,0 38.57348,18.51944 38.57348,41.36432 0,22.84487 -17.26992,41.3643 -38.57348,41.3643 H 293.95861 v 0 c -21.30355,0 -38.57348,-18.51943 -38.57348,-41.3643 0,-22.84489 17.26993,-41.36432 38.57348,-41.36432 z"/>
                            </g>
                        </g>
                    </svg>`
            case 'Diamond':
            return `<svg width="${this.svgFormatting.width}" height="${this.svgFormatting.height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="diamond" xmlns="http://www.w3.org/2000/svg">
                        <defs id="3"/>
                        ${cardData.fill.fillValue}
                        <g id="layer1">
                            <path fill="${this.getFill(cardData.fill, cardData.colour)}" style="stroke-width:4" stroke="${cardData.colour.colourValue}"; d="M 37.955185,0.59866222 0.95785955,18.678261 41.427426,37.955185 77.706357,19.037459 Z" id="path10473"/>
                        </g>
                    </svg>`
            default:
                return '';
        }
    }

    private getFill(fill: Fill, colour: Colour): string {
        if(fill.fillValue) {
            return `url(#${fill.patternId})`;
        } 
        else {
            return fill.name == 'Empty' ? fill.fillValue : colour.colourValue;
        }
    }
}
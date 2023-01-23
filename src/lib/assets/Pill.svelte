<script lang="ts">
    import type { CardModel } from "$lib/Cards/Card";

    export let height: number;
    export let width: number;
    export let fill: null | string = null;
    export let cardData: CardModel;

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="diamond" xmlns="http://www.w3.org/2000/svg">
    <defs id="defs7023"/>
    ${cardData.fill.fillValue}
    <g id="layer1">
        <path fill="${fill}" style="stroke:${cardData.colour.colourValue};stroke-width:1" d="M 37.955185,0.59866222 0.95785955,18.678261 41.427426,37.955185 77.706357,19.037459 Z" id="path10473"/>
    </g>
</svg>`

</script>

{@html svg}
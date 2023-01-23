<script lang="ts">
    import type { CardModel } from "$lib/Cards/Card";

    export let height: number;
    export let width: number;
    export let fill: null | string = null;
    export let cardData: CardModel;

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="pill" xmlns="http://www.w3.org/2000/svg">
        <defs id="defs7023"/>
        ${cardData.fill.fillValue}
        <g id="layer1">
            <g class="currentLayer" id="g10588" transform="matrix(0.30855563,0,0,0.33563276,-76.099803,-41.62419)">
                <title id="title10585">Layer 1</title>
                <path style=" stroke-width:4" fill="${fill}" stroke="${cardData.colour.colourValue}" stroke-linejoin="round" stroke-dashoffset=" id="svg_1" d="m 293.95861,138.30364 h 162.61913 v 0 c 21.30357,0 38.57348,18.51944 38.57348,41.36432 0,22.84487 -17.26992,41.3643 -38.57348,41.3643 H 293.95861 v 0 c -21.30355,0 -38.57348,-18.51943 -38.57348,-41.3643 0,-22.84489 17.26993,-41.36432 38.57348,-41.36432 z"/>
            </g>
        </g>
    </svg>`
</script>

{@html svg}
<script lang="ts">
	import type { Card } from "$lib/Cards/Card";

    export let cardData: Card;
    let shapeName = cardData.shape.name;
    let pattern = cardData.fill.fillValue;

    let fill = `<pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle mask="url(#fade)" cx="20" cy="20" r="20"></circle>
                </pattern>`

    let height: number = 50;
    let width: number = 120;
</script>

{#if shapeName == 'Squiggle'}
    <svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="svg7026">
        <sodipodi:namedview id="namedview7028" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" showgrid="false" inkscape:zoom="2.2097881" inkscape:cx="161.10142" inkscape:cy="149.33559" inkscape:window-width="1920" inkscape:window-height="1017" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
        <defs id="defs7023"/>
        {#if pattern}
            {@html pattern}
        {/if}
        <g id="layer1">
        <path style="fill:#000000;fill-opacity:0;stroke:{cardData.colour.colourValue};stroke-width:0.264583;stroke-opacity:1" d="m 2.7360853,31.850165 c 0,0 -5.32258,-15.701613 8.0725807,-25.6370966 13.39516,-9.9354838 31.491935,1.951613 31.491935,1.951613 0,0 9.048388,3.5483866 22.08871,-3.459677 13.040321,-7.0080649 13.040321,2.83871 13.040321,2.83871 0,0 1.153226,10.9999996 -3.725805,17.2096776 -4.879033,6.209676 -12.774194,10.733871 -20.491936,11.177418 -7.717743,0.443548 -16.23387,-4.524192 -16.23387,-4.524192 0,0 -10.467742,-3.19355 -15.524194,0.798385 C 16.397375,36.196939 6.1070533,44.180809 2.7360853,31.850165 Z" id="path285"/>
        </g>
    </svg>
    {:else if shapeName === 'Pill'}
    <svg width="{width}" height="{height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="svg7026" xmlns="http://www.w3.org/2000/svg">
        <defs id="defs7023"/>
        <g id="layer1">
            <g class="currentLayer" id="g10588" transform="matrix(0.30855563,0,0,0.33563276,-76.099803,-41.62419)">
                <title id="title10585">Layer 1</title>
                <path fill="#ffffff" stroke={cardData.colour.colourValue} stroke-width="2" stroke-linejoin="round" stroke-dashoffset="" fill-rule="nonzero" id="svg_1" d="m 293.95861,138.30364 h 162.61913 v 0 c 21.30357,0 38.57348,18.51944 38.57348,41.36432 0,22.84487 -17.26992,41.3643 -38.57348,41.3643 H 293.95861 v 0 c -21.30355,0 -38.57348,-18.51943 -38.57348,-41.3643 0,-22.84489 17.26993,-41.36432 38.57348,-41.36432 z" style="color:#000000" class=""/>
            </g>
        </g>
    </svg>
    {:else }
    <svg width="{width}" height="{height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="svg7026" xmlns="http://www.w3.org/2000/svg">
        <defs id="defs7023"/>
        <g id="layer1">
            <path style="fill:#000000;fill-opacity:0;stroke:{cardData.colour.colourValue};stroke-width:0.264999" d="M 37.955185,0.59866222 0.95785955,18.678261 41.427426,37.955185 77.706357,19.037459 Z" id="path10473"/>
        </g>
    </svg>
{/if}
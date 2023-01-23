<script lang="ts">
	import type { CardModel } from "$lib/Cards/Card";

    export let height: number;
    export let width: number;
    export let fill: null | string = null;
    export let cardData: CardModel;


    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 79.374999 39.6875" version="1.1" id="squiggle">
    <sodipodi:namedview id="namedview7028" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" showgrid="false" inkscape:zoom="2.2097881" inkscape:cx="161.10142" inkscape:cy="149.33559" inkscape:window-width="1920" inkscape:window-height="1017" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
    <defs id="defs7023"/>

    <pattern id="striped" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)"><line x1="0" y="0" x2="0" y2="14" stroke="#000000" stroke-width="2" /></pattern>
    <g id="layer1">
    <path fill="${fill}" style="stroke:${cardData.colour.colourValue};stroke-width:1;stroke-opacity:1" d="m 2.7360853,31.850165 c 0,0 -5.32258,-15.701613 8.0725807,-25.6370966 13.39516,-9.9354838 31.491935,1.951613 31.491935,1.951613 0,0 9.048388,3.5483866 22.08871,-3.459677 13.040321,-7.0080649 13.040321,2.83871 13.040321,2.83871 0,0 1.153226,10.9999996 -3.725805,17.2096776 -4.879033,6.209676 -12.774194,10.733871 -20.491936,11.177418 -7.717743,0.443548 -16.23387,-4.524192 -16.23387,-4.524192 0,0 -10.467742,-3.19355 -15.524194,0.798385 C 16.397375,36.196939 6.1070533,44.180809 2.7360853,31.850165 Z" id="path285"/>
    </g>
    </svg>`
</script>

{@html svg}
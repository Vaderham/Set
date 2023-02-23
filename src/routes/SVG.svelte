<script lang="ts">
	import { SvgService } from "$lib/assets/SvgService";
    import type { CardModel } from "$lib/Cards/Card";

    export let cardData: CardModel;
    let svg = new SvgService().getSVG(cardData);

</script>

<!-- {@html Svg} -->

{@html svg}
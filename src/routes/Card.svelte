<script lang="ts">
	import type { CardModel } from "$lib/Cards/Card";
	import Svg from "./SVG.svelte";

    export let cardData: CardModel;

    let baseStyle = `rounded-lg h-64 w-48 grid grid-cols-1 grid-rows-${cardData.amount} content-center place-items-center`

    $: divStlye = cardData.selected 
        ? `border-4 border-orange-400 ${baseStyle}`
        : `border-2 ${baseStyle}`;
</script>

<!-- {@debug cardData} -->

<div class="{divStlye}">
    {#each {length: cardData.amount} as count}
        <Svg {cardData}/>
    {/each}
</div>

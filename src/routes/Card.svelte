<script lang="ts">
	import type { Card } from "$lib/Cards/Card";
	import Svg from "./SVG.svelte";

    export let cardData: Card;
</script>


<div class="border-2 rounded-lg h-64 w-48 grid grid-cols-1 grid-rows-{cardData.amount} content-center place-items-center">
    {#each {length: cardData.amount} as count}
        <Svg {cardData}/>
    {/each}
</div>
<script lang="ts">
	import Diamond from "$lib/assets/Diamond.svelte";
	import Pill from "$lib/assets/Pill.svelte";
    import Squiggle from "$lib/assets/Squiggle.svelte";
    import type { CardModel } from "$lib/Cards/Card";
	import { onMount } from 'svelte';

    export let cardData: CardModel;
    let shapeName = cardData.shape.name;
    let pattern = cardData.fill.fillValue;
    let patternId = cardData.fill.patternId;
    let fill: string;

    onMount(() => {
        shapeName = cardData.shape.name;
        pattern = cardData.fill.fillValue;
        patternId = cardData.fill.patternId;
        fill = getFill();
    });

    function getFill(): string {
        if(patternId) {
            return `url(#${patternId})`;
        } 
        else {
            return cardData.fill.name == 'Empty' ? pattern : cardData.colour.colourValue;
        }
    }

    let svgDeets = {
        height: 50,
        width: 125,
        fill: getFill()
    }
</script>

{#if shapeName == 'Squiggle'}
    <Squiggle cardData={cardData} {...svgDeets} />
    {:else if shapeName === 'Diamond'}
    <Diamond cardData={cardData} {...svgDeets} />
    {:else }
    <Pill cardData={cardData} {...svgDeets} />
{/if}
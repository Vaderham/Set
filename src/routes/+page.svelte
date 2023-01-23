<script lang="ts">
	import type { CardModel } from '$lib/Cards/Card';
	import { SetService } from '$lib/GameController/SetService';
    import { beforeUpdate, onMount } from 'svelte';
	import { DeckBuilder } from '../lib/Deck/DeckBuilder';
	import { DeckController } from '../lib/GameController/DeckController';
	import Card from './Card.svelte';

    let cardsInPlay: CardModel[] = [];
    let dealer: DeckController;
    let deck: CardModel[];
    let foundSets: number = 0;
    let setService = new SetService;

    onMount(() => {
        deck = new DeckBuilder().BuildDeck();
        dealer = new DeckController(deck);
        cardsInPlay = dealer.dealStartingCards();
        console.log(setService.findSets(cardsInPlay));
        foundSets = setService.findSets(cardsInPlay).length;
    })

    function dealCards() {
        cardsInPlay = dealer.dealCards(4);
        console.log(setService.findSets(cardsInPlay));
        foundSets = setService.findSets(cardsInPlay).length;
    }

    /** @type {import('./$types').PageData} */

</script>

<!-- {@debug cardsInPlay} -->

<h1 class="font-bold text-center m-6 font-sans text-lg">Welcome to Set!</h1>
<p>Number of sets: {foundSets}</p>
<button id="deal" class="bg-blue-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" on:click={dealCards}>Deal more cards</button>
{#if cardsInPlay}
    <div class="grid gap-4 grid-cols-4 grid-rows-4 mx-auto justify-items-center w-1/2">
        {#each cardsInPlay as card (card)}
            <Card cardData={card} />
        {/each}
        
    </div>
{/if}

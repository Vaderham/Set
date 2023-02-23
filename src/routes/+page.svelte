<script lang="ts">
	import type { CardModel } from '$lib/Cards/Card';
	import { SetService } from '$lib/GameController/SetService';
    import { onMount } from 'svelte';
	import { DeckBuilder } from '../lib/Deck/DeckBuilder';
	import { DeckController } from '../lib/GameController/DeckController';
	import Card from './Card.svelte';

    let cardsInPlay: CardModel[] = [];
    let dealer: DeckController;
    let deck: CardModel[];
    let foundSets: number = 0;
    let setService = new SetService;
    let cardSet: CardModel[] = [];
    let selectedIndexes: number[] = [];

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

    function selectCard(card: CardModel, index: number) {
        cardsInPlay[index].selected = true;
        selectedIndexes.push(index);
        cardSet.push(card);

        if (cardSet.length < 3) {
            console.log(cardSet);
        }

        if(cardSet.length == 3) {
            if(setService.isSet(cardSet[0], cardSet[1], cardSet[2])){
                console.log(`It's a set!`);
            } else {
                console.log(`it's NOT a set!`);
                clearSelectedCards();
            }
            cardSet = [];
        }
    }

    function clearSelectedCards(){
        selectedIndexes.forEach(selectedIndex => {
            cardsInPlay[selectedIndex].selected = false;
        })
    }
</script>

<!-- {@debug cardsInPlay} -->

<h1 class="font-bold text-center m-6 font-sans text-lg">Welcome to Set!</h1>
<p>Number of sets: {foundSets}</p>
<button id="deal" class="bg-blue-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" on:click={dealCards}>Deal more cards</button>
{#if cardsInPlay}
    <div class="grid grid-flow-row gap-4 grid-cols-4 grid-rows-4 mx-auto justify-items-center w-1/2">
        {#each cardsInPlay as card, index}
            <button on:click={() => {selectCard(card, index)}}>
                <Card cardData={card} />
            </button>
        {/each}
    </div>
{/if}

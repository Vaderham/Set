<script lang="ts">
	import { DeckBuilder } from '../lib/Deck/DeckBuilder';
	import { DeckController } from '../lib/GameController/DeckController';
	import Card from './Card.svelte';

    let deck = new DeckBuilder().BuildDeck();
    let startingcards = new DeckController(deck).dealStartingCards();

    /** @type {import('./$types').PageData} */

</script>

<h1 class="font-bold text-center m-6 font-sans text-lg">Welcome to Set!</h1>
<div class="grid gap-4 grid-cols-4 grid-rows-4 mx-auto justify-items-center w-1/2">
    {#each startingcards as card}
        <Card cardData={card}/>
    {/each}
</div>
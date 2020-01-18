import { createDeck, drawCard, createPlayerDeck } from './helpers/helper';

let deck = createDeck();
let cardDrawn = drawCard(deck);
let players = ["Vaibhav", "Ravi", "Vicky", "Pawan"];
let playerDecks = {};
players.forEach(async player => {
    playerDecks[player]= createPlayerDeck(deck,3);
    console.log(playerDecks[player], player);
})

// console.log(cardDrawn);
// console.log(deck.size);
console.table(playerDecks);
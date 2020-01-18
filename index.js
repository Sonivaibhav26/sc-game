import { createDeck, drawCard, createPlayerDeck } from './helpers/helper';
import { createMeta, compare } from './helpers/compare';

let deck = createDeck();
let cardDrawn = drawCard(deck);
let players = ["Vaibhav", "Ravi", "Vicky", "Pawan"];
let playerDecks = {};
players.forEach(player => {
    playerDecks[player] = {}
    playerDecks[player].deck= createPlayerDeck(deck,3);
    playerDecks[player].meta= createMeta(playerDecks[player].deck);
    console.table(playerDecks[player]);
})

// console.log(cardDrawn);
// console.log(deck.size);
// console.table(playerDecks);
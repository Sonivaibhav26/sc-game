import { createDeck ,drawCard } from './helpers/helper';

let deck = createDeck();
let cardDrawn = drawCard(deck);

console.log(cardDrawn);
console.log(deck.size);
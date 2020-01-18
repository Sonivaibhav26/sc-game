import { createDeck, drawCard, createPlayerDeck } from './helpers/helper';
import { createMeta, compare } from './helpers/compare';

let deck = createDeck();
let players = ["Vaibhav", "Ravi", "Vicky", "Pawan"];
let playerDecks = {};

players.forEach(player => {
    playerDecks[player] = {}
    playerDecks[player].deck = createPlayerDeck(deck, 3);
    playerDecks[player].meta = createMeta(playerDecks[player].deck);
    playerDecks[player].name = player;
    // console.table(playerDecks[player]);
})

let scoreBoard = Object.keys(playerDecks).reduce((result, player) => {
    player = playerDecks[player];
    if (!result.winner) {
        result.winner = player;
        result.decks = [{ name: player.name , deck: player.deck }];
        // result.decks = [player.deck]
    } else {
        let winner = compare(result.winner, player);
        console.log(winner);
        if (winner.winner === player.name) {
            result.winner = player;
        }
        result.decks.push({ name: player.name , deck: player.deck });
    }
    return result;
}, {})

console.table(scoreBoard.decks);
console.table(scoreBoard.winner);
import { createDeck, drawCard, createPlayerDeck } from './helpers/helper';
import { createMeta, compare } from './helpers/compare';

let deck = createDeck();
let players = ["Vaibhav", "Ravi", "Vicky", "Pawan", "Amit"];
let playerDecks = {};

players.forEach(player => {
    playerDecks[player] = {}
    playerDecks[player].deck = createPlayerDeck(deck, 3);
    playerDecks[player].meta = createMeta(playerDecks[player].deck);
    playerDecks[player].name = player;
})

export let play = (playerDecks) =>
    Object.keys(playerDecks).reduce((result, player) => {
        player = playerDecks[player];
        if (!result.winner) {
            result.winner = player;
            result.table = [{ name: player.name, ...player.meta }];
        } else {
            let winner = compare(result.winner, player, deck);
            if (winner.winner === player.name) {
                result.winner = player;
            }
            result.rule = winner.rule;
            result.table.push({ name: player.name, ...player.meta });
        }
        return result;
    }, {});

let scoreBoard = play(playerDecks);
console.info("==============================> Winner : ->", scoreBoard.winner.name);
console.info("==============================> Rule : ->", scoreBoard.rule);
console.table(scoreBoard.table)


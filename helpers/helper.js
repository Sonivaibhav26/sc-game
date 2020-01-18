const loadDeck = (type, deck) => {
    for (let index = 1; index < 14; index++) {
        deck.push({ type, value: 14 - index })
    }
}

const createDeck = _ => {
    let deck = [];
    loadDeck("s", deck);
    loadDeck("c", deck);
    loadDeck("d", deck);
    loadDeck("h", deck);
    return deck;
}


const drawCard = (deck) => {
    let size = deck.length;
    let rcard = Math.floor(Math.random() * size -1)
    let card = deck.splice(rcard,1);
    return card[0];
}

const createPlayerDeck = (deck,size) => {
    let playerDeck = [];
    for (let index = 0; index < size; index++) {
        playerDeck.push(drawCard(deck));
    }
    return playerDeck;
}

export { createDeck, drawCard , createPlayerDeck};
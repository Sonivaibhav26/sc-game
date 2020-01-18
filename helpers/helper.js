const loadDeck = (type, deck) => {
    let init = deck.size;
    for (let index = 1; index < 14; index++) {
        deck.set(init + index, { type, value: 14 - index })
    }
}

const createDeck = _ => {
    let deck = new Map();
    loadDeck("s", deck);
    loadDeck("c", deck);
    loadDeck("d", deck);
    loadDeck("h", deck);
    return deck;
}


const drawCard = (deck) => {
    let size = deck.size;
    let rcard = Math.floor(Math.random() * size)
    let card = deck.get(rcard);
    deck.delete(rcard);
    return card;
}

export { createDeck, drawCard };
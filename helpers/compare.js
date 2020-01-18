const createMeta = (deck) => {
    return deck.reduce((result, card, index, deck) => {
        result.total += card.value;
        result.values.push(card.value);
        if (result.uniqueValues.indexOf(card.value === -1)) {
            result.uniqueValues.push(card.value)
        } else {
            result.pair = true;
            result.pairValue = card.value;
        }
        if (result.counts[card.value]) {
            result.counts[card.value] += 1
        } else {
            result.counts[card.value] = 1;
        }
        if (index === deck.length - 1) {
            if (result.uniqueValues.length === 1) {
                trail = true;
                trailvalue =  result.uniqueValues[0];
            }
        }
        return result;
    }, {
        total: 0,
        values: [],
        uniqueValues: [],
        trail: false,
        trailvalue: 0,
        pair: false,
        pairValue: 0,
        counts: {}
    })
}


const compare = (deck1, deck2) => {
    deck1
}

export { createMeta, compare }
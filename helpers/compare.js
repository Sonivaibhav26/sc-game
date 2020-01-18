const priority = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];

const createMeta = (deck) => {
    return deck.reduce((result, card, index, deck) => {
        result.total += card.value;
        if (card.value > result.highest) {
            result.highest = card.value;
        }
        result.values.push(card.value);
        if (result.uniqueValues.indexOf(card.value) === -1) {
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
                trailvalue = result.uniqueValues[0];
            }
            if (result.uniqueValues.length === 3) {
                result.uniqueValues.sort((a, b) => a - b)
                if (result.uniqueValues[2] - result.uniqueValues[0] === 2) {
                    result.sequence = true;
                }
            }
        }
        return result;
    }, {
        total: 0,
        highest: 0,
        values: [],
        uniqueValues: [],
        trail: false,
        trailvalue: 0,
        pair: false,
        pairValue: 0,
        counts: {},
        sequence: false
    })
}

const compare = (p1, p2) => {
    let result = {
        winner: null,
        rule: null
    };
    //Case for 2 trails
    //case for 1 trail
    //case for 1 sequence
    //case for 2 sequence
    //case for 1 pair
    //case for 2 pair
    //case for Top card
    //cases for draw
}

export { createMeta, compare }
import { r_2trail, r_trail, r_2sequence, r_sequence, r_2pair, r_pair, r_topcard , r_draw } from './rules'

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
                result.trail = true;
                result.trailvalue = result.uniqueValues[0];
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

const compare = (p1, p2, deck) => {
    let result = {
        winner: null,
        rule: null
    };
    let r_2trail_result = r_2trail(p1, p2);
    if (r_2trail_result) {
        result.winner = r_2trail_result;
        result.rule = "High Trail";
        return result;
    }
    let r_1trail_result = r_trail(p1, p2);
    if (r_1trail_result) {
        result.winner = r_1trail_result;
        result.rule = "Trail";
        return result;
    }
    let r_2sequence_result = r_2sequence(p1, p2);
    if (r_2sequence_result) {
        result.winner = r_2sequence_result;
        result.rule = "High Sequence";
        return result;
    }
    let r_sequence_result = r_sequence(p1, p2);
    if (r_sequence_result) {
        result.winner = r_sequence_result;
        result.rule = "Sequence";
        return result;
    }
    let r_2pair_result = r_2pair(p1, p2);
    if (r_2pair_result) {
        result.winner = r_2pair_result;
        result.rule = "High Pair";
        return result;
    }
    let r_pair_result = r_pair(p1, p2);
    if (r_pair_result) {
        result.winner = r_pair_result;
        result.rule = "Pair";
        return result;
    }
    let r_topcard_result = r_topcard(p1, p2);
    if (r_topcard_result) {
        result.winner = r_topcard_result;
        result.rule = "Top Card";
        return result;
    } else {
        let r_draw_result = r_draw(p1, p2, deck);
        if (r_draw_result) {
            result.winner = r_draw_result;
            result.rule = "Draw";
            return result;
        }
    }
}

export { createMeta, compare }
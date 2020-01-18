import { drawCard } from './../helpers/helper';
const priority = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];

export const r_2trail = (p1, p2) => {
    if (p1.meta.trail & p2.meta.trail) {
        if (priority.indexOf(p1.meta.trailvalue) > priority.indexOf(p2.meta.trailvalue)) {
            return p1.name
        } else {
            return p2.name
        }
    } else {
        return null;
    }
}

export const r_trail = (p1, p2) => {
    if (p1.meta.trail) {
        return p1.name
    } else if (p2.meta.trail) {
        return p2.name
    }
    else {
        return null;
    }
}

export const r_2sequence = (p1, p2) => {
    if (p1.meta.sequence & p2.meta.sequence) {
        if (p1.meta.total > p2.meta.total) {
            return p1.name
        } else {
            return p2.name
        }
    } else {
        return null;
    }
}

export const r_sequence = (p1, p2) => {
    if (p1.meta.sequence) {
        return p1.name
    } else if (p2.meta.sequence) {
        return p2.name
    }
    else {
        return null;
    }
}

export const r_2pair = (p1, p2) => {
    if (p1.meta.pair & p2.meta.pair) {
        if (priority.indexOf(p1.meta.pairValue) > priority.indexOf(p2.meta.pairValue)) {
            return p1.name
        } else if (p1.meta.pairValue = p2.meta.pairValue) {
            if (p1.meta.total > p2.meta.total) {
                return p1.name
            } else {
                return p2.name
            }
        }
        else {
            return p2.name
        }
    } else {
        return null;
    }
}

export const r_pair = (p1, p2) => {
    if (p1.meta.pair) {
        return p1.name
    } else if (p2.meta.pair) {
        return p2.name
    }
    else {
        return null;
    }
}

export const r_topcard = (p1, p2) => {
    if (p1.meta.highest > p2.meta.highest) {
        return p1.name
    } else if (p1.meta.highest < p2.meta.highest) {
        return p2.name
    }
    else {
        return null;
    }
}

export const r_draw = (p1, p2, deck) => {
    if (!p1.drawdeck) {
        p1.drawdeck = []
    }
    if (!p2.drawdeck) {
        p2.drawdeck = []
    }
    let p1Card = drawCard(deck);
    let p2Card = drawCard(deck);
    p1.drawdeck.push(p1Card)
    p2.drawdeck.push(p2Card)
    if(priority.indexOf(p1Card) > priority.indexOf(p2Card)){
        return p1.name;
    } else if (priority.indexOf(p1Card) < priority.indexOf(p2Card)) {
        return p2.name;
    } else {
        console.log("++++++++");
        return r_draw(p1, p2, deck);
    }
}

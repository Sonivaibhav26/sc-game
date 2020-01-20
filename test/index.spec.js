import { expect } from "chai"
import { play } from "../index"

let testdata = {
    "Vaibhav": {
        "deck": [
            {
                "type": "s",
                "value": 1
            },
            {
                "type": "d",
                "value": 1
            },
            {
                "type": "d",
                "value": 1
            }
        ],
        "meta": {
            "total": 3,
            "highest": 1,
            "values": [
                1,
                1,
                1
            ],
            "uniqueValues": [
                1
            ],
            "trail": true,
            "trailvalue": 1,
            "pair": true,
            "pairValue": 1,
            "counts": {
                "1": 3,
            },
            "sequence": false
        },
        "name": "Vaibhav"
    },
    "Ravi": {
        "deck": [
            {
                "type": "s",
                "value": 2
            },
            {
                "type": "h",
                "value": 2
            },
            {
                "type": "s",
                "value": 2
            }
        ],
        "meta": {
            "total": 6,
            "highest": 2,
            "values": [
                2,
                2,
                2
            ],
            "uniqueValues": [
                2
            ],
            "trail": true,
            "trailvalue": 2,
            "pair": true,
            "pairValue": 2,
            "counts": {
                "1": 3,
            },
            "sequence": false
        },
        "name": "Ravi"
    },
    "Vicky": {
        "deck": [
            {
                "type": "d",
                "value": 3
            },
            {
                "type": "d",
                "value": 4
            },
            {
                "type": "c",
                "value": 5
            }
        ],
        "meta": {
            "total": 12,
            "highest": 5,
            "values": [
                3, 4, 5
            ],
            "uniqueValues": [
                3,
                4,
                5
            ],
            "trail": false,
            "trailvalue": 0,
            "pair": false,
            "pairValue": 0,
            "counts": {
                "3": 1,
                "7": 1,
                "9": 1
            },
            "sequence": true
        },
        "name": "Vicky"
    },
    "Pawan": {
        "deck": [
            {
                "type": "s",
                "value": 12
            },
            {
                "type": "c",
                "value": 8
            },
            {
                "type": "h",
                "value": 4
            }
        ],
        "meta": {
            "total": 24,
            "highest": 12,
            "values": [
                12,
                8,
                4
            ],
            "uniqueValues": [
                4,
                8,
                12
            ],
            "trail": false,
            "trailvalue": 0,
            "pair": false,
            "pairValue": 0,
            "counts": {
                "4": 1,
                "8": 1,
                "12": 1
            },
            "sequence": false
        },
        "name": "Pawan"
    }
};

describe("index test", () => {
    it("Winning Test", () => {
        let scoreBoard = play(testdata);
        expect(scoreBoard.winner.name).to.equal('Vaibhav');
    })
})

import { expect } from "chai"
import { r_2trail,r_trail,r_2sequence,r_sequence,r_2pair,r_pair,r_topcard } from "./../helpers/rules"

describe("Rules test", () => {
    
    it("r_2trail test", () => {
        let player1 = {
            meta : {
                trail: true,
                trailvalue: 13
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                trail: true,
                trailvalue: 13
            },
            name: "player2"
        }
        expect(r_2trail(player1,player2)).to.equal("player2");
    })

    it("r_trail test", () => {
        let player1 = {
            meta : {
                trail: false,
                trailvalue: 0
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                trail: true,
                trailvalue: 13
            },
            name: "player2"
        }
        expect(r_trail(player1,player2)).to.equal("player2");
    })

    it("r_2sequence test", () => {
        let player1 = {
            meta : {
                sequence: true,
                total: 10
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                sequence: true,
                total: 13
            },
            name: "player2"
        }
        expect(r_2sequence(player1,player2)).to.equal("player2");
    })

    it("r_sequence test", () => {
        let player1 = {
            meta : {
                sequence: false,
                total: 10
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                sequence: true,
                total: 13
            },
            name: "player2"
        }
        expect(r_sequence(player1,player2)).to.equal("player2");
    })

    it("r_2pair test", () => {
        let player1 = {
            meta : {
                pair: true,
                pairValue: 10
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                pair: true,
                pairValue: 13
            },
            name: "player2"
        }
        expect(r_2pair(player1,player2)).to.equal("player2");
    })

    it("r_2pair test 2", () => {
        let player1 = {
            meta : {
                pair: true,
                pairValue: 10,
                total:21
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                pair: true,
                pairValue: 10,
                total: 23
            },
            name: "player2"
        }
        expect(r_2pair(player1,player2)).to.equal("player2");
    })

    it("r_pair test 2", () => {
        let player1 = {
            meta : {
                pair: true,
                pairValue: 10,
                total:21
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                pair: false,
                total: 23
            },
            name: "player2"
        }
        expect(r_pair(player1,player2)).to.equal("player1");
    })

    it("r_topcard test", () => {
        let player1 = {
            meta : {
                highest: 10,
            },
            name: "player1"
        }
        let player2 = {
            meta : {
                highest: 12
            },
            name: "player2"
        }
        expect(r_topcard(player1,player2)).to.equal("player2");
    })

})
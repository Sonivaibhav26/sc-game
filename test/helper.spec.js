import { expect } from "chai"
import { createDeck, createPlayerDeck, drawCard } from "./../helpers/helper"

describe("helper test", () => {
    
    it("Should Creat a deck of length 52", () => {
        let deck = createDeck();
        expect(deck.length).to.equal(52);
    })

    it("Should Creat a player deck of length 3 and Deck size should decrease by 3" , () => {
        let deck = createDeck();
        let player1Deck = createPlayerDeck(deck , 3);
        expect(player1Deck.length).to.equal(3);
        expect(deck.length).to.equal(49);
    })

    it("Should draw a single card from deck and the deck length should decrease by 1" , () => {
        let deck = createDeck();
        let card = drawCard(deck);
        expect(Object.keys(card).length).to.equal(2);
        expect(deck.length).to.equal(51);
    })
})



import {Card, Rank, SetOfCards, Suit} from './cards';

describe("cards", ()=>{
    const cards = [{suit:Suit.diamonds, rank: Rank.ACE}, {suit:Suit.clubs, rank: Rank.FOUR}];
    const setOfCards = new SetOfCards(cards);
    
    test("cards property", ()=>{
        expect(setOfCards.cards).toEqual(cards);
    });
    
    test("has", ()=>{        
        expect(setOfCards).toBeTruthy();
        expect(setOfCards.has({suit:Suit.clubs, rank: Rank.EIGHT})).toBeFalsy();
        expect(setOfCards.has({suit:Suit.clubs, rank: Rank.FOUR})).toBeTruthy();        
    });

    test("put", ()=>{
        const cards1 = Array.from(cards);
        cards1.push({suit:Suit.hearts, rank: Rank.JACK});
        const thisSet = new SetOfCards(cards1);        
        const otherSet = new SetOfCards([{suit: Suit.spades, rank: Rank.QUEEN}]); 
        
        /* put number of cards less then present */
        
        let cardsPut = thisSet.put(otherSet, 1);
        expect(cardsPut).toBe(1);
        expect(thisSet.cards).toEqual(cards);
        expect(otherSet.cards).toHaveLength(2);
        expect(otherSet.cards).toEqual([{suit: Suit.spades, rank: Rank.QUEEN},{suit:Suit.hearts, rank: Rank.JACK}]);

        /* put number of cards more than present */

        cardsPut = thisSet.put(otherSet, 3);
        expect(cardsPut).toBe(2);
        expect(thisSet.cards).toEqual([]);
        expect(otherSet.cards).toHaveLength(4);
        expect(otherSet.cards).toEqual([{suit: Suit.spades, rank: Rank.QUEEN},{suit:Suit.hearts, rank: Rank.JACK}].concat(cards.reverse()));

        /* put a card when none is peresent */
        cardsPut = thisSet.put(otherSet, 1);
        expect(cardsPut).toBe(0);
        expect(thisSet.cards).toEqual([]);
        expect(otherSet.cards).toHaveLength(4);        
    });

    test("take", ()=>{       
        const thisSet = new SetOfCards([{suit: Suit.spades, rank: Rank.QUEEN}]); 
        const otherSetCards: Card[] = Array.from(cards);
        otherSetCards.push({suit:Suit.hearts, rank: Rank.JACK});
        const otherSet = new SetOfCards(otherSetCards);                    
        
                
        /* take number of cards less then present in the other set*/
        
        let cardsTaken = thisSet.take(otherSet, 1);
        expect(cardsTaken).toBe(1);
        expect(otherSet.cards).toEqual(cards);
        expect(thisSet.cards).toHaveLength(2);
        expect(thisSet.cards).toEqual([{suit: Suit.spades, rank: Rank.QUEEN},{suit:Suit.hearts, rank: Rank.JACK}]);

        /* take number of cards more than present in other set */

        cardsTaken = thisSet.take(otherSet, 3);
        expect(cardsTaken).toBe(2);
        expect(otherSet.cards).toEqual([]);
        expect(thisSet.cards).toHaveLength(4);
        expect(thisSet.cards).toEqual([{suit: Suit.spades, rank: Rank.QUEEN},{suit:Suit.hearts, rank: Rank.JACK}].concat(cards.reverse()));

        /* take a card when none is peresent in the other set */
        cardsTaken = thisSet.take(otherSet, 1);
        expect(cardsTaken).toBe(0);
        expect(otherSet.cards).toEqual([]);
        expect(thisSet.cards).toHaveLength(4); 
    });

    it('hasCardsOfRank', ()=>{
        expect(setOfCards.hasCardsOfRank(Rank.FOUR)).toBeTruthy();
        expect(setOfCards.hasCardsOfRank(Rank.JACK)).toBeFalsy();
        
    });

    it('hasCardsOfSuit', ()=>{
        expect(setOfCards.hasCardsOfSuit(Suit.hearts)).toBeFalsy();
        expect(setOfCards.hasCardsOfSuit(Suit.diamonds)).toBeTruthy();
    });   

    it('highestRank', ()=>{        
        expect(setOfCards.highestRank()).toBe(Rank.ACE);
        expect(setOfCards.highestRank(Suit.clubs)).toBe(Rank.FOUR);
    });

    it('suitsOfRank', ()=>{
        expect(setOfCards.suitsOfRank(Rank.FOUR)).toEqual([Suit.clubs]);
        expect(setOfCards.suitsOfRank(Rank.ACE)).toEqual([Suit.diamonds]);        
    })

    it('rankOfSuits', ()=>{
        expect(setOfCards.ranksOfSuit(Suit.clubs)).toEqual([Rank.FOUR]);
        expect(setOfCards.ranksOfSuit(Suit.diamonds)).toEqual([Rank.ACE]);
    });
})
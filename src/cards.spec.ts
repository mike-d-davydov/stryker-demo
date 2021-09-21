

import {Card, Rank, SetOfCards, Suit} from './cards';

describe("cards", ()=>{
    const cards = [{suit:Suit.DIAMONDS, rank: Rank.ACE}, {suit:Suit.CLUBS, rank: Rank.FOUR}];
    const setOfCards = new SetOfCards(cards);
    
    test("cards property", ()=>{
        expect(setOfCards.cards).toEqual(cards);
    });
    
    test("has", ()=>{        
        expect(setOfCards).toBeTruthy();
        expect(setOfCards.has({suit:Suit.CLUBS, rank: Rank.EIGHT})).toBeFalsy();
        expect(setOfCards.has({suit:Suit.CLUBS, rank: Rank.FOUR})).toBeTruthy();        
    });

    test("put", ()=>{
        const cards1 = Array.from(cards);
        cards1.push({suit:Suit.HEARTS, rank: Rank.JACK});
        const set1 = new SetOfCards(cards1);        
        const set2 = new SetOfCards([{suit: Suit.SPADES, rank: Rank.QUEEN}]); 
        
        /* put number of cards less then present */
        
        let cardsPut = set1.put(set2, 1);
        expect(cardsPut).toBe(1);
        expect(set1.cards).toEqual(cards);
        expect(set2.cards).toHaveLength(2);
        expect(set2.cards).toEqual([{suit: Suit.SPADES, rank: Rank.QUEEN},{suit:Suit.HEARTS, rank: Rank.JACK}]);

        /* put number of cards more than present */

        cardsPut = set1.put(set2, 3);
        expect(cardsPut).toBe(2);
        expect(set1.cards).toEqual([]);
        expect(set2.cards).toHaveLength(4);
        expect(set2.cards).toEqual([{suit: Suit.SPADES, rank: Rank.QUEEN},{suit:Suit.HEARTS, rank: Rank.JACK}].concat(cards.reverse()));

        /* put a card when none is peresent */
        cardsPut = set1.put(set2, 1);
        expect(cardsPut).toBe(0);
        expect(set1.cards).toEqual([]);
        expect(set2.cards).toHaveLength(4);        
    });

    test("take", ()=>{
        const cards1: Card[] = Array.from(cards);
        cards1.push({suit:Suit.HEARTS, rank: Rank.JACK});
        const set1 = new SetOfCards(cards1);                    
        const set2 = new SetOfCards([{suit: Suit.SPADES, rank: Rank.QUEEN}]); 
        
                
        /* take number of cards less then present in the other set*/
        
        let cardsTaken = set2.take(set1, 1);
        expect(cardsTaken).toBe(1);
        expect(set1.cards).toEqual(cards);
        expect(set2.cards).toHaveLength(2);
        expect(set2.cards).toEqual([{suit: Suit.SPADES, rank: Rank.QUEEN},{suit:Suit.HEARTS, rank: Rank.JACK}]);

        /* take number of cards more than present in other set */

        cardsTaken = set2.take(set1, 3);
        expect(cardsTaken).toBe(2);
        expect(set1.cards).toEqual([]);
        expect(set2.cards).toHaveLength(4);
        expect(set2.cards).toEqual([{suit: Suit.SPADES, rank: Rank.QUEEN},{suit:Suit.HEARTS, rank: Rank.JACK}].concat(cards.reverse()));

        /* take a card when none is peresent */
        cardsTaken = set2.take(set1, 1);
        expect(cardsTaken).toBe(0);
        expect(set1.cards).toEqual([]);
        expect(set2.cards).toHaveLength(4); 
    });

    // ;-) (Did we miss some tests?)

    test('hasCardsOfRank', ()=>{
        expect(setOfCards.hasCardsOfRank(Rank.FOUR)).toBeTruthy();
        expect(setOfCards.hasCardsOfRank(Rank.JACK)).toBeFalsy();
        
    });

    test('hasCardsOfSuit', ()=>{
        expect(setOfCards.hasCardsOfSuit(Suit.HEARTS)).toBeFalsy();
        expect(setOfCards.hasCardsOfSuit(Suit.DIAMONDS)).toBeTruthy();
    });   

    test('highestRank', ()=>{        
      expect(setOfCards.highestRank(Suit.CLUBS)).toBe(Rank.FOUR);
      expect(setOfCards.highestRank()).toBe(Rank.ACE);        
    });

    test('suitsOfRank', ()=> {
        expect(setOfCards.suitsOfRank(Rank.FOUR)).toEqual([Suit.CLUBS]);
        expect(setOfCards.suitsOfRank(Rank.ACE)).toEqual([Suit.DIAMONDS]);        
    })

    test('rankOfSuits', () => {
        expect(setOfCards.ranksOfSuit(Suit.CLUBS)).toEqual([Rank.FOUR]);
        expect(setOfCards.ranksOfSuit(Suit.DIAMONDS)).toEqual([Rank.ACE]);
    });

    test('sort', () => {
      const newSet = new SetOfCards([
        {suit: Suit.HEARTS, rank: Rank.EIGHT},
        {suit: Suit.HEARTS, rank: Rank.THREE},
        {suit: Suit.HEARTS, rank: Rank.FOUR},
        {suit: Suit.SPADES, rank: Rank.KING},
        {suit: Suit.DIAMONDS, rank: Rank.ACE},
        {suit: Suit.SPADES, rank: Rank.TWO}
      ]);

      const sortedCards = [
        {suit: Suit.SPADES, rank: Rank.TWO},
        {suit: Suit.SPADES, rank: Rank.KING},
        {suit: Suit.DIAMONDS, rank: Rank.ACE},        
        {suit: Suit.HEARTS, rank: Rank.THREE},
        {suit: Suit.HEARTS, rank: Rank.FOUR},
        {suit: Suit.HEARTS, rank: Rank.EIGHT},                
      ];

      newSet.sort();
      expect(newSet.cards).toEqual(sortedCards);
      newSet.sort(true);
      expect(newSet.cards).toEqual(sortedCards.reverse());
    })
})
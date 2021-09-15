// declare type Suit = "hearts" | "diamonds" | "clubs" | "spades";
// declare type Value = "2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"10"|"J"|"Q"|"K"|"A";

export enum Suit {
    hearts,
    diamonds,
    clubs,
    spades
};

export enum Rank {
   TWO=2,
   THREE,
   FOUR,
   FIVE,
   SIX,
   SEVEN,
   EIGHT,
   NINE,
   TEN,
   QUEEN,
   JACK,
   KING,
   ACE
}

export class Card {
    suit: Suit;
    rank: Rank;
}

export class SetOfCards {
    public constructor(public cards:Card[]){
        /* Not much to do here */
    }

    /**
     * Take _n_ cards from other set. If there is not enough cards, throw exception
     * 
     * @param otherSet other set to take cards from
     * @param n number of cards to take
     * @returns number of cards actually taken
     */
    public take(otherSet: SetOfCards, n: number): number {
        let taken = 0;
        for (let i = 0; i < n; i += 1){
            const takenCard = otherSet.cards.pop()
            if (takenCard){
                taken += 1;
                this.cards.push(takenCard)
            }
        }
        
        return taken;
    }
    
    /**
     * Put _n_ cards from this set to another set
     * 
     * @param otherSet 
     * @param n 
     * @returns number of cards actually put
     */
    public put(otherSet: SetOfCards, n: number): number {
        return otherSet.take(this, n);
    }

    public has(card: Card): boolean {
        return this.cards.filter(c => c.rank == card.rank && c.suit == card.suit).length > 0;
    }

    /**
     * Return wether set contains card of given suit
     * 
     * @param suit 
     */
    public hasCardsOfSuit(suit: Suit):boolean {
        return this.cardsOfSuit(suit).length > 0;
    }

    public hasCardsOfRank(rank: Rank): boolean {
        return this.cardsOfRank(rank).length > 0;
    }

    public cardsOfSuit(suit: Suit): Card[] {
        return this.cards.filter(card => card.suit === suit);        
    }

    public cardsOfRank(rank: Rank): Card[] {
        return this.cards.filter(card => card.rank === rank);        
    }

    /**
     * Returns highest-ranked card of given suit in the set.
     * If suite not specified, return highest rank for any suit
     * 
     * @param suit 
     */
    public highestRank(suit?: Suit): Rank {
        let highestRankSoFar: Rank = 0;
        let cards: Card[] = this.cards;
        if (suit){
            cards = this.cardsOfSuit(suit);
        }
        cards.forEach(card =>{
           if (card.rank > highestRankSoFar){
               highestRankSoFar = card.rank;
           } 
        });
        
        return highestRankSoFar;
    }
    
    public suitsOfRank(rank: Rank): Suit[] {        
        return this.cardsOfRank(rank).map(card => card.suit);
    }

    public ranksOfSuit(suit: Suit): Rank[] {
        return this.cardsOfSuit(suit).map(card => card.rank);
    }        
}


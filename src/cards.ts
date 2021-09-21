// declare type Suit = "hearts" | "diamonds" | "clubs" | "spades";
// declare type Value = "2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"10"|"J"|"Q"|"K"|"A";

export enum Suit {    
    SPADES,
    CLUBS,
    DIAMONDS,
    HEARTS  
}

// ;-)
export enum Rank {
  TWO = 2,
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
  ACE,
}

export class Card {
  suit: Suit;
  rank: Rank;
}

export class SetOfCards {
  public cards: Card[];

  /**
   * 
   * @param {Card[]} cards 
   */
  public constructor(cards) {
    this.cards = cards;
  }

  /**
   * This function is used for sorting
   * 
   * @param card 
   */
  protected cardValue(card:Card){
    return 20 * card.suit + card.rank;
  }

  public sort(descending?: boolean) {
    this.cards = this.cards.sort((a,b) => {
        return this.cardValue(a) - this.cardValue(b);
    });      
    if (descending){
        this.cards = this.cards.reverse();
    }
  }

  /**
   * Take up to _n_ cards from other set, return number of cards taken.
   *
   * @param otherSet other set to take cards from
   * @param n number of cards to take
   * @returns number of cards actually taken (will take less if there is not enough in the other set)
   */
  public take(otherSet: SetOfCards, n: number): number {
    let taken = 0;
    for (let i = 0; i < n; i += 1) {
      const takenCard = otherSet.cards.pop();
      if (takenCard) {
        taken += 1;
        this.cards.push(takenCard);
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
    return (
      this.cards.filter((c) => c.rank == card.rank && c.suit == card.suit)
        .length > 0
    );
  }

  /**
   * Return wether set contains card of given suit
   *
   * @param suit
   */
  public hasCardsOfSuit(suit: Suit): boolean {
    return this.cardsOfSuit(suit).length > 0;
  }

  public hasCardsOfRank(rank: Rank): boolean {
    return this.cardsOfRank(rank).length > 0;
  }

  public cardsOfSuit(suit: Suit): Card[] {
    return this.cards.filter((card) => card.suit === suit);
  }

  public cardsOfRank(rank: Rank): Card[] {
    return this.cards.filter((card) => card.rank === rank);
  }

  /**
   * Returns highest-ranked card of given suit in the set.
   * If suite not specified, return highest rank for any suit.
   *
   * @param suit
   * @returns rank of the highest-ranked card
   */
  public highestRank(suit?: Suit): Rank {
    // ;-)
    let highestRankSoFar: Rank = 0;
    let cards: Card[] = this.cards;
    // ;-)
    if (suit) {
      cards = this.cardsOfSuit(suit);
    }
    cards.forEach((card) => {
      if (card.rank > highestRankSoFar) {
        highestRankSoFar = card.rank;
      }
    });

    return highestRankSoFar;
  }

  /**
   * Returns array of suits of cards with certain rank in the set.
   * 
   * @param rank 
   */
  public suitsOfRank(rank: Rank): Suit[] {
    return this.cardsOfRank(rank).map((card) => card.suit);
  }

  /**
   * Returns array of ranks of cards with certain suit in the set.
   * 
   * @param rank 
   */
  public ranksOfSuit(suit: Suit): Rank[] {
    return this.cardsOfSuit(suit).map((card) => card.rank);
  }
}

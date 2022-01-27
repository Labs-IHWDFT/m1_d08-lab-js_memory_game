class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.playedCards = [];
    this.guessedPairs = 0;
    this.score = 0;
    this.isFinished = false;
    this.clickedPairs = 0;

    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /*
 * An alternative method to shuffle
 *
  shuffleCards() {
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }
  }
*/

  checkIfPair() {
    console.log(
      this.playedCards[0].getAttribute('data-card-name'),
      this.playedCards[1].getAttribute('data-card-name')
    );
    if (
      this.playedCards[0].getAttribute('data-card-name') ===
      this.playedCards[1].getAttribute('data-card-name')
    ) {
      return true;
    }
  }

  checkIfFinished() {
    if (this.guessedPairs === this.cards.length / 2) this.isFinished = true;
    return this.isFinished;
  }

  playCard(card) {
    let playResult = { isPair: false, cards: [] };
    if (this.playedCards.length < 2) {
      this.playedCards.push(card);
    }
    if (this.playedCards.length === 2) {
      this.clickedPairs += 1;
      if (this.checkIfPair()) {
        this.score += 1;
        playResult = { isPair: true, cards: this.playedCards };
        this.playedCards = [];
        this.guessedPairs += 1;
      } else {
        playResult = { isPair: false, cards: this.playedCards };
        this.playedCards = [];
      }
    }
    return playResult;
  }
}



// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

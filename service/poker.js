function rank(hand) {
    //plug in cardRank evaluation
    // Find the card with the highest rank and return that
    return hand[0].rank;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class cardRank {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

const Jack = new cardRank ("Jack", 11);
const Queen = new cardRank ("Queen", 12);
const King = new cardRank ("King", 13);
const Ace = new cardRank ("Ace", 14);

module.exports = {
    rank,
    cardRank
};
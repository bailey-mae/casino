import assert from "assert";
import poker from "../../service/poker";


describe('cat', () => {
    it('returns Queen', () => {

        const cards = [{
            rank: "Queen",
            suit: "Spades",
            description: "Queen of Spades"
        }];

        assert.equal('Queen', poker.rank(cards));
    });

    it('returns King', () => {

        const cards = [{
            rank: "King",
            suit: "Spades",
            description: "King of Spades"
        }];

        assert.equal('King', poker.rank(cards));
    });

    it('returns King', () => {

        const cards = [{
            rank: "Queen",
            suit: "Spades",
            description: "Queen of Spades"
        }, {
            rank: "King",
            suit: "Spades",
            description: "King of Spades"
        }];

        assert.equal('King', poker.rank(cards));
    });
});


import assert from "assert";
import poker from "../service/poker";


describe('cat', ()=> {
    it('returns cat', () => {
        assert.equal(true, poker.isPair({}));
    });
});


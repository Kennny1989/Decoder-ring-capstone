const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution test written by student", () => {
    describe("error handling", () => {
        it("should return false if no sub alphabet", () => {
            const input = "howdy";
            const actual = substitution(input);
            expect(actual).to.be.false;
        });
        it("should return false if sub alphabet is not exactly 26 characters", () => {
            const input = "almost done";
            const alphabet = "abcdefghijklmnopqrstuvw";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const input = "this was harder then i thought";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encoding a messag", () => {
        it("should encode jrufscpw given thinkful", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "jrufscpw";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        });
        it("should work with any unique substitute alphabet", () => {
            const input = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "y&ii$r&";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            const input = "kenneth dunbar";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "smffmjr qpfoxh";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const input = "IM geTTIng BetTeR At ThIS";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "ua gmjjufg omjjmh xj jrud";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("should decode thinkful given jrufscpw", () => {
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "thinkful";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("should decode with any unique substitute alphabet", () => {
            const input = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "message";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            const input = "smffmjr qpfoxh";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "kenneth dunbar";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const input = "UZM cufxWWe ylanwMJMq jRm yxnDJlfm";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "ive finally completed the capstone";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
    });
});

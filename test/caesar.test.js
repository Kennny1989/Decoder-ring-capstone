const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar test written by student", () => {
    describe("error handling", () => {
        it("should return false if the shift is 0", () => {
            const actual = caesar("message", 0);
            const expected = false;
            expect(actual).to.eql(expected);
        });
        it("should return false if the shift amount is above 25", () => {
            const actual = caesar("thinkful student", 30);
            const expected = false;
            expect(actual).to.eql(expected);
        });
        it("should return false if the shift amount is less than -25", () => {
            const actual = caesar("thinkful student", -30);
            const expected = false;
            expect(actual).to.eql(expected);
        });
        it("should return false if there is no shift value", () => {
            const actual = caesar("thinkful student");
            const expected = false;
            expect(actual).to.eql(expected);
        });
    });
    describe("encoding messages", () => {
        it("should encode a message by shifting letters", () => {
            const actual = caesar("This is a secret message!", 8);
            const expected = "bpqa qa i amkzmb umaaiom!";
            expect(actual).to.eql(expected);
        });
        it("should leave spaces and other symbols as is", () => {
            const actual = caesar("t hi! n.kf$ ul", 3);
            const expected = "w kl! q.ni$ xo";
            expect(actual).to.eql(expected);
        });
        it("should ignore capital letters", () => {
            const actual = caesar("THinkFul", 3);
            const expected = "wklqnixo";
            expect(actual).to.eql(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const actual = caesar("xyz", 4);
            const expected = "bcd";
            expect(actual).to.eql(expected);
        });
        it("should allow for a negative shift that will shift to the left", () => {
            const actual = caesar("thinkful", -3);
            const expected = "qefkhcri";
            expect(actual).to.eql(expected);
        });
    });
    describe("decoding messages", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = "this is a secret message!";
            expect(actual).to.eql(expected);
        });
        it("should leave spaces and other symbols as is", () => {
            const actual = caesar("q ef! k.hc$ ri", -3, false);
            const expected = "t hi! n.kf$ ul";
            expect(actual).to.eql(expected);
        });
        it("should ignore capital letters", () => {
            const actual = caesar("NHQQB", -3);
            const expected = "kenny";
            expect(actual).to.eql(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const actual = caesar("bcd", 4, false);
            const expected = "xyz";
            expect(actual).to.eql(expected);
        });
        it("should allow for a negative shift to the left", () => {
            const actual = caesar("kenny", -5, false);
            const expected = "pjssd";
            expect(actual).to.eql(expected);
        });
    });
});
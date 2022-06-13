const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius test written by student", () => {
    describe("polybius", () => {
        describe("encoding a message", () => {
            it("should encode a message by translating each letter to number pairs", () => {
                const input = "this is hard";
                const expected = "44324234 4234 32112441";
                const actual = polybius(input);
                expect(actual).to.equal(expected);
            });

            it("should translate both i and j to 42", () => {
                const input = "jist";
                const expected = "42423444";
                const actual = polybius(input);
                expect(actual).to.equal(expected);
            });

            it("should leave spaces as it", () => {
                const input = "i need to practice more";
                const expected = "42 33515141 4443 5324113144423151 23432451";
                const actual = polybius(input);
                expect(actual).to.equal(expected);
            });
        });
    });
    describe("decoding messages", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const input = "44324234 4234 32112441";
            const expected = "th(i/j)s (i/j)s hard";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });

        it("should translate 42 to both 'i' and 'j'", () => {
            const input = "42423444";
            const expected = "(i/j)(i/j)st";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const input = "42 33515141 4443 5324113144423151 23432451";
            const expected = "(i/j) need to pract(i/j)ce more";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });
    });
    describe("should return false", () => {
        it("should return false if the length of all numbers is odd", () => {
            const input = "777";
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        });
    });
});

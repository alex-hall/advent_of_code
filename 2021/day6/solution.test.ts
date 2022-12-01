import {readFile} from "../common";
const {part1} = require("../day6/solution");

describe("part1", () => {
    it("Should work", () => {

        const rawFile = readFile("day6/numbers.txt")
        expect(part1(rawFile, 256) ).toEqual({solution: 5934})
    })
})

import {readFile} from "../common";
const {part1} = require("../day5/solution");

describe("part1", () => {
    it("Should work", () => {

        const rawFile = readFile("day5/numbers.txt")
        expect(part1(rawFile) ).toEqual({solution: 5})
    })
})

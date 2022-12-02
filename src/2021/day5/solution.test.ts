import {readFile} from "common";
const {part1} = require("./solution");

describe("part1", () => {
    it("Should work", () => {

        const rawFile = readFile("2021/day5/numbers.txt")

        expect(part1(rawFile) ).toEqual({solution: 17193})
    })
})

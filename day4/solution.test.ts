import {readFileNoSplit} from "../common";

const {part1} = require("../day4/solution");

describe("part1", () => {
    it("Should work", () => {

        const numbers: number[] = readFileNoSplit("day4/numbers.txt")
            .split(",")
            .map(number => Number(number))

        const rawBoardData = readFileNoSplit("day4/boards.txt")

        console.log("Hello")

        expect(part1(numbers,rawBoardData)).toEqual({"solution": 60368, "sumOfWinningBoard": 784, "winningNumber": 77})
    })
})
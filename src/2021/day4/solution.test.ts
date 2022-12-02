import {readFileNoSplit} from "common";
const {part1, part2} = require("./solution");

describe("part1", () => {
    it("Should work", () => {

        const numbers: number[] = readFileNoSplit("2021/day4/numbers.txt")
            .split(",")
            .map(number => Number(number))

        const rawBoardData = readFileNoSplit("2021/day4/boards.txt")

        expect(part1(numbers,rawBoardData)).toEqual({"solution": 60368, "sumOfWinningBoard": 784, "winningNumber": 77})
    })
})

describe("part2", () => {
    it("Should work", () => {
        const numbers: number[] = readFileNoSplit("2021/day4/numbers.txt")
            .split(",")
            .map(number => Number(number))

        const rawBoardData = readFileNoSplit("2021/day4/boards.txt")

        expect(part2(numbers,rawBoardData)).toEqual({"solution": 7812, "sumOfLosingBoard": 372, "winningNumber": 21})
    })
})

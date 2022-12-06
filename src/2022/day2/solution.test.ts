import {part1, part2} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
    describe("Sample Input", () => {
        it("returns the score using the strategy guide", () => {
            const file = readFile("2022/day2/sample.txt")

            expect(part1(file)).toEqual(15)
        })
    })
    describe("Puzzle Input", () => {
        it("returns the score using the strategy guide", () => {
            const file = readFile("2022/day2/input.txt")

            expect(part1(file)).toEqual(13446)
        })
    })
})

describe("Part 2", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day2/sample.txt")

            expect(part2(file)).toEqual(12)
        })
    })

    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day2/input.txt")

            expect(part2(file)).toEqual(true)
        })
    })
})

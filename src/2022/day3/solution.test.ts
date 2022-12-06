import {part1, part2} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
    describe("Sample Input", () => {
        it("Finds duplicate items across all rucksacks and returns a sum of the priority of those items", () => {
            const file = readFile("2022/day3/sample.txt")

            expect(part1(file)).toEqual(157)
        })
    })
    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day3/input.txt")

            expect(part1(file)).toEqual(7917)
        })
    })
})

describe("Part 2", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day3/sample.txt")

            expect(part2(file)).toEqual(true)
        })
    })

    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day3/input.txt")

            expect(part2(file)).toEqual(true)
        })
    })
})

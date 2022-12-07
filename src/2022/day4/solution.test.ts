import {part1, part2} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
    describe("Sample Input", () => {
        it("calculates the sum of assignment pairs that are fully contained", () => {
            const file = readFile("2022/day4/sample.txt")

            expect(part1(file)).toEqual(2)
        })
    })
    describe("Puzzle Input", () => {
        it("calculates the sum of assignment pairs that are fully contained", () => {
            const file = readFile("2022/day4/input.txt")

            expect(part1(file)).toEqual(465)
        })
    })
})

describe("Part 2", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day4/sample.txt")

            expect(part2(file)).toEqual(4)
        })
    })

    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day4/input.txt")

            expect(part2(file)).toEqual(911)
        })
    })
})

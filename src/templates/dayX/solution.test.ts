import {part1, part2} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("20XX/dayX/sample.txt")

            expect(part1(file)).toEqual(true)
        })
    })
    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("20XX/dayX/input.txt")

            expect(part1(file)).toEqual(true)
        })
    })
})

describe("Part 2", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("20XX/dayX/sample.txt")

            expect(part2(file)).toEqual(true)
        })
    })

    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("20XX/dayX/input.txt")

            expect(part2(file)).toEqual(true)
        })
    })
})

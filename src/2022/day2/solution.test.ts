import {part1, part2} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("templates/day2/sample.txt")

            expect(file).toEqual([""])
            expect(part1()).toEqual(true)
        })
    })
    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("templates/day2/sample.txt")

            expect(file).toEqual([""])
            expect(part1()).toEqual(true)
        })
    })
})

describe("Part 2", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("templates/day2/input.txt")

            expect(file).toEqual([""])
            expect(part2()).toEqual(true)
        })
    })

    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("templates/day2/input.txt")

            expect(file).toEqual([""])
            expect(part2()).toEqual(true)
        })
    })
})

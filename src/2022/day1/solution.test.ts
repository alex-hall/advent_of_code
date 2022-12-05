import {part1, part2} from "./solution"
import {readFile} from "common";
describe("Part 1", () => {
    describe("Sample solution", () => {
        it("returns the highest calorie count", () => {
            const file = readFile("2022/day1/sample.txt")

            expect(part1(file)).toEqual(24000)
        })
    })

    describe("Puzzle solution", () => {
        it("returns the highest calorie count", () => {
            const file = readFile("2022/day1/input.txt")

            expect(part1(file)).toEqual(71934)
        })
    })
})

describe("Part 2", () => {
    describe("Sample solution", () => {
        const file = readFile("2022/day1/sample.txt")

        expect(part2(file)).toEqual(45000)
    })

    describe("Puzzle solution", () => {
        const file = readFile("2022/day1/input.txt")

        expect(part2(file)).toEqual(211447)
    })
})

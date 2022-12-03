import {part1} from "./solution"
import {readFile} from "common";
describe("Part 1", () => {
    describe("Sample solution", () => {
        it("returns the highest calorie count", () => {
            const file = readFile("2022/day1/sample.txt")

            expect(part1(file)).toEqual(24000)
        })
    })
})

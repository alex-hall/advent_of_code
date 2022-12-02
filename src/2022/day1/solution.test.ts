import {part1} from "./solution"
import {readFile} from "common";
describe("Part 1", () => {
    describe("Integration Test", () => {
        it("Does a thing", () => {
            const file = readFile("2022/day1/input.txt")

            expect(file).toEqual([""])
            expect(part1()).toEqual(true)
        })
    })
})

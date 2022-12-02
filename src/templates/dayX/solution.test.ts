import {part1} from "./solution"
import {readFile} from "common";
describe("Part 1", () => {
    describe("Integration Test", () => {
        it("Does a thing", () => {
            const file = readFile("templates/dayX/input.txt")

            expect(file).toEqual([""])
            expect(part1()).toEqual(true)
        })
    })
})

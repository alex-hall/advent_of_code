import {part1, part2} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day5/sample.txt")
            let packageHeap = [
                ["Z", "N"],
                ["M", "C", "D"],
                ["P"]
            ]
            expect(part1(file, packageHeap)).toEqual("CMZ")
        })
    })
    describe("Puzzle Input", () => {

        it("Does a Christmas-y thing", () => {
            let packageHeap = [
                ["G","T","R","W"],
                ["G","C","H","P","M","S","V","W"],
                ["C","L","T","S","G","M"],
                ["J","H","D","M","W","R","F"],
                ["P","Q","L","H","S","W","F","J"],
                ["P","J","D","N","F","M","S"],
                ["Z","B","D","F","G","C","S","J"],
                ["R","T","B"],
                ["H","N","W","L","C"],
            ]
            const file = readFile("2022/day5/input.txt")
            expect(part1(file, packageHeap)).toEqual("JCMHLVGMG")
        })
    })
})

describe("Part 2", () => {
    describe("Sample Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day5/sample.txt")

            let packageHeap = [
                ["Z", "N"],
                ["M", "C", "D"],
                ["P"]
            ]

            expect(part2(file, packageHeap)).toEqual("MCD")
        })
    })

    describe("Puzzle Input", () => {
        it("Does a Christmas-y thing", () => {
            const file = readFile("2022/day5/input.txt")
            let packageHeap = [
                ["G","T","R","W"],
                ["G","C","H","P","M","S","V","W"],
                ["C","L","T","S","G","M"],
                ["J","H","D","M","W","R","F"],
                ["P","Q","L","H","S","W","F","J"],
                ["P","J","D","N","F","M","S"],
                ["Z","B","D","F","G","C","S","J"],
                ["R","T","B"],
                ["H","N","W","L","C"],
            ]
            expect(part2(file, packageHeap)).toEqual("LVMRWSSPZ")
        })
    })
})

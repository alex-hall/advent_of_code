import {findValueToFilterOn, part1, part2, sumValuesAtArrayIndex} from "./solution"
import {readFile} from "common";

describe("Part 1", () => {
  describe("Integration Test", () => {
      const rawFile = readFile("2021/day3/input.txt")

      expect(part1(rawFile)).toEqual({"epsilon": 2795, "gamma": 1300, "solution": 3633500})
    })
})

describe("Part 2", () => {
    describe("Integration Test", () => {
        it("Should calculate the oxygen rating properly", () => {
            const rawFile = readFile("2021/day3/input.txt")

            let solution = part2(rawFile);
            expect(solution).toEqual({oxygenRating: "010100101111", co2Rating: "110101100101", solution: 4550283})
        })
    })

    describe("#sumValuesAtArrayIndex", () => {
        it("should sum the column properly", () => {
            const array = [
                "1000",
                "1000",
                "1000",
                "0001"
            ]
            expect(sumValuesAtArrayIndex(array, 0)).toEqual(3)
        })
    })
})

import {findValueToFilterOn, part1, part2, sumValuesAtArrayIndex} from "./solution"

describe("Part 2", () => {
    describe("Integration Test", () => {
        it("Should calculate the oxygen rating properly", () => {
            const array = [
                "00100",
                "11110",
                "10110",
                "10111",
                "10101",
                "01111",
                "00111",
                "11100",
                "10000",
                "11001",
                "00010",
                "01010",
            ]

            let thing = part2(array);
            expect(thing).toEqual({oxygenRating: "10111", co2Rating: "01010"})
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

    describe("#findValueToFilterOn", () => {
        it("should return 1", () => {
            const array = [
                "1000",
                "1000",
                "1000",
                "0001"
            ]
            const foundValue = findValueToFilterOn(array, 0)

            expect(foundValue).toEqual(1)
        })

        it("should return 0", () => {
            const array = [
                "1000",
                "0000",
                "0000",
                "0001"
            ]
            const foundValue = findValueToFilterOn(array, 0)

            expect(foundValue).toEqual(0)
        })

        it("returns -1", () => {
            const array = [
                "1000",
                "1000",
                "0000",
                "0001"
            ]
            const foundValue = findValueToFilterOn(array, 0)

            expect(foundValue).toEqual(-1)
        })
    })
})
// Power Consumption === gamma rate * epsilon rate
// gamma rate is the most common bit across column
// Epsilon rate is the LEAST common across column
// Solution is gamma rate * epsilon rate
// 16, 8, 4, 2, 1

// life support rating = Oxygen generator rating * CO2 Scrubber rating

import {readFile} from "../common";

const generateArrayOfLength = (bitDepth: number) => {
    const rows: Array<Number>[] = Array.from({'length': bitDepth}, _ => [])
    return rows;
}

function part1() {
    const rawFile = readFile("day3/input.txt")

    const bitDepth = rawFile[0].length

    const rows: Array<Number>[] = generateArrayOfLength(12)

    const flipAllBits = (array: Number[]): Number[] => array.map(item => item === 0 ? 1 : 0)

    rawFile.map((byte) => {
        [...byte].map((bit, index) => {
            rows[index].push(Number(bit))
        })
    })

    const gamma = rows.reduce((acc, curr, index): Number[] => {
        const byteSum = curr.reduce((prev, curr) => +prev + +curr)

        if (byteSum < (rawFile.length / 2)) {
            acc[index] = 0
        } else {
            acc[index] = 1
        }
        return acc
    }, [0])


    const byteString = gamma.join("");
    const byteStringToDecimal = parseInt(byteString, 2);

    console.log(`Gamma values for array are: ${byteString}, as decimal ${byteStringToDecimal}`)

    const flippedByteString = flipAllBits(gamma).join("");
    const flippedByteStringToDecimal = parseInt(flippedByteString, 2);

    console.log(`Epsilon values for array are:${flippedByteString}. As decimal: ${flippedByteStringToDecimal}`)

    console.log(`Fnal value is ${flippedByteStringToDecimal * byteStringToDecimal}`)
}

part1();

const sumValuesAtArrayIndex = (arr: string[], index: number): number => {
    return arr.reduce((acc, curr): number => {
        const byteArray = [...curr]

        acc += Number(byteArray[index])

        return acc
    }, 0)
}

const findValueToFilterOn = (array: string[], position: number) => {
    const linesInFile = array.length
    const sumOfValues = sumValuesAtArrayIndex(array, position)
    if (sumOfValues === (linesInFile / 2)) {
        return -1
    } else if (sumOfValues > (linesInFile / 2)) {
        return 1
    } else {
        return 0
    }
}

function filterFileOnPositionAndValue(rawFile: string[], position: number, value: number) {
    const filteredRows = rawFile.filter(([...curr]): boolean => {
        return Number(curr[position]) === value
    })

    return filteredRows
}

function calculateOxygenRating(array: string[], position: number): string {
    const value = findValueToFilterOn(array, position)

    let valueToUse = (value === -1) ? 1 : value

    const filteredRows = filterFileOnPositionAndValue(array, position, valueToUse);

    if (filteredRows.length > 1) {
        return calculateOxygenRating(filteredRows, position += 1)
    } else {
        return filteredRows[0]
    }

}

function calculateCO2Rating(array: string[], position: number): string {
    const value = findValueToFilterOn(array, position)
    let valueToUse

    if (value === -1){
        valueToUse = 0
    } else if(value === 1){
        valueToUse = 0
    } else {
        valueToUse = 1
    }

    const filteredRows = filterFileOnPositionAndValue(array, position, valueToUse);

    if (filteredRows.length > 1) {
        return calculateCO2Rating(filteredRows, position += 1)
    } else {
        return filteredRows[0]
    }

}

function part2(rawFile: string[]) {
    const position = 0
    const oxygenRating = calculateOxygenRating(rawFile, position);
    const co2Rating = calculateCO2Rating(rawFile, position);

    let oxygenRatingDecimal = parseInt(oxygenRating, 2);
    let co2RatingDecimal = parseInt(co2Rating, 2);
    console.log(`Oxygen rating is ${oxygenRating}, in decimal that is ${oxygenRatingDecimal}`)
    console.log(`CO2 rating is ${co2Rating}, in decimal that is ${co2RatingDecimal}`)
    console.log(`Solution is: ${oxygenRatingDecimal * co2RatingDecimal}`)
    return {oxygenRating, co2Rating};
}

export {
    part1,
    part2,
    sumValuesAtArrayIndex,
    findValueToFilterOn
}
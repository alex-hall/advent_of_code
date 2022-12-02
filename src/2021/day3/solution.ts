// Power Consumption === gamma rate * epsilon rate
// gamma rate is the most common bit across column
// Epsilon rate is the LEAST common across column
// Solution is gamma rate * epsilon rate
// 16, 8, 4, 2, 1

// life support rating = Oxygen generator rating * CO2 Scrubber rating

const generateArrayOfLength = (bitDepth: number) => {
    const rows: Array<Number>[] = Array.from({'length': bitDepth}, _ => [])
    return rows;
}

function part1(rawFile: string[]) {
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

    console.log(`Epsilon values for array are:${flippedByteString}. As decimal: ${byteStringToDecimal}`)

    console.log(`Fnal value is ${flippedByteStringToDecimal * byteStringToDecimal}`)

    return {
        gamma: byteStringToDecimal,
        epsilon: flippedByteStringToDecimal,
        solution: flippedByteStringToDecimal * byteStringToDecimal
    }
}

const sumValuesAtArrayIndex = (arr: string[], index: number): number => {
    return arr.reduce((acc, [...curr]): number => {
        return acc += Number(curr[index])
    }, 0)
}

const findValueToFilterOn = (array: string[], position: number, ratingType: string) => {
    let midpoint = array.length / 2;
    const sumOfValues = sumValuesAtArrayIndex(array, position)
    if (sumOfValues === midpoint) {
        return ratingType === 'oxygen' ? 1 : 0
    } else if (sumOfValues > midpoint) {
        return ratingType === 'oxygen' ? 1 : 0
    } else {
        return ratingType === 'oxygen' ? 0 : 1
    }
}

function filterFileOnPositionAndValue(rawFile: string[], position: number, value: number) {
    const filteredRows = rawFile.filter(([...curr]): boolean => {
        return Number(curr[position]) === value
    })

    return filteredRows
}

function calculateRating(array: string[], position: number, ratingType: string): string {
    const value = findValueToFilterOn(array, position, ratingType)
    const filteredRows = filterFileOnPositionAndValue(array, position, value);

    if (filteredRows.length > 1) {
        return calculateRating(filteredRows, position += 1, ratingType)
    } else {
        return filteredRows[0]
    }
}

function part2(array: string[]) {
    const oxygenRating = calculateRating(array, 0, 'oxygen');
    const co2Rating = calculateRating(array, 0, 'co2');

    let oxygenRatingDecimal = parseInt(oxygenRating, 2);
    let co2RatingDecimal = parseInt(co2Rating, 2);

    console.log(`Oxygen rating is ${oxygenRating}, in decimal that is ${oxygenRatingDecimal}`)
    console.log(`CO2 rating is ${co2Rating}, in decimal that is ${co2RatingDecimal}`)
    console.log(`Solution is: ${oxygenRatingDecimal * co2RatingDecimal}`)
    return {
        oxygenRating,
        co2Rating,
        solution: oxygenRatingDecimal * co2RatingDecimal
    };
}

export {
    part1,
    part2,
    sumValuesAtArrayIndex,
    findValueToFilterOn
}

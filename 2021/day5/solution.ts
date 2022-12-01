const plotVerticalLine = (coordinateMatrix: number[][], x1: number, y1: number, y2: number): number[][] => {
    for (let y = y1; y < (y2 + 1); y++) {
        coordinateMatrix[x1][y] += 1
    }
    return coordinateMatrix
}

const plotHorizontalLine = (coordinateMatrix: number[][], y1: number, x1: number, x2: number): number[][] => {
    for (let x = x1; x < (x2 + 1); x++) {
        coordinateMatrix[x][y1] += 1
    }
    return coordinateMatrix
}

function findStartingPoints(pointOne: number, pointTwo: number) {
    return pointOne < pointTwo ? {start: pointOne, end: pointTwo} : {start: pointTwo, end: pointOne}
}

function isDiagonal(x1: number, y1: number, x2: number, y2: number) {
    return Math.abs(x1 - x2) === Math.abs(y1 - y2)
}

function diagonalLine(coordinateMatrix: number[][], x1: number, x2: number, y1: number, y2: number) {
    let keepGoing = true
    let cursorX = x1
    let cursorY = y1

    do {
        coordinateMatrix[cursorX][cursorY] += 1

        if (y1 > y2) {
            cursorY -= 1
        } else {
            cursorY += 1
        }

        if (x1 > x2) {
            cursorX -= 1
        } else {
            cursorX += 1
        }

        if (cursorX === x2 && cursorY === y2) {
            coordinateMatrix[cursorX][cursorY] += 1
            keepGoing = false
        }
    } while (keepGoing)

    return coordinateMatrix
}

function plotLinesOnMatrix(coordinates: number[][][]) {
    let coordinateMatrix = instantiateMatrix(coordinates)

    coordinates.map(([[x1, y1], [x2, y2]]) => {
        if (x1 === x2) {
            let {start, end} = findStartingPoints(y1, y2);
            coordinateMatrix = plotVerticalLine(coordinateMatrix, x1, start, end)
        } else if (y1 === y2) {
            let {start, end} = findStartingPoints(x1, x2);
            coordinateMatrix = plotHorizontalLine(coordinateMatrix, y1, start, end)
        } else if (isDiagonal(x1, y1, x2, y2)) {
            coordinateMatrix = diagonalLine(coordinateMatrix, x1, x2, y1, y2)

        }
    })
    return coordinateMatrix
}

function findOverlap(plottedMatrix: number[][]) {
    let countOfOverlap = 0
    plottedMatrix.map(column => {
        column.map(row => {
            if (row > 1) {
                countOfOverlap += 1
            }
        })
    })
    return countOfOverlap
}

const part1 = (rawFile: string[]): object => {

    const coordinates = uglyParseFile(rawFile)
    const plottedMatrix = plotLinesOnMatrix(coordinates);

    const solution = findOverlap(plottedMatrix)

    return {solution}
}

const instantiateMatrix = (coordinates: number[][][]): number[][] => {
    let maxX = 0, maxY = 0
    coordinates.map(([[x1, y1], [x2, y2]]) => {
        maxX = x1 > maxX ? x1 : maxX
        maxX = x2 > maxX ? x2 : maxX
        maxY = y1 > maxY ? y1 : maxY
        maxY = y2 > maxY ? y2 : maxY
    })

    let zeroedMatrix = Array<Array<number>>()

    for (let x = 0; x < (maxX + 1); x++) {
        for (let y = 0; y < (maxY + 1); y++) {
            zeroedMatrix[x] = zeroedMatrix[x] ? zeroedMatrix[x] : []
            zeroedMatrix[x][y] = 0
        }
    }
    return zeroedMatrix
}

const uglyParseFile = (rawFile: string[]): number[][][] => {
    return rawFile
        .map(line =>
            line.split(" -> ")
                .map(points => points
                    .split(",")
                    .map(point => Number(point))
                )
        )
}

export {part1}
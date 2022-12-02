import {readFile} from "common";

const sweeps: string[] = readFile('day1/input.txt')

function solutionOne() {
    const increasingSweeps = sweeps.reduce((acc, current, index, array): number => {
        let nextNumber = Number(array[index + 1]);
        let currentNumber = Number(current);

        return currentNumber < nextNumber ? acc + 1 : acc
    }, 0)
}

solutionOne()

function solutionTwo() {
    const increasingSweeps = sweeps.reduce((acc, current, index, array): number => {
        if (array.length < index + 3) {
            return acc
        }

        let currentWindow = sumArrayAtIndexes(array, index, index + 2)
        let nextWindow = sumArrayAtIndexes(array, index + 1, index + 3)

        return currentWindow < nextWindow ? acc + 1 : acc
    }, 0)
}

function sumArrayAtIndexes(array: string[], start: number, end: number): number {
    return array
        .slice(start, end + 1)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0)
}

solutionTwo()

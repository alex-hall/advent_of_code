import {readFile} from "../common";

const sweeps: string[] = readFile('day1/input.txt')

function solutionOne() {
    const increasingSweeps = sweeps.reduce((acc, current, index, array): number => {
        let nextNumber = Number(array[index + 1]);
        let currentNumber = Number(current);

        return currentNumber < nextNumber ? acc + 1 : acc
    }, 0)

    console.log(`Solution 1: Sweeps increased ${increasingSweeps} times.`)
}

solutionOne()

function solutionTwo() {
    const increasingSweeps = sweeps.reduce((acc, current, index, array): number => {
        if (array.length < index + 3) {
            return acc
        }

        let currentWindow = sumArrayAtIndexes(array, index, index + 3)
        let nextWindow = sumArrayAtIndexes(array, index + 1, index + 4)

        return currentWindow < nextWindow ? acc + 1 : acc
    }, 0)

    console.log(`Solution 2: Sweeps increased ${increasingSweeps} times.`)
}

function sumArrayAtIndexes(array: string[], start: number, end: number): number {
    return array
        .slice(start, end)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0)
}

solutionTwo()
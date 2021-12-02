import {readFile} from "../common";


function part1() {
    const directions = readFile('day2/input.txt')

    const coordinates = directions.reduce((acc, curr, index, array): number[] => {
        const [direction, vector] = curr.split(" ")

        switch (direction) {
            case 'forward':
                acc[0] += Number(vector)
                break;
            case 'up':
                acc[1] -= Number(vector)
                break;
            case 'down':
                acc[1] += Number(vector)
                break;
        }

        return acc
    }, [0, 0])

    console.log(`Final coordinates are: ${coordinates}. Solution is ${coordinates[0] * coordinates[1]}`)
}

part1()

function part2() {
    const directions = readFile('day2/input.txt')

    const coordinates = directions.reduce((acc, curr, index, array): number[] => {
        const [direction, vector] = curr.split(" ")

        switch (direction) {
            case 'forward':
                acc[0] += Number(vector)
                acc[1] += acc[2] * Number(vector)
                break;
            case 'up':
                acc[2] -= Number(vector)
                break;
            case 'down':
                acc[2] += Number(vector)
                break;
        }

        return acc
    }, [0, 0, 0])

    console.log(`Final coordinates are: ${coordinates}. Solution is ${coordinates[0] * coordinates[1]}`)
}

part2()
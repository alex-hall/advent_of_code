import path from 'path';
import fs from 'fs';

function readFile(fileName: string) {
    return fs.readFileSync(path.join(__dirname, fileName), 'utf-8');
}

const sweeps: string[] = readFile('./input.txt')
    .split("\n")

const increasingSweeps = sweeps.reduce((acc, current, index, array): number => {
    let nextNumber = Number(array[index + 1]);
    let currentNumber = Number(current);

    return currentNumber < nextNumber ? acc + 1 : acc
}, 0)

console.log(`Sweeps increased ${increasingSweeps} times.`)
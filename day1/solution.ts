import path from 'path';
import fs from 'fs';

const text = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

const textAsArray = text.split("\n")

console.log(textAsArray[0])
import path from 'path';
import fs from 'fs';

const readFile = (fileName: string) => {
    return fs
        .readFileSync(path.join(__dirname, fileName), 'utf-8')
        .split("\n");
}
const readFileNoSplit = (fileName: string) => {
    return fs
        .readFileSync(path.join(__dirname, fileName), 'utf-8')
}

export {readFile, readFileNoSplit}

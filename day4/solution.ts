const part1 = (numbers: number[], rawBoardData: string): number => {

    const boards = uglyParseBoardData(rawBoardData)

    numbers.map(number => {
        const updatedBoard = boards.map(boardRow => {
            const hit = boardRow.indexOf(number);
            if (hit > 0) {
                boardRow[hit] = 0
            }
            return boardRow
        })
        return updatedBoard
    })

    return 0
}

const uglyParseBoardData = (rawBoardData: string): number[][] => {
    let boardIndex = 0

    let boardArray = rawBoardData
        .split("\n");

    const totalBoards = (boardArray.length + 1) / 6;

    return boardArray
        .reduce((acc, curr, index, array): number[][] => {
            if (curr.length) {
                if (!acc[boardIndex]) {
                    acc[boardIndex] = []
                }
                const boardRows: string[] = curr
                    .split(" ")
                    .filter(Number);

                const rowsAsNumbers = boardRows.map(number => Number(number));

                acc[boardIndex].push(rowsAsNumbers)
            } else {
                boardIndex++
            }
            return acc
        }, new Array(totalBoards))
}


export {part1}
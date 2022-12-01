function findWinningRow(board: (number | null)[][]) {
    return board.find(boardRow => {
        const remainingNumber = boardRow.filter(number => number !== null)
        if (remainingNumber.length === 0) {
            return true
        }
    })
}

function findWinningColumn(board: (number | null)[][]) {
    const columnLength = board[0].length
    let winnerFound = false
    const banana = [...Array<number>(columnLength)].find((_, columnIndex) => {
        const columns = board.map((boardRow) => boardRow[columnIndex])
        const remainingNumber = columns.filter(number => number !== null)
        if (remainingNumber.length === 0) {
            winnerFound = true
            return true
        }
    })
    return winnerFound
}

function checkForWinner(boards: (number | null)[][][]): (number | null)[][] | undefined {
    return boards.find((board, index) => {
        return findWinningRow(board) || findWinningColumn(board);
    })
}

function rejectWinner(boards: (number | null)[][][]): (number | null)[][][] {
    return boards.filter((board, index) => {
        return !(findWinningRow(board) || findWinningColumn(board));
    })
}

function markNumberOnBoard(boards: (number | null)[][][], number: number) {
    return boards.map(board => {
        return board.map((boardRow: (number | null)[]) => {
            const hit = boardRow.indexOf(number);
            if (hit !== -1) {
                boardRow[hit] = null
            }
            return boardRow
        })
    });
}

function sumBoard(winningBoard: (number | null)[][]) {
    return winningBoard.reduce((acc, rows) => {
        const summedRow = rows.reduce((acc, curr) => {
            if (curr !== null) {
                acc! += curr
            }
            return acc
        }, 0)

        acc += summedRow!

        return acc
    }, 0);
}

const part2 = (numbers: number[], rawBoardData: string): object => {
    let boards = uglyParseBoardData(rawBoardData)

    let sumOfLosingBoard = 0

    const winningNumber = numbers.find(number => {
        boards = markNumberOnBoard(boards, number)

        if (number === 34 || number === 60 || number === 74) {
            console.log("STop here")
        }

        const remainingBoards = rejectWinner(boards)

        if (boards.length > 1) {
            boards = remainingBoards
        } else {
            sumOfLosingBoard = sumBoard(boards[0])
            return true
        }
    })
    return {winningNumber, sumOfLosingBoard, solution: (winningNumber! * sumOfLosingBoard)}

}

const part1 = (numbers: number[], rawBoardData: string): object => {
    let boards = uglyParseBoardData(rawBoardData)

    let sumOfWinningBoard: number = 0

    const winningNumber = numbers.find(number => {
        boards = markNumberOnBoard(boards, number)

        const winningBoard = checkForWinner(boards)

        if (winningBoard) {
            sumOfWinningBoard = sumBoard(winningBoard)

            return true
        }
    })

    return {winningNumber, sumOfWinningBoard, solution: (winningNumber! * sumOfWinningBoard)}
}

const uglyParseBoardData = (rawBoardData: string): (number | null)[][][] => {
    let boardIndex = 0

    let boardArray = rawBoardData
        .split("\n");

    const totalBoards = (boardArray.length + 1) / 6;

    return boardArray
        .reduce((acc, curr, index, array): (number | null)[][][] => {
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


export {part1, part2}
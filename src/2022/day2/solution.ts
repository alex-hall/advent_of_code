/*

A = Rock     = 1 point
B = Paper    = 2 points
C = Scissors = 3 points

Scoring:

0 if lost / 3 if draw / 6 if win
+
Point value from YOUR throw

 */

const part1 = (file: string[]): number => {
    let scoreSum = 0

    const scoringMap = {
        "A": "X", // Rock : Rock
        "B": "Y", // Paper : Paper
        "C": "Z" // Scissors : Scissors
    }

    file.map(row => {
        const [opponentThrow, responseThrow] = row.split(' ')

        console.log(`Opponent throws: ${opponentThrow}, you respond: ${responseThrow}`)
        let scoringKeys = Object.keys(scoringMap);
        const opponentIndex = scoringKeys.indexOf(opponentThrow)
        const responseIndex = Object.values(scoringMap).indexOf(responseThrow)

        let resultScore

        if((opponentIndex === 2) && responseIndex === 0){
            resultScore = 6
        }else if(opponentIndex === 0 && responseIndex === 2){
            resultScore = 0
        } else if (responseIndex > opponentIndex) {
            resultScore = 6
        } else if (opponentIndex === responseIndex) {
            resultScore = 3
        } else {
            resultScore = 0
        }

        scoreSum += (responseIndex + 1) + resultScore
    })

    return scoreSum
}

const part2 = () => {
    return true
}

export {
    part1,
    part2
}

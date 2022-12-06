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

const part2 = (file: string[]) => {
    let scoreSum = 0

    const rpsHeirarchy = [
        "A", // Rock : Rock
        "B", // Paper : Paper
        "C" // Scissors : Scissors
    ]

    /*

    Intended Result:
    X === Lose
    Y === Draw
    Z === Win

     */

    file.map(row => {
        const [opponentThrow, expectedResult] = row.split(' ')

        const circularLinkedList = new BadCircularLinkedList(rpsHeirarchy)

        let respondingThrow

        const getScore = (respondingThrow: string) => rpsHeirarchy.indexOf(respondingThrow) + 1;

        switch(expectedResult){
            case "X":
                respondingThrow = circularLinkedList.previous(opponentThrow)
                scoreSum += getScore(respondingThrow)
                break
            case "Y":
                respondingThrow = opponentThrow
                scoreSum += getScore(respondingThrow) + 3
                break
            case "Z":
                respondingThrow = circularLinkedList.next(opponentThrow)
                scoreSum += getScore(respondingThrow) + 6
                break
        }
    })

    return scoreSum
}

class BadCircularLinkedList{
    private data
    private length

    constructor(data: string[]){
        this.data = data
        this.length = this.data.length
    }

    next(element: string) {
        const index = this.data.indexOf(element)

        if((this.length - 1) === index){
            return this.data[0]
        }else{
            return this.data[index+1]
        }
    }

    previous(element: string){
        const index = this.data.indexOf(element)

        if(index === 0){
            return this.data[this.length - 1]
        }else{
            return this.data[index-1]
        }
    }
}

export {
    part1,
    part2
}

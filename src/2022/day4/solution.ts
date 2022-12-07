const part1 = (file: string[]) => {
    let coverCount = 0

    file.map(unformattedPairs => {
        const [firstAssignment, secondAssignment] = unformattedPairs
            .split(",")

        const firstRange = firstAssignment.split("-").map(n => +n)
        const secondRange = secondAssignment.split("-").map(n => +n)

        const firstAssignmentSize = firstRange[1] - firstRange[0]
        const secondAssignmentSize = secondRange[1] - secondRange[0]

        const compareRange = ([smallerStart, smallerEnd]: number[], [largerStart, largerEnd]: number[]) => {
            if (smallerStart >= largerStart && smallerEnd <= largerEnd) {
                return 1
            } else {
                return 0
            }
        }

        if (firstAssignmentSize >= secondAssignmentSize) {
            coverCount += compareRange(secondRange, firstRange)
        } else if (firstAssignmentSize < secondAssignmentSize) {
            coverCount += compareRange(firstRange, secondRange)
        }
    })
    return coverCount
}

const part2 = (file: string[]) => {
    let coverCount = 0

    file.map(unformattedPairs => {
        const [firstAssignment, secondAssignment] = unformattedPairs
            .split(",")

        const [firstStart, firstEnd] = firstAssignment.split("-").map(n => +n)
        const [secondStart,secondEnd] = secondAssignment.split("-").map(n => +n)

        /*

        Success Criteria:

        Range Containing Range: firstStart >= secondStart && firstEnd <= secondEnd
        Range Left Overlap: firstStart <= secondStart && firstEnd >= secondStart
        Range Right Overlap: firstStart <= secondEnd && firstEnd >= secondEnd

         */

        if(firstStart >= secondStart && firstEnd <= secondEnd){
            coverCount+=1
        }else if(firstStart <= secondStart && firstEnd >= secondStart){
            coverCount+=1
        }else if(firstStart <= secondEnd && firstEnd >= secondEnd){
            coverCount+=1
        }
    })

    return coverCount
}

export {
    part1,
    part2
}

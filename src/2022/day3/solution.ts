const calculatePriorityScore = (lowerCaseAZRange: string[], duplicateRucksackItem: string) => {
    let duplicatePriorityIndex = lowerCaseAZRange.indexOf(duplicateRucksackItem)
    let resultingScore

    if (duplicatePriorityIndex > 0) {
        resultingScore = (duplicatePriorityIndex + 1)
    } else {
        const downcasedDuplicateRucksackItem = duplicateRucksackItem.toLowerCase()

        const uppercaseDuplicatePriorityIndex = lowerCaseAZRange.indexOf(downcasedDuplicateRucksackItem)
        resultingScore = (uppercaseDuplicatePriorityIndex + 1) + 26
    }
    return resultingScore
}

const part1 = (file: string[]) => {
    const lowerCaseAZRange = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

    let sumPriorityScore = 0

    file.map(rucksack => {
        const midpoint: number = rucksack.length / 2;
        const firstHalf: string[] = rucksack.slice(0, midpoint).split("")
        const secondHalf: string[] = rucksack.slice(midpoint).split("")

        const uniqueRucksackItems: Set<string> = new Set(firstHalf)

        const duplicateRucksackItem = secondHalf.find(rucksackItem => {
            if (uniqueRucksackItems.has(rucksackItem)) {
                return rucksackItem
            }
        })

        if (!duplicateRucksackItem) {
            console.log("No duplicate found, probably a bug.")
            return;
        }
        sumPriorityScore += calculatePriorityScore(lowerCaseAZRange, duplicateRucksackItem);
    })

    return sumPriorityScore
}

const part2 = (file: string[]) => {
    const lowerCaseAZRange = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

    const elfGroupings = []

    for (let i = 0; i < file.length; i += 3) {
        const nextGroup = file
            .slice(i, i + 3)
            .filter(n => n)

        if (nextGroup.length) {
            let groupAsArrayOfStrings = nextGroup
                .map(grouping => grouping.split(""));
            elfGroupings.push(groupAsArrayOfStrings)
        }
    }

    const foundRucksackDuplicate = elfGroupings.map(([first, second, third]) => {
        const foundDuplicate = first.find(rucksackItem => {
            if(second.indexOf(rucksackItem) >= 0 && third.indexOf((rucksackItem)) >= 0){
                return rucksackItem
            }
        })

        if(!foundDuplicate){
            throw (`No duplicate found in ${first}!!`)
        }

        return foundDuplicate
    })

    let sumPriorityScore = 0

    foundRucksackDuplicate.map(duplicate => {
        sumPriorityScore += calculatePriorityScore(lowerCaseAZRange, duplicate)
    })

    return sumPriorityScore
}

export {
    part1,
    part2
}

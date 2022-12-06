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

        let duplicatePriorityIndex = lowerCaseAZRange.indexOf(duplicateRucksackItem)

        if (duplicatePriorityIndex > 0) {
            sumPriorityScore += (duplicatePriorityIndex + 1)
        } else {
            const downcasedDuplicateRucksackItem = duplicateRucksackItem.toLowerCase()

            const uppercaseDuplicatePriorityIndex = lowerCaseAZRange.indexOf(downcasedDuplicateRucksackItem)
            sumPriorityScore += (uppercaseDuplicatePriorityIndex + 1) + 26
        }
    })

    return sumPriorityScore
}

const part2 = (file: string[]) => {
    return true
}

export {
    part1,
    part2
}

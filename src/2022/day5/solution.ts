const part1 = (file: string[], packageHeap: string[][]) => {
    file.map(instruction => {
        const [_, amount, from, to] = instruction.match(/move\ (\d+) from (\d)\ to\ (\d)/) || []

        const fromIndex = +from - 1
        const toIndex = +to - 1

        Array.from({length: +amount}, () => {
            let selectedHeap = packageHeap[fromIndex];
            const hoistedPackage = selectedHeap.splice(selectedHeap.length - 1, 1)
            packageHeap[toIndex].push(hoistedPackage[0])
        })
    })

    const topPackages = packageHeap.map(packages => packages[packages.length - 1]).join("")

    return topPackages
}

const part2 = (file: string[], packageHeap: string[][]) => {
    file.map(instruction => {
        const [_, amount, from, to] = instruction.match(/move\ (\d+) from (\d)\ to\ (\d)/) || []

        const fromIndex = +from - 1
        const toIndex = +to - 1
        const amountNumber = +amount

        let selectedHeap = packageHeap[fromIndex];
        const hoistedPackages = selectedHeap.splice(selectedHeap.length - amountNumber, amountNumber)
        packageHeap[toIndex].push(...hoistedPackages)
    })

    const topPackages = packageHeap.map(packages => packages[packages.length - 1]).join("")

    return topPackages
}

export {
    part1,
    part2
}

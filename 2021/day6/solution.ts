const part1 = (rawFile: string[], numIterations: number): object => {

    let lanternFish = rawFile[0]
        .split(",")
        .map(string => Number(string))

    for (let i = 0; i < numIterations; i++) {
        let newFishToAdd = 0
        lanternFish = lanternFish.reduce((acc, fish, index): number[] => {
            if (fish === 0) {
                acc[index] = 6
                newFishToAdd += 1
            } else {
                acc[index] = fish - 1
            }
            return acc
        }, Array<number>())

        for(let i = 0; i < newFishToAdd; i++){
            lanternFish.push(8)
        }

        console.log(`Lantern Fish count after day ${i + 1}: Length is: ${lanternFish.length}`)
    }

    return {solution: lanternFish.length}
}


export {part1}
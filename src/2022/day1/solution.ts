const getSummedCalorieByElf = (calorieList: string[]) => {
    let cursor: number = 0
    return calorieList.reduce((acc, curr): number[] => {

        if (curr.length) {
            acc[cursor] += (+curr)
        } else {
            cursor += 1
            acc[cursor] = 0
        }
        return acc
    }, [0]);
}

const part1 = (calorieList: string[]) : number => {
    const summedCalorieByElf: number[] = getSummedCalorieByElf(calorieList)

    return Math.max(...summedCalorieByElf)
}

const part2 = (calorieList: string[]) : number => {
    const summedCalorieByElf: number[] = getSummedCalorieByElf(calorieList)

    const sortedCaloriesByElf = summedCalorieByElf.sort((a,b) => b-a);

    return sortedCaloriesByElf[0] +
        sortedCaloriesByElf[1] +
        sortedCaloriesByElf[2]
}

export {
    part1,
    part2
}

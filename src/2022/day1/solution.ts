const part1 = (calorieList: string[]) : number => {
    let cursor = 0
    const summedCalorieByElf: number[] = calorieList.reduce((acc, curr, index, array): number[] => {
        if(curr.length){
            acc[cursor] += (+curr)
        }else{
            cursor +=1
        }
        return acc
    }, [0])

    return Math.max(...summedCalorieByElf)
}

export {
    part1
}

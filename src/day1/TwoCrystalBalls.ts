export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length))
    let i = jumpAmount
    for (; i < breaks.length; i += jumpAmount){
        if (breaks[i]) { // array is booleans, so if true, then it broke
            break // stop the loop, keeps i equal to the index where it broke
        }
    }
    i -= jumpAmount
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) { // only go the jump amount, so if j = jump amount stop
        if (breaks[i]) {
            return i
        }
    }
    return -1
}
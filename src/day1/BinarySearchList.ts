export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length; // length of 10 means high will be 10, 10 is not an index, 0-9, so hi is always excluded.
    do{
        const m = Math.floor(lo + (hi - lo) /2)
        const v = haystack[m]
        if (v === needle) {
            return true
        } else if (v > needle) {
            hi = m // hi is excluded so don't -1
        } else {
            lo = m + 1 // don't look at the midpoint again
        }
    } while (lo < hi)
    return false
}
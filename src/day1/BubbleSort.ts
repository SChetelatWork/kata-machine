export default function bubble_sort(arr: number[]): void { // for an array of unsorted numbers
    for(let i = 0;i < arr.length; ++i){ // need to loop the array N times
        for (let j = 0; j < arr.length - 1 - i; ++j){ // each iteration we need to loop and sort values next to each other, skipping the last value on each next iteration.
            // i - 1 so we only compare the second last value to the last value and not thelast value to an index that doesn't exist.
            if(arr[j] > arr[j + 1]){ // if the first value is greater than the second value, then swap them
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}
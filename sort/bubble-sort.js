
/** O(n^2) time and no space as we are modifying the existing array */
const bubbleSort = (array) => {
    let index = 0;
    while(index < array.length){
        for(let i=0; i<array.length-1; i++){
            if(array[i+1] < array[i]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
            }
        }
        index++
    }
    return array;
}

console.log(bubbleSort([4,8,5,3,1])); // [ 1, 3, 4, 5, 8 ]
console.log(bubbleSort([1,2,3])); // [ 1, 2, 3 ]
console.log(bubbleSort([111, 110, 112, 9, -1, 345, -12])); // [-12,  -1,   9, 110, 111, 112, 345]

/** ( OPTIMIZED APPRAOCH I ) Using Boolean Check */
console.log(" ------ ( OPTIMIZED APPROACH I ) Using Boolean Check -------- ");

// O(n^2) time
const bubbleSortII = (array) => {
    let index = 0;
    /** at the start we know for sure array is not sorted */
    let isSorted = false;
    while(index < array.length){
        /** 
         * assume we sorted list, this is valid if and only if we dont go inside
         * the if condition to swap the items. So this is the key.
         */
        isSorted = true;
        for(let i=0; i<array.length-1; i++){
            if(array[i+1] < array[i]){
                isSorted = false; /** some values are not sorted, so reset */
                [array[i], array[i+1]] = [array[i+1], array[i]]
            }
        }

        index++
        /** if isSorted is still true, then we must have sorted elements left */
        if(isSorted) return array
    }

    return array;
}

console.log(bubbleSortII([4,8,5,3,1])); // [ 1, 3, 4, 5, 8 ]
console.log(bubbleSortII([1,2,3])); // [ 1, 2, 3 ]
console.log(bubbleSortII([111, 110, 112, 9, -1, 345, -12])); // [-12,  -1,   9, 110, 111, 112, 345]
console.log(bubbleSortII([4,-1,9,2,7,0])); // [ -1, 0, 2, 4, 7, 9 ]

/** ( OPTIMIZED APPROACH II ) By reducing the array size after every loop  */

console.log("------ ( OPTIMIZED APPROACH II ) By reducing the array size after every loop ------ ");

// O(n^2) time
const bubbleSortIII = (array) => {
    let index = 0;
    let size = array.length;
    /** we have to loop for all elements */
    while(index < array.length){
        /** 
         * on end of every loop, we would have pushed the largest element to last.
         * so why check it again ? hence the size reduction after for loop (size--).
         * size-1 : is for i+1 check
         */
        for(let i=0; i<size-1; i++){
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
            }
        }

        index++;
        size--
    }

    return array;
}

console.log(bubbleSortIII([4,8,5,3,1])); // [ 1, 3, 4, 5, 8 ]
console.log(bubbleSortIII([1,2,3])); // [ 1, 2, 3 ]
console.log(bubbleSortIII([111, 110, 112, 9, -1, 345, -12])); // [-12,  -1,   9, 110, 111, 112, 345]
console.log(bubbleSortIII([-8, -9, 9, 8, 0, -1])); // [ -9, -8, -1, 0, 8, 9 ]
console.log(bubbleSortIII([4,-1,9,2,7,0])); // [ -1, 0, 2, 4, 7, 9 ]
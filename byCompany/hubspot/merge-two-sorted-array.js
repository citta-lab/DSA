let arrOne = [2,4,5];
let arrTwo = [1,2,3,6,7];

/**
 * Time: O(N+M) and Space: O(N+M)
 * @param {*} arrOne : sorted array
 * @param {*} arrTwo : sorted array
 * @returns 
 */
let mergeTwo = (arrOne, arrTwo) => {

    let first = 0;
    let second = 0;

    let result = [];
    while(first < arrOne.length && second < arrTwo.length){

        if(arrOne[first] <= arrTwo[second]){
            result.push(arrOne[first]);
            first ++
        } else {
            result.push(arrTwo[second]);
            second ++
        }
    }

    /** if we have anything remaning in first array */
    if(first < arrOne.length){
       while(first < arrOne.length){
        result.push(arrOne[first]);
        first++
       }
    }
    
    /** if we have anything remaning in second array */
    if(second < arrTwo.length){
        while(second < arrTwo.length){
            result.push(arrTwo[second]);
            second++
        }
    }

    console.log(result)
    return result;
}

/** example 1 */
mergeTwo(arrOne, arrTwo);

/** example 2 */
arrOne = [2,2,2];
arrTwo = [2];

mergeTwo(arrOne, arrTwo);

/** example 3 */
arrOne = [0,1,99,109];
arrTwo = [-1,0,1];

mergeTwo(arrOne, arrTwo);
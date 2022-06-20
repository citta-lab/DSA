
const mergeTwoWithKLimit = (arrOne, arrTwo, k) => {

    let result = [];
    let count = 0;

    let first = 0;
    let second = 0;

    while(first < arrOne.length && second < arrTwo.length && count < k){
       
        if(arrOne[first] <= arrTwo[second]){
            result.push(arrOne[first]);
            first ++
        } else {
            result.push(arrTwo[second]);
            second ++
        }

        count ++
    }

    while(first < arrOne.length && count < k){
        result.push(arrOne[first]);
        first ++
        count ++
    }

    while(second < arrTwo.length && count < k){
        result.push(arrTwo[second]);
        second ++
        count ++
    }

    console.log(result);
    return result; 
}

/** example 1 */
let arrOne = [2,4,5];
let arrTwo = [1,2,3,6,7];
mergeTwoWithKLimit(arrOne, arrTwo, 8);

/** example 2 */
arrOne = [2,2,2];
arrTwo = [2];

mergeTwoWithKLimit(arrOne, arrTwo,3);

/** example 3 */
arrOne = [0,1,99,109];
arrTwo = [-1,0,1];

mergeTwoWithKLimit(arrOne, arrTwo, 3);

mergeTwoWithKLimit(arrOne, arrTwo, 100);
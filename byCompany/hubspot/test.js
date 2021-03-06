let arrOne = [2,4,5];
let arrTwo = [1,2,3,6,7];

let mergeTwo = (arrOne, arrTwo) => {

    let first = 0;
    let second = 0;

    let result = [];
    while(first < arrOne.length && second < arrTwo.length){

        /** by doing this we can handle duplicate numbers  */
        while(arrOne[first] <= arrTwo[second]){
            result.push(arrOne[first]);
            first ++
        }

        while(arrOne[first] > arrTwo[second]){
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

mergeTwo(arrOne, arrTwo);
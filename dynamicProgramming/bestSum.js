/** 
 * Given an array and a target find any combination of array elements which forms a target with small numbers of subset.
 * target = 7, array = [5,2,2,1,4,7]
 * we can get array by any combinations like [5,2] or [2,2,2,1] or [4,2,1] or 7 but 7 is the smallest subset we can use to make target
 * Note that we can use same elements many times to form a target 
 */

 /** O(n^m * m) time and O(m*m) */
 const bestSum = (target, array) => {
    let shortestLengthArray = null;

    if(target === 0) return [];
    if(target < 0) return null;

    for(let num of array){
        let diff = target - num;
        let result = bestSum(diff, array);
        if(result !== null){
            
            const currentLengthArray = [...result, num];
            if(shortestLengthArray === null || shortestLengthArray.length > currentLengthArray.length){
                shortestLengthArray = currentLengthArray;
            }
            
        }
    }

    return shortestLengthArray;
 }


//console.log(bestSum(7, [2,2,1,5]));
// console.log(bestSum(0, [5,2,2,1]));
// console.log(bestSum(1, [5,2,2,1]));
// console.log(bestSum(3, [5,2,2,1]));
// console.log(bestSum(345, [2,2,1,1]));


/** O(n*m*m) time and O(m*m) space as one for memo and one for array which is spreaed every recurrsion */
const bestSumMemo = (target, array, memo={}) => {
    let shortestLengthArray = null;

    if(memo[target]) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

    for(let num of array){
        let diff = target - num;
        let result = bestSumMemo(diff, array, memo);
        if(result !== null){
            
            const currentLengthArray = [...result, num];
            if(shortestLengthArray === null || shortestLengthArray.length > currentLengthArray.length){
                shortestLengthArray = currentLengthArray;
            }
            
        }
    }

    memo[target] = shortestLengthArray;
    return shortestLengthArray;
 }


console.log(bestSumMemo(7, [2,2,1,5]));
console.log(bestSumMemo(0, [5,2,2,1]));
console.log(bestSumMemo(1, [5,2,2,1]));
console.log(bestSumMemo(3, [5,2,2,1]));
console.log(bestSumMemo(345, [2,2,1,1]));
console.log(bestSumMemo(100, [1, 2,5,25]));
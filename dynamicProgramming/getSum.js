/** 
 * Given an array and a target find any combination of array elements which forms a target.
 * target = 7, array = [5,2,2,1,4,7]
 * we can get array by any combinations like [5,2] or [2,2,2,1] or [4,2,1] or 7
 * Note that we can use same elements many times to form a target 
 */

 /**
  * O(n^m * m) time
  * O(m) space
  */
 const getSum = (target, array) => {
     if(target === 0) return [];
     if(target < 0) return null; 

     for(let num of array){ /** n branches  */
         let newTarget = target - num; 
         let result = getSum(newTarget, array);

         if(result !== null){
            return [...result, num] /** this will add m complexity to time as we are copying elements for every recursion */
         }
     }

     return null;
 }


// console.log(getSum(7, [5,2,2,1]));
// console.log(getSum(0, [5,2,2,1]));
// console.log(getSum(1, [5,2,2,1]));
// console.log(getSum(3, [5,2,2,1]));
// console.log(getSum(345, [2,2,1,1]));

/**
 * O(n*m*m) time
 * O(m^2) space ( one for memo hash and one for copy array)
 */
const getSumMemo = (target, array, memo={}) => {
    if(memo[target]) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null; 

    for(let num of array){
        let newTarget = target - num; 
        let result = getSum(newTarget, array, memo);

        if(result !== null){
           memo[target] = [...result, num];
           return memo[target];
        }
    }

    memo[target] = null;
    return memo[target];
}

console.log(getSumMemo(7, [5,2,2,1]));
console.log(getSumMemo(0, [5,2,2,1]));
console.log(getSumMemo(1, [5,2,2,1]));
console.log(getSumMemo(3, [5,2,2,1]));
console.log(getSumMemo(345, [2,2,1,1]));
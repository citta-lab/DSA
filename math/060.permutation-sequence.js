/**
 * 60. Permutation Sequence
 * 
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * Given n and k, return the kth permutation sequence.
 * 
 * 
 * Example:
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * leetcode-question:60
 * leetcode:https://leetcode.com/problems/permutation-sequence/
 *
 * Refer Here: https://leetcode.com/problems/permutation-sequence/discuss/22507/%22Explain-like-I'm-five%22-Java-Solution-in-O(n)
 * 
 * Hint
 * - Pure Math problem with Pattern recognition 
 * - Time:O(N) and Space:O(N)
 * - Read the leetcode link attached for great explanation
 * - Three step process by building pattern
 * - permutation is n! so if n=3 then we will have 3*2*1 = 6 permutations
 * - k'th value can be found without buulding all 6 permutations using formula, which will 
 * give us the index of number we can pick, then we readjust k to reflect new remaning
 * numbers and find next index etc.
 */


 var getPermutation = function(n, k) {
    
    /** 
     * step 1: create factorial array for easy lookup 
     * i.e N! = N * (N-1) * (N-2) ...
    */
    let factorial = new Array(n+1);
    
    let sum = 1;
    factorial[0] = 1;
    
    for(let i=1; i<=n; i++){
        sum *= i;
        factorial[i] = sum;
    }
    
    console.log(factorial); // [ 1, 1, 2, 6 ] where N = 3
    
    /** 
     * step 2: build numers array for N which will have
     * indicies 
     */
    
    let numbers = [];
    for(let i=1; i<=n; i++){
        numbers.push(i);
    }
    
    console.log(numbers); // [1,2,3] where N = 3
    
    /** step 3: we are working with array where our
    count starts from 0 rather than 1. so update K */
    k --;
    
    /**
     * step 4: find the result by using the formula
     * for kth element.
     * - find item position based on k'th element 
     * - ignore everything upto the item position, consider the 
     * picked item.
     * - calculate new K value based on the item index 
     * - find next item position 
     * - repeat
     */
    
    let result = '';
    for(let i=1; i<=n; i++){
        let index = k / factorial[n-i];
        index = Math.floor(index);
        let numForKthPostion = numbers[index];
        result += numForKthPostion;
        
        /** remove the numForKthPostion number from numbers */
        numbers.splice(index, 1); // remove at index, one item
        
        /** calculate new k as we now need to repeat for remaining numbers*/
        k -= index*factorial[n-i];
    }
    
    console.log(result); // 213
    
    return result
};

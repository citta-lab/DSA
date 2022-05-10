/**
 * 1304. Find N Unique Integers Sum up to Zero
 * 
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 * 
 * Input: n = 5
 * Output: [-7,-1,1,3,4]
 * 
 * Input: n = 3
 * Output: [-1,0,1]
 * 
 * leetcode-question:1304
 * leetcode:https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 * refer: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/discuss/465585/JavaC%2B%2BPython-Find-the-Rule
 * 
 * Hint:
 * - Try finding the pattern using the number
 * - if n = 1, then [0]
 * - if n = 2, then [-1, 1]
 * - if n = 3, then [-2, 0, 2]
 * - if n = 4, then [-3, -1, 1, 3]
 * - if n = 5, then [-4, -2, 0, 2, 4]
 * 
 * so formala we can come-up with is (i*2 - n + 1 )
 */

 /** Appraoch using Formula  */
 var sumZero = function(n) {
    
    /** explanation
      - we will find a formula which will make 0 sum 
      - formula = i * 2 - n + 1
      - Example: n = 5
      -- result = [-4,-2,0,2,4]
    */
    
    let result = [];
    for(let i=0; i<n; i++){
        let num = i * 2 - n + 1;
        result.push(num);
    }
    
    return result;
};

/** Reading result even vs odd n result */
var sumZero = function(n) {
    let result = [];
    
    /** notice when numbers are odd we will have 0 in the result 
    i.e if n=5, result = [0] */
    
    if( n%2 !== 0){
        result.push(0);
    }
    
    /** we will find values only n/2 and have neagive values for same negative val
    i.e if n=5, result [0, 1,-1, 2, -2] */
    
    for(let i=1; i<= n/2; i++){
        result.push(i, -i)
    }
    
    return result
};
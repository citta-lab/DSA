/** 
 * 
 * 1822. Sign of the Product of an Array
 * 
 * There is a function signFunc(x) that returns:
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 * 
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 * Return signFunc(product).
 * 
 * leetcode-question:1822
 * leetcode:https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * 
 * Example 1:
 * Input: nums = [-1,-2,-3,-4,3,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [51,38,73,21,27,55,18,15,79,29,13,45,8,-73,-92,-20,-50,-60,-70]
 * Output: 1
 * 
 * Hint:
 * - Time:O(N) and Space:(1)
 * - we are asked to implement signFunc
 * - If we look closer, we dont REALLY need to calculate product of nums rather
 * make decision based on 0, -ve value. 
 */


 var arraySign = function(nums) {
    
    let sign = 1;
    
    for(let num of nums){
        
        /** if we find 0, then no point doing rest of the cal */
        if(num === 0){
            sign = 0;
            break;
        } 
        
        /** flip when we find -ve value */
        if(num < 0){
            sign = -sign
        }
    }
    
    return sign;
};
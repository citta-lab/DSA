/** 561. Array Partition I
 * 
 * Given an integer array nums of 2n integers, group these integers into n 
 * pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) 
 * for all i is maximized. Return the maximized sum.
 * 
 * Input: nums = [1,4,3,2]
 * Output: 4
 * 
 * Explanation: All possible pairings (ignoring the ordering of elements) 
 * are:  
 * a. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
 * b. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 * 
 * leetcode-question:561
 * leetcode:https://leetcode.com/problems/array-partition-i/
 * 
 */

 var arrayPairSum = function(nums) {
    
    /** 
    given nums = [1,4,3,2] we need to pair up the combination of 2n and
    find min value 
    i.e (1,4) min is 1 and (3,2) min is 2 and then find sum 1+2 = 3.
    similarly when we do combination of (1,2) and (3,4) we find 1 + 3 = 4. 
    Now we return the max sum. 
    
    The main part here is finding the min value between combination in 
    un sorted array, then adding the two mins to find if we can get max
    SUM. 
    
    Why sorting ?
    
    If we sort the array then it will become [1,2,3,4] and we need 2n pair
    i.e (1,2) and (3,4) which will give 1 + 3 = 4 OUR ANSWER. 
    
    Why i = i+2 ?
    
    we need pair of 2n so at first loop we just get min between 1,2 i.e 1
    second loop we get min between 3,4 i.e 3. The result will first hold 1,
    next 1+3 so OUR ANSWER 4
    */
    
    nums.sort((a,b) => a-b); // [1,2,3,4]
    
    let result = 0;  // 1, 1+3 
    for(let i=0; i<nums.length; i=i+2){
        result += nums[i];
    }
    
    return result
};
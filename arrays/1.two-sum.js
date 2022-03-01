/** 
 * 
 * 1. Two Sum 
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice. 
 * You can return the answer in any order.
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * 
 * leetcode-question:1
 * leetcode:https://leetcode.com/problems/two-sum/
 * video: https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=1
 * 
 * BLIND:1 ( 1/ 75 )
 * 
 * Hint: 
 * - Array is not SORTED 
 * - Use HashMap to track of num and index ( not the diff )
 * - Make sure to check for Zero as we will have zero index 
 * */

/** Time: O(N) and Space: O(N) */
var twoSum = function(nums, target) {
    
    let hash = {}
    
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let diff = target - num; 
        
        /** in js ZERO is false value, so make sure we check >= 0 as num can have zero index */
        if(hash[diff] >= 0){
            return [i, hash[diff]];
        }
        
        hash[num] = i;
    }
    
    return [-1, -1]
};

let nums = [2,7,11,15];
let target = 9;
console.log(nums, target); // [0,1]

nums = [3,2,4];
target = 6
console.log(nums, target); // [1,2]

nums = [3,3]; 
target = 6
console.log(nums, target); // [0,1]

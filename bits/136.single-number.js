/**
 * 136. Single Number
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * leetcode-question:136
 * leetcode:https://leetcode.com/problems/single-number/
 * 
 * Hint:
 * Optimal - XOR operation 
 * - Time:O(N) and Space:O(1)
 * - apply reduce function with acc ^ cur will return non duplicate
 * 
 */

/** Time:O(N) and Space:O(1) */
var singleNumber = function(nums) {
    
    /** 
    ref: https://www.youtube.com/watch?v=XzQSPg6LFyY
    performing XOR operations by adding previous 
    numbers. i.e XOR table suggests 
    1^1 = 0, 0^1 = 1, 1^0=1, 0^0=0
    
    example: [2,1,2] we should return 1.
    
    1st loop: 0^2 = 2 (0000 ^ 0001 = 0001)
    2nd loop: 2^1 = 3 (0001 ^ 0010 = 0011)
    3rd loop: 3^2 = 1 (0011 ^ 0010 = 0001)
    */
    return nums.reduce((acc, cur) => acc ^ cur, 0);
};
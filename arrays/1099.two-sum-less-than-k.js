/** 
 * 
 * 1099. Two Sum Less Than K 
 * 
 * Given an array nums of integers and integer k, return the maximum sum such that there 
 * exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this 
 * equation, return -1. 
 * 
 * Input: nums = [34,23,1,24,75,33,54,8], k = 60
 * Output: 58
 * 
 * Input: nums = [10,20,30], k = 15
 * Output: -1
 * 
 * Input: nums = [1,2,4,5], k = 6
 * Output: 5
 * 
 * leetcode-question:1099
 * leetcode: https://leetcode.com/problems/two-sum-less-than-k/
 * 
 * Hint:
 * - two pointer one at 0 and one at length-1
 * - sorting will help in having these pointwers at the end
 * - if left+right < k then store max value between result and left+right and move left
 * (left++)
 * - else we move right (right --)
 * 
 * */

 /** Time: O(nlogn) and space:O(logn) from sorting */
 var twoSumLessThanK = function(nums, k) {
    let left = 0;
    let right = nums.length -1;
    
    nums.sort((a,b) => a - b);
    
    let result = -1;
    
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum < k){
            result = Math.max(result, sum); // picks the closest (max) to k
            left ++
        }else {
            right --
        }
    }
    
    return result;
};
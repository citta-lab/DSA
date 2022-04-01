/**
 * 41. First Missing Positive
 *
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses constant extra space.
 *
 *
 * Input: nums = [1,2,0]
 * Output: 3
 *
 * Input: nums = [3,4,-1,1]
 * Output: 2
 *
 *
 * leetcode-question:41
 * leetcode:https://leetcode.com/problems/first-missing-positive/
 * ref:https://leetcode.com/problems/first-missing-positive/discuss/997296/Java-O(n)-time-O(1)-space-or-with-comments
 * video: https://www.youtube.com/watch?v=8g78yfzMlao
 *
 * Hint:
 * Optimized: Time : O(N) and Space:(1)
 * - we will treat value as index in this array 
 * - we will REPLACE num with "nums.length + 1" if num is <= 0
 * - we will mark them -ve if they are in range 
 * -- newIndex = Math.abs(num) - 1;
 * -- check if newIndex + 1 > 0 && newIndex + 1 <= nums.length
 * -- mark it negative by taking abs value. -Math.abs(num)
 * - now we will do one more loop and find index of value > 0
 * -- return index+1 as we are in array world
 *
 */

 /** Time:O(N) and Space:O(1) */
var firstMissingPositive = function(nums) {
    
    /**
     step 1:
     if we have any values less than or equal to
     zero then we set OUT OF BOUND value.
     Example:
     we will make it as "nums.length + 1".
     nums = [1,2,*-3*,4] => [1,2,*5*,4]
     */
    
     for(let i=0; i<nums.length; i++){
         if(nums[i] <= 0){
             nums[i] = nums.length + 1
         }
     }
    
     console.log(nums); // [ 1, 2, 5, 4 ]
    
     
    /**
     step 2:
     we now need remark the values if we find the 
     values to be out of bound. 
     - treat as index: take absolute value of num - 1 
     - check if index + 1 is with in the range 0 & nums.length;
     - if the index is in range we mark it -ve to it's num
     */
    
     for(let i=0; i<nums.length; i++){
         let index = Math.abs(nums[i]) - 1;
         if(index+1 > 0 && index + 1 <= nums.length){
             nums[index] = - Math.abs(nums[index]);
         }
     }
    
    console.log(nums); // [ -1, -2, 5, -4 ]
    
    /**
     step 3:
     now we have made the out of bound value sit in index
     which suppose to represent the MISSING number. 
     remember to plus ONE as we are dealing with array.
     i.e index + 1
     */
    
     for(let i=0; i<nums.length; i++){
         if(nums[i] > 0){
             return i + 1;
         }
     }

     /** 
      step 4:
      if everything is fine 
      */
      return nums.length + 1

};
 

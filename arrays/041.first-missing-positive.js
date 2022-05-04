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
 * BruteForce: Time:O(NlogN) and Space:O(N)
 * - Will sort given array 
 * - remove -ve values 
 * - use set to do lookup 
 *
 * Optimal: Time:O(N) and Space:ON)
 * - will not sort instead use set and filter 
 * - filter -ve and 0 values as they are not positve values
 * - add filtered nums in set 
 * - find max value from filtered array
 * - loop from 1 until max and look up in set for missing value
 * - return max+1 if we didnt find missing in set
 *
 *
 * More Optimized: Time : O(N) and Space:(1)
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

/*************************************************************************
 *
 * Bruteforce 
 * Time:O(NlogN) and Space:O(N)
 *
 *
 *************************************************************************/


/** Time:O(NlogN) Space:O(N) */
var firstMissingPositive = function(nums) {
    
    /** we ignore any values less than or equal to zero */
    nums = nums.filter((a) => a > 0);
    
    /** sort them so we can check from left to right */
    nums.sort((a,b) => a-b)
    
    /** remove duplicates */
    let numsSet = new Set(nums)
    
    let i = 1;
    for(let num of numsSet){
        /** if our i and num doesnt match then we found the missing */
        if(i !== num) return i;
        i++
    }
    
    /** we didnt find missing and now i===nums.length anyway */
    return i
};


/*************************************************************************
 *
 * Optimal with Time:O(N) and Space:O(N)
 * No Sorting <--- 
 *
 *************************************************************************/

var firstMissingPositive = function(nums) {
    
    /** remove any -ve values and 0 as they are not postive */
    let filter = nums.filter((a) => a > 0);
    
    /** edge case: handle when nums = [0] */
    if(!filter.length) return 1;
    
    console.log(filter)
    
    /** find max value, acts as boundary */
    let max = Math.max(...filter);
    
    /** set for O(1) look up */
    let set = new Set(filter);
    
    console.log(set);
    
    /** iterative from 1 until max to see if we find missing */
    for(let i=1; i<= max; i++){
        if(!set.has(i)) return i;
    }
    
    /** if we didnt find then return max+1 */
    return max+1
};


/*************************************************************************
 *
 * More Optimal with Time:O(N) and Space:O(1)
 *
 *
 *************************************************************************/

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
 

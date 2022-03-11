/** 
 * 
 * Two Sum II - Input Array Is Sorted [ No extra Space ]
 * 
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in 
 * non-decreasing order, find two numbers such that they add up to a specific 
 * target number. Let these two numbers be numbers[index1] and numbers[index2]
 * where 1 <= index1 < index2 <= numbers.length. 
 * 
 * 
 * The tests are generated such that there is exactly one solution. 
 * You may not use the same element twice. Your solution must use only constant extra space.
 * 
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * 
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 * 
 * leetcode-question:167
 * leetcode:https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * Hint:
 * - think about doing TWO pointer from 0 and lenght -1
 * - we need to move left, right based on target - (nums[left]+nums[right]) 
 * by comparing it to zero
 * */

 /** Time: O(N) and Space:O(1) */
 var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    
    while(left < right){
        let diff = target - ( numbers[left] + numbers[right]);
        if(diff < 0){
            right --
        }else if (diff > 0 ){
            left ++
        }else if ( diff === 0){
            return [left+1, right+1]
        }
    }
    
    return [-1, -1]
};
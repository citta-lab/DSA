/**
 *
 * 81. Search in Rotated Sorted Array II
 *
 *
 * There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
 * Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) 
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
 * For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
 * 
 * Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
 * You must decrease the overall operation steps as much as possible.
 *
 * Example: 
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 *
 * Input: nums = [1,0,1,1,1], target = 0.     <-- Important Example 
 * Output: true
 *
 * leetcode:https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * leetcode-question: 81
 *
 * problem 33: https://github.com/citta-lab/DSA/blob/main/arrays/033.search-in-rotated-sorted-array.js
 *
 * Hint:
 * - Binary Search : Time:O(logN) and Space:O(1)
 * - Similar to #33 problem 
 * - We will build logic for Binary search which will handle rotated sorted array
 * - This will fail for example [1,0,1,1,1] where target = 0
 * - we need to have a logic to skip elements if we find duplicates
 * -- i.e while(left < right && nums[left] === nums[left+1]) { left++ }
 * -- i.e while(left < right && nums[right] === nums[right-1] { right -- }
 */

/** Time:O(logN) and Space:O(1) */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        
        /** Only section diff from 33: avoid duplicates */
        while(left < right && nums[left] === nums[left+1]){
            left ++
        }
        
        while(left < right && nums[right] === nums[right-1]){
            right--
        }
        
        /** rest of binary search logic similar to #33 problem */
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target) return true;
        
        if(nums[left] <= nums[mid]){
            if(nums[mid] > target && target >= nums[left]){
                right = mid -1;
            }else{
                left = mid + 1;
            }
        } else {
            if(nums[mid] < target && target <= nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return false
};

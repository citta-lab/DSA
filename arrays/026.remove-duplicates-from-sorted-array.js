/**
 *  26. Remove Duplicates from Sorted Array 
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates 
 * in-place such that each unique element appears only once. The relative order of the 
 * elements should be kept the same.
 * 
 * Return k after placing the final result in the first k slots of nums.
 * 
 * Do not allocate extra space for another array. You must do this by 
 * modifying the input array in-place with O(1) extra memory.
 * 
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * 
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 
 * leetcode:
 * leetcode-question:
 * 
 * Hint:
 * - TWO pointer
 * - left starts at 0 and right is left + 1
 * - 
 */

/** Time:O(n) and Space:O(1) */
var removeDuplicates = function(nums) {
    
    if(nums.length === 0) return 0;
    
    let left = 0;
    let right = left + 1;
    
    while(right < nums.length){
        if(nums[left] !== nums[right]){
            left++
            nums[left] = nums[right]
        }
        
        right++
    }
    
    /** this keeps the index of all unique elements */
    return left + 1
};
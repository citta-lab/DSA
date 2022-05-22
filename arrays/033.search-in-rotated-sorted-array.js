7/** 
 * 
 * 33. Search in Rotated Sorted Array 
 * 
 * There is an integer array nums sorted in ascending order (with distinct values). 
 * Prior to being passed to your function, nums is possibly rotated at an unknown 
 * pivot index k (1 <= k < nums.length) such that the resulting array is 
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
 * 
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
 * and become [4,5,6,7,0,1,2].
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * output: -1
 * 
 * Input: nums = [1], target = 0
 * output: -1
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * Input: nums = [4,5,6,7,8,1,2,3], target = 8
 * Output: 4
 * 
 * Input: nums = [1,3], target = 3
 * Output: 1
 * 
 * leetcode-question:33
 * leetcode:https://leetcode.com/problems/search-in-rotated-sorted-array/
 * video:https://www.youtube.com/watch?v=U8XENwh8Oy8
 * 
 * BLIND: 10 (10/75)
 * 
 * Hint:
 * - we will use binary search which we can use on sorted array
 * - we will have to have extra if's to check if target is less than sorted left and/or
 * more than sorted right.
 * - if that is the case we need to look in oposite way
 * */

/** Time: O(logN) and Space:O(logN) */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
};

function binarySearch(nums, target, left, right){
    
    /** running example: [4,5,6,7,0,1,2], target = 0 */
    
    if(left > right) return -1;
    
    let mid = Math.floor((left+right)/2);  // 7
    
    if(nums[mid] === target) return mid;
    
    /** left side */
    if(nums[left] <= nums[mid]){
        if(target > nums[mid]){
            /** everything left side of mid is sorted but our target is GREATER than our mid */
            return binarySearch(nums, target, mid+1, right);
        }else if (target < nums[left]){
            /** everything left side of mid is sorted but our target is lower than our left */
            return binarySearch(nums, target, mid+1, right);
        }else if (target < nums[mid]){
            /** happy path of nornmal binary search on left side */
            return binarySearch(nums, target, left, mid-1);
        }
    }
    
    /** right side */
    if(nums[right] >= nums[mid]){
        if(target < nums[mid]){
            /** everything on right is sorted but target is less than mid, so looking at left side */
            return binarySearch(nums, target, left, mid-1);
        }else if (target > nums[right]){
            /** everything on right is sorted but our last value of right side is less than target */
            return binarySearch(nums, target, left, mid-1);
        }else if (target > nums[mid]){
            /** happy path of nornmal binary search on right side */
            return binarySearch(nums, target, left+1, right);
        }
    }
    
    return -1;
}




/*************************************************************************************
 * 
 * Iterative Appraoch
 * 
 *************************************************************************************/

 var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor((left+right) / 2);
        
        if(nums[mid] == target) return mid;
        
        if(nums[left] <= nums[mid]){
            if(target < nums[mid] && target >= nums[left]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(target > nums[mid] && target <= nums[right]){
                left = mid+1;
            }else{
                right = mid -1;
            }
        }
    }
    
    return -1;
}
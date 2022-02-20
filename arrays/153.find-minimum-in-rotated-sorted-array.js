/** 
 * 
 * 153. Find Minimum in Rotated Sorted Array 
 * 
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
 * For example, the array nums = [0,1,2,4,5,6,7] might become: 
 * - [4,5,6,7,0,1,2] if it was rotated 4 times.
 * - [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 * 
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * 
 * Input: nums = [4,5,6,7,0,1,2]
 * Output: 0
 * 
 * Input: nums = [11,13,15,17]
 * Output: 11
 * 
 * Input: nums = [2,1]
 * Output: 1
 * 
 * leetcode-question:153
 * leetcode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * video: https://www.youtube.com/watch?v=nIVW4P8b1VA
 * 
 * Hint:
 * - Binary search using mid 
 * - Initialize left = 0; right = nums.length -1 and run BS with in `while(left <= right) {...}`
 * - Check if the given array is already sorted i.e nums[left] <= nums[right] 
 * - Find mid i.e mid = Math.floor(left+right / 2) and result = Math.min(result, nums[mid]);
 * - move BS to right if left part seems sorted vice versa. 
 * -- if(nums[mid] >= nums[left]) { left = mid + 1} else { right = mid - 1}
 * */

/** time: O(logN) using binary search */
var findMin = function(nums) {
    let result = nums[0];
    
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        /** if the array is already sorted without rotation*/
        if(nums[left] < nums[right]){
            result = Math.min(result, nums[left]);
            return result;
        }
        
        /** sorted with rotation */
        let mid = Math.floor((left+right)/2);
        result = Math.min(result, nums[mid]);
        
        /** example: [3,4,5,1,2] where mid = 5 */ 
        if(nums[mid] >= nums[left]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    
    return result
};
/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 *  The relative order of the elements may be changed.Since it is impossible to change the length of the array 
 * in some languages, you must instead have the result be placed in the first part of the array nums. More formally, 
 * if there are k elements after removing the duplicates, then the first k elements of nums should hold the final 
 * result. It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.Do not allocate extra space for another 
 * array. You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example:
 * Input: nums = [3,2,2,3], val = 3
   Output: 2, nums = [2,2,_,_]

   Leet Code:
   https://leetcode.com/problems/remove-element/
 */

 /** O(n) time and O(1)space */
var removeElement = function(nums, val) {
    let left = 0;
    let current = 0;
    while(current < nums.length) {
        /** very similar to move-zeros-array problem. As long as current index value is not target
         * value we keep replacing it with left index. At the end the left index will indicate the
         * position until values are changed. 
         */
        if(nums[current] !== val){
            nums[left] = nums[current];
            left++
        }
        current++
    }
    
    //** ignore elements after left position */
    let removeIndex = nums.length - left;
    return nums.length - removeIndex;
};


console.log(removeElement([3,2,2,3], 3)); // 2 becasue [2,2] will be remaning
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5 becasue [0,1,3,0,4] will be remaning
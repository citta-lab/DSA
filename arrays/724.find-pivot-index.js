/** 
 * 
 * 724. Find Pivot Index  
 * 
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of 
 * the index is equal to the sum of all the numbers strictly to the index's right. 
 * 
 * If the index is on the left edge of the array, then the left sum is 0 because there 
 * are no elements to the left. This also applies to the right edge of the array. 
 * 
 * Return the leftmost pivot index. If no such index exists, return -1. 
 * 
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3 ( index )
 * Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 * Right sum = nums[4] + nums[5] = 5 + 6 = 11
 * 
 * Input: nums = [-1,-1,-1,-1,-1,0]
 * Output: 2 ( index )
 * 
 * leetcode-question:724
 * leetcode:https://leetcode.com/problems/find-pivot-index/
 * video:https://www.youtube.com/watch?v=u89i60lYx8U
 * 
 * HINT: 
 * - Having total sum will help us calculate RIGHT sum when we traverse from left to right with
 * having running leftSum.
 * 
 * */

/** Time: O(n) and Space: O(1) */
var pivotIndex = function(nums) {
    
    /** DONT: we could have two pointers leftSum, rightSum and start at i=0, i+1
    then keep comparing leftSum and rightSum by adding rest of left side and right
    side which will cost time: O(n^2) */
    
    /** YES: Instead we can calculate the TOTAL SUM, and keep LEFTSUM and everytime we
    move right we check if TOTAL_SUM - LEFT_SUM - nums[i] === LEFT_SUM. i.e total
    sum -left sum and possible privot is equal to right side total */
    
    /** Step 1: Cal total sum */
    let sum = 0;
    nums.forEach((num) => {
        sum += num
    })
    

    /** Step 2: keep left running sum */    
    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        let num = nums[i]; /** <-- possible pivot number */
        
        /** calculate rightSum */ 
        let rightSum = sum - leftSum - num; 
        if(rightSum === leftSum){
            return i;
        }
        
        /** at last add num to running leftSum */
        leftSum += num;
    }
    
    return -1;
};

let nums = [1,7,3,6,5,6]
console.log(pivotIndex(nums)); //3

nums = [-1,-1,-1,-1,-1,0]
console.log(pivotIndex(nums)); // 2
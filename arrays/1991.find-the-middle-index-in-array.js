/**
 * 1991. Find the Middle Index in Array
 * 
 * same as 724. Find Pivot Index 
 * 
 * Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).
 * A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
 * If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
 * Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
 * 
 * Example:
 * Input: nums = [2,3,-1,8,4]
 * Output: 3
 * 
 */

 var findMiddleIndex = function(nums) {
    
    let totalSum = nums.reduce((a,b) => a+b, 0);
    
    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        
        let num = nums[i];
        if(leftSum === totalSum - leftSum - num){
            return i; 
        }
        
        leftSum += num;
    }
    
    return -1
};
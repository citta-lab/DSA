/** 
 * 
 * 16. 3Sum Closest  
 * 
 * Given an integer array nums of length n and an integer target, find three integers in nums such
 * that the sum is closest to target. Return the sum of the three integers. You may assume that 
 * each input would have exactly one solution. 
 * 
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2 
 * 
 * Input: nums = [0,1,2], target = 3
 * Output: 3
 * 
 * leetcode-question:16
 * leetcode:https://leetcode.com/problems/3sum-closest/
 * ref: 
 * 
 * Hint
 * - Time: O(n^2) and Space: O(logn) or O(n) based on quick or merge sort
 * - THREE pointer with left and right starting at i=1 and i=nums.length-1
 * - need to SORT 
 * - check for duplicate adjacent numbers when i > 0. i.e if(i>0 && nums[i] === nums[i-1]){ continue}
 * - calculate sum of three
 * - check if absolute value of sum-target < result-target if so update result = sum
 * - move right pointer one less if sum > target
 * - move left pointer one more if sum < target
 * - if sum === target return sum
 * 
 * FOLLOW-UP:
 * if we use SELECTION SORT we could have improved space complexity to O(1) but will be slow
 * and Time complexity still be O(n^2).
 * 
 * */

 /** Time: O(n^2) and Space: O(logn) or O(n) based on quick or merge sort */
 var threeSumClosest = function(nums, target) {
    
    nums.sort((a,b) => a-b);
    
    let closestValue = Infinity;
    
    for(let i=0; i<nums.length; i++){
        
        let first = i;
        let left = i+1;
        let right = nums.length-1;
        
        /** ignore any duplicates next to each other */
        if(i > 0 && nums[i] === nums[i-1]){
            continue
        }
        
        while(left < right){
            
            let sum = nums[first] + nums[left] + nums[right];
            
            let sumDiff = sum - target;
            let closestValueDiff = closestValue - target;
            
            if(Math.abs(sumDiff) < Math.abs(closestValueDiff)){
                closestValue = sum; // <--- *** IMP *** it is SUM 
            }
            
            if(sum > target){
                right--
            }else if (sum < target){
                left++
            }else {
                return sum;
            }
            
        }
    }
    
    return closestValue;
};
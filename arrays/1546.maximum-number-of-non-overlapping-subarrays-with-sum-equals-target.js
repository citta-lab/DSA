/**
 * 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
 * 
 * Given an array nums and an integer target, return the maximum number of non-empty
 * non-overlapping subarrays such that the sum of values in each subarray is equal to target.
 * 
 * Input: nums = [1,1,1,1,1], target = 2
 * Output: 2
 * 
 * Input: nums = [-1,3,5,1,4,2,-9], target = 6
 * Output: 2
 * 
 * leetcode-question:1546
 * leetcode:https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/
 * 
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - Similar to TWO sum problem 
 * - if we can store the previous sum in map, and if we ever find sum - target in map then
 * we can say we found the elements which makes TARGET
 */

 var maxNonOverlapping = function(nums, target) {
    
    let seen = new Set();
    
    let sum = 0;
    let count = 0;
    
    // example: [-1,3,5,1,4,2,-9]
    for(let num of nums){
        
        sum += num;
        
        /** if we found the sum or seen the diff we reset */
        // when 8-6 = 2, we find 2 in seen, when 4+2 =6 then sum === target
        if(sum === target || seen.has(sum-target)){
            count++
            sum = 0;
            seen.clear();
            continue;
        } 
        
        seen.add(sum);
        // console.log(seen); // Set(3) { -1, 2, 7 }, then Set(1) { 4 }, then Set(1) { -9 }
    }
    
    return count
};
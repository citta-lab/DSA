/**
 *  300. Longest Increasing Subsequence 
 * 
 * Given an integer array nums, return the length of the longest strictly increasing 
 * subsequence. A subsequence is a sequence that can be derived from an array by deleting 
 * some or no elements without changing the order of the remaining elements.
 *  
 * For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. 
 * 
 * 
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * 
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 * 
 * leetcode-question:300
 * leetcode:https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 * BLIND: 64 (64/75)
 * 
 * Hint
 * - DP problem Time:O(N^2) and Space:O(N)
 * - Initialize dp array of size nums and with 1 ( min distance is 1)
 * - For loops to traverse every element behind ith element where i will start at 1
 * - Only update dp array if current num is greater than previous ( increasing )
 * - dp[i] should always get updated with max possible length from previous
 * -- i.e let max = Math.max(dp[i], dp[j]+1);
 * */

 /** Time:O(N^2) and Space:O(N) */
 var lengthOfLIS = function(nums) {
    
    /** 
    step 1: base condition, default its of length 1 
    at any given i'th element */
    let dp = new Array(nums.length).fill(1);
    
    /** 
    step 2: 
    find all previous dp values with respect to i
    and calculate if we have max value if not add 
    one to current dp value at i'th position 
    */
    
    for(let i=1; i<nums.length; i++){
        for(let j=0; j<i; j++){
            
            /** we only need do this if it is INCREMENTING */
            if(nums[i] > nums[j]){
                let max = Math.max(dp[i], dp[j]+1);
                dp[i] = max;
            }
        }
    }
    
    /** return max we length we found */
    return Math.max(...dp)
};
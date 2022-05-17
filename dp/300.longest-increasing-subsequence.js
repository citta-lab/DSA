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
 * video: https://www.youtube.com/watch?v=cjWnW0hdF1Y
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
 * 
 * - DFS with memo
 * - Time:O(N^2) and Space:O(N)
 *
 * 
 *
 * Example: [1,2,4, 3] 
 * 
 * The idea here is that we would start from the last. Which will tell us the following,
 * - At position 3 (i.e num 3) we have only ONE choice to add value to result. i.e the 3rd
 * position item by itself. So our dp[3] = 1. 
 * - At postion 2 (i.e num 4) we have TWO choices to make. i.e adding num from the 2nd postion
 * i.e 4 and another option is adding 3rd position along with 2nd position. However later one is
 * not possible as it doesnt satisfy ( increasing subsequence num ) the condition. So our choices
 * dp[2] = 1. 
 * - At position 1, we have three choices to make. i.e adding num from position 1 it self or 
 * adding num from position 1 and 2 or adding position from 1,2,3 indexs. However we alredy have
 * choices calculated at 2 and 3rd position. so at dp[1] = Math.max(1 position, 2 position, 3rd position)
 * i.e Math.max(1, 1+dp[2], 1+dp[3]) i.e Math.max(1,2,2) i.e 2
 * so dp[1] = 2
 * - At position 0, we have 4 choices and it will be Math.max(1, 1+dp[1], 1+dp[2], 1+dp[3])
 * so it would be Math.max(1, 3, 2, 2) => 3
 *
 * Diagram: https://github.com/citta-lab/DSA/blob/main/a-assets/longest-increasing-subsequence-dfs.png
 *
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

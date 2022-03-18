/** 
 * 
 * 718. Maximum Length of Repeated Subarray  
 * 
 * Given two integer arrays nums1 and nums2, return the maximum length of a subarray that 
 * appears in both arrays. 
 * 
 * Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * Output: 3
 * 
 * Input: nums1 = [1,0,0,0,1], nums2 = [1,0,0,1,1]
 * Output: 3
 * 
 * leetcode-question:718
 * leetcode:https://leetcode.com/problems/maximum-length-of-repeated-subarray/
 * 
 * Hint:
 * - Time:O(N*M)and Space:O(N*M)
 * - DP with memoization to avoid O(N*M)^max(m,n)
 * - Bottom Up appraoch 
 * - i.e Need to initialize dp array of one size more so we can use 
 * right most column and bottom row as reference. 
 * */

 var findLength = function(nums1, nums2) {
    
    let result = 0;
    
    /** dp with one column and row more than nums1 and nums2 size */
    let dp = new Array(nums1.length+1)
    .fill(0)
    .map((row) => new Array(nums2.length+1)
    .fill(0))
    
    
    /** 
    bottom up appraoch, we use right most column and bottom most row as
    reference and use as 0 holder so we can use in calculating dp[i][j] = 
    dp[i+1][j+1].
    */
    
    for(let i=nums1.length-1; i>=0; i--){
        for(let j=nums2.length-1; j>=0; j--){
            
            /** if we find matching numbers*/
            if(nums1[i] === nums2[j]){
                dp[i][j] = dp[i+1][j+1]+1;
                
                /** helps keeping max match count */
                if(result < dp[i][j]){
                    result = dp[i][j];
                }
            }
        }
    }
    
    return result;
    
};
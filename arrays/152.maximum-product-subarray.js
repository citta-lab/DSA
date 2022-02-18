/** 
 * 
 * 152. Maximum Product Subarray
 * 
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer. 
 * A subarray is a contiguous subsequence of the array. 
 * 
 * Exaple: 
 * Input: nums = [2,3,-2,4] 
 * Output: 6 
 * Explanation: [2,3] has the largest product 6.
 * 
 * Example:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 * leetcode: https://leetcode.com/problems/maximum-product-subarray/
 * leetcode-question:152
 * video: https://www.youtube.com/watch?v=lXVy6YWFcRM
 * BLIND: 38 ( 38/75)
 *
 * Example to Run:
 * nums = [8, -4, -2, 9] 
 *
 * curMax:    1 (default)| (8, 8*1, 8*1) => 8 | (-4, -32, -32) => -4  | (-2, 64, -2*-32) => 64 | (9, 64*9, -2*9) => 576 |
 * curMin:    1 (default)| (8, 8*1, 8*1) => 8 | (-4, -32, -32) => -32 | (-2, 64, -2*-32) => -2 | (9, 64*9, -2*9) => -18 |
 
 * maxResult: 8 (initial)| (8, 8) => 8 | (8, -4) => 8 | (8, 64) => 64 | (64, 576) => 576 )
 * 
 * Hint:
 * The reason behind keeping track of max_so_far is to keep track of the accumulated product of positive numbers. 
 * The reason behind keeping track of min_so_far is to properly handle negative numbers
 * 
 * */

/** Kadanes Algorithm Time:O(N) and Space: O(1) */
var maxProduct = function(nums) {
    
    /** hence its a product we default it to 1 */
    let curMax = 1;
    let curMin = 1;
    
    /** default value to first element */
    let maxResult = nums[0];
    
    /** traverse all element and find max, min then update result */
    for(let i=0; i<nums.length; i++){
        
        let curNum = nums[i];
        
        /** temp is used so we dont use newly calcuated curMax inside curMin calculation */
        let tempMax = curNum * curMax;
        curMax = Math.max(curNum, tempMax, curNum * curMin);
        curMin = Math.min(curNum, tempMax, curNum * curMin);
        
        /** we need max, so we compare between result and curMax */
        maxResult = Math.max(maxResult, curMax);
    }
    
    return maxResult;
};

/** BRUTE FORCE Time: O(n^2) and Space: O(1) */
var maxProductI = function(nums) {
    let maxPro = -Infinity;
    for(let i=0; i<nums.length; i++){
        let acc = 1;
        for(let j=i; j<nums.length; j++){
            acc = acc * nums[j];
            maxPro = Math.max(maxPro, acc);
        }
    }
    
    return maxPro;
};

/** Dynamic Problem Time:O(n) and space: O(1) */

/** 
 * 
 * 198. House Robber  
 * 
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, the only constraint stopping you from 
 * robbing each of them is that adjacent houses have security systems connected and it will 
 * automatically contact the police if two adjacent houses were broken into on the same night. 
 * Given an integer array nums representing the amount of money of each house, return the 
 * maximum amount of money you can rob tonight without alerting the police. 
 * 
 * Input: nums = [1,2,3,1]
 * Output: 4
 * 
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * 
 * leetcode-question:198
 * leetcode:https://leetcode.com/problems/house-robber/
 * BLIND: 42 (42/75)
 * 
 * Reference: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
 * 
 * Hint:
 * - recursion with memo
 * - robber can rob from current house and skip next ( so collection current house money and go to 2 house after )
 * i.e let firstOption = nums[start] + robbery(nums, start+2)
 * - rober can go from next house i.e let firstOption = robbery(nums, start+1)
 * */

/** Time: O(n) and Space: O(n)  */
var rob = function(nums) {
    let memo = new Array(nums.length).fill(-1);
    return robbery(nums, 0, memo);
};

function robbery(nums, start, memo){
    
    if(memo[start] > -1) return memo[start]
    
    if(start > nums.length-1) return 0;
    
    let robFromCurrentHouse = nums[start] + robbery(nums, start + 2, memo);
    let robFromNextHouse = robbery(nums, start+1, memo); 
    
    let ans = Math.max(robFromCurrentHouse, robFromNextHouse);
    memo[start] = ans;
    return ans;
}


/** 
 * 
 * 377. Combination Sum IV 
 * 
 * Given an array of distinct integers nums and a target integer target, 
 * return the number of possible combinations that add up to target. 
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 * 
 * 
 * Input: nums = [1,2,3], target = 4
 * Output: 7
 * 
 * Input: nums = [9], target = 3
 * Output: 0
 * 
 * leetcode-question:377
 * leetcode:https://leetcode.com/problems/combination-sum-iv/
 * 
 * Hint:
 * - Recursion with memo ( not backtracking )
 * - use Memoization 
 * - use Map instead of []
 * - Though this is titled as Combination SUM we will be creating PERMUTATION.
 * example: [1,2,3] we will have result [1,3] as well as [3,1]. In combination
 * we TREAT [1,3] and [3,1]. 
 * - In combination, we relay on POSITION of these numbers. so we will only get
 * combination from left to right. But in permutation we need to find all
 * combination, even right to left.
 * 
 * */

 var combinationSum4 = function(nums, target) {
    
    /** if we use memo=[] we get TLE */
    let memo = new Map();
    
    function dfs(nums, target, memo){
        
        if(target === 0) return 1
        
        if(target < 0) return 0;
        
        if(memo.has(target)) return memo.get(target)
        
        let count = 0;
        for(let num of nums){
            let nextTarget = target - num;
            count += dfs(nums, nextTarget, memo);
        }
        
        memo.set(target, count);
        return count;
    }
    
    return dfs(nums, target, memo)
    
};
/**
 * 46. Permutations
 *
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * leetcode-question:46
 * leetcode: https://leetcode.com/problems/permutations/
 *
 * Hint
 * - Backtrack Appraoch here https://github.com/citta-lab/DSA/blob/main/backtracking/046.permutations.js
 * - Time: O(n!). [ Check leetcode ]  Space:O(N)
 * - Backtracking to build different permutations 
 */

var permute = function(nums) {
    let result = [];
    let visited = new Set();
    dfs(nums, visited, result)
    return result;
};

function dfs(nums, visited, result){
    
    if(visited.size === nums.length){
        result.push(Array.from(visited));
        return
    }
    
    for(let i=0; i<nums.length; i++){
        
        if(visited.has(nums[i])) continue;
        
        visited.add(nums[i]);
        dfs(nums, visited, result);
        
        visited.delete(nums[i]);
    }
    
}

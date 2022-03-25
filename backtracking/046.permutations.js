/** 
 * 
 * 46. Permutations 
 * 
 * Given an array nums of distinct integers, return all the possible permutations. 
 * You can return the answer in any order. 
 * 
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * 
 * leetcode-question:46
 * leetcode:https://leetcode.com/problems/permutations/
 * 
 * Hint:
 * - Time:
 * - Backtracking with DFS
 * - Need for loop to make combination of 3 numbers before calling DFS recursiverly 
 * - Need visited set to check 
 * */

 var permute = function(nums) {
    let result = [];
    let subset = [];
    
    let visited = new Set();
    
    function dfs(position, visited){
        
        if(position === nums.length){
            let copy = [...subset];
            result.push(copy);
            return
        }
        
        if(position > nums.length) return 
        
        for(let i=0; i<nums.length; i++){
            
            let num = nums[i];
            if(visited.has(num)) continue; 
            
            subset.push(num);
            visited.add(num);
            
            dfs(position+1, visited);
            
            subset.pop();
            visited.delete(num);
            
        }
    }
    
    dfs(0, visited);
    
    return result
};
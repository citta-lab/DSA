/** 
 * 
 * 77. Combinations 
 * 
 * Given two integers n and k, return all possible combinations of k numbers out of 
 * the range [1, n]. You may return the answer in any order.
 * 
 * Input: n = 4, k = 2
 * Output:[ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4],]
 * 
 * leetcode-question:77
 * leetcode:https://leetcode.com/problems/combinations/
 * 
 * 
 * Hint:
 * - Time: O(k*C) where is C is the combinbations formed from n. Space:O(C)
 * - If we read the problem carefully, 
 * the given n can be formed as an array from [1...n]. k is the size of subset
 * - we can apply DFS with position and whenever subset.size === k we save in result
 * - hence n ranges from 1 to 4 ( inclusive). our based condition for outof bound
 * should be `if(position > nums.length) return`
 */

 /** Time: O(k*C) where C is N!/(N-k)!*k! space:O(C) where C is N!/(N-k)!*k! */
 var combine = function(n, k) {
    let nums = [];
    for(let i=1; i<=n; i++){
        nums.push(i);
    }
    
    console.log(nums)
    
    let result = [];
    let subset = [];
    
    function dfs(position){
        
        if(position > nums.length) return 
        
        let size = subset.length; 
        if(size === k){
            let copy = [...subset];
            result.push(copy);
            return
        }
        
        subset.push(nums[position]);
        dfs(position+1);
        
        subset.pop();
        dfs(position+1)
    }
    
    dfs(0)
    return result;
};
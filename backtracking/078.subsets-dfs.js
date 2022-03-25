/** 
 * 
 * 78. Subsets 
 * 
 * Given an integer array nums of unique elements, return all possible subsets 
 * (the power set). The solution set must not contain duplicate subsets. 
 * Return the solution in any order.
 * 
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Input: nums = [0]
 * Output: [[],[0]]
 * 
 * leetcode-question:78
 * leetcode:https://leetcode.com/problems/subsets/
 * video:https://www.youtube.com/watch?v=REOH22Xwdkk
 * 
 * Hint:
 * - Bruteforce (backtracking): O(N*2^n) and Space:O(N)
 * - Not an array or permutation problem.
 * - we need to have unique subset combination by adding and removing 
 * current number.
 * - backtracking by removing the previously added number.
 * - array (subset) needs to be copied as array uses reference and if we
 * dont copy last result (i.e []) will override all values
 * 
 * Example:
 * In [1,2,3] we have 2 choices on every element. 
 * i.e 
 * At position 0 (i.e at 1)
 * - choice 1: add next number to subet i.e [] will get 2 so it subset will be [1]
 * - choice 2: add nothing i.e [] so subset will be just []
 * 
 * At position 1 (i.e at 2)
 * - choice 1a: add 2 to previous subset [1] so it will be [1,2], also
 * - choice 1b: add nothing to previous subset [1], so it will be [1]
 * Similary,
 * - choice 2a, add 2 to previous subset [] so it will be [2]
 * - choice 2b, add nothing to previous subset [], so it will be []
 * 
 * this continues ....
*/

/** Time: O(N*2^n) and Space:O(N) */
var subsets = function(nums) {
    let result =[];
    let subset = [];
    
    function dfs(position){
        
        /** we are out of bound, so return result */
        if(position >= nums.length){
            let copy = [...subset];
            result.push(copy);
            return
        }
        
        /** include current number in our calculation */
        subset.push(nums[position]);
        dfs(position+1);
        
        /** exclude current number in our calculation */
        subset.pop();
        dfs(position + 1);
    }
    
    dfs(0);
    
    return result;
};
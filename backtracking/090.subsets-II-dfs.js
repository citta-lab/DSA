/** 
 * 90. Subsets II
 * 
 * Given an integer array nums that may contain duplicates, return all possible subsets 
 * (the power set). The solution set must not contain duplicate subsets. 
 * Return the solution in any order.
 * 
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * Input: nums = [0]
 * Output: [[],[0]]
 * 
 * leetcode-question:90
 * leetcode:https://leetcode.com/problems/subsets-ii/
 * video: https://www.youtube.com/watch?v=REOH22Xwdkk ( same as 78 with slight modification)
 * 
 * Hint:
 * - Bruteforce (backtracking): O(N*2^n) and Space:O(N)
 * - Not an array or permutation problem.
 * - we need to have unique subset combination by adding and removing 
 * current number.
 * - we also need to make sure not to add duplicates so having SORTED array to begin
 * with helps while comparing like arr[i] !== arr[i+1].
 * - just before BACKTRCKING check if the next number is same, if so skip
 * - backtrack by removing the previously added number.
 * - array (subset) needs to be copied as array uses reference and if we
 * dont copy last result (i.e []) will override all values
 * 
 * IMPORTANT: 
 * Same as "78 Subset" problem but duplciates needs to be ignored 
 * 
 */

/** Time:O(N*2^n) and Space:O(N) */
var subsetsWithDup = function(nums) {
    let result = [];
    let subset = [];
    
    /** helps in comparing nums[position] !== nums[position+1] to skip duplicates */
    nums.sort()
    
    function dfs(position){
        
        /** step 3: adding to result */
        if(position >= nums.length){
            let copy = [...subset];
            result.push(copy);
            return
        }
        
        /** step 1: process by considering the current number */
        subset.push(nums[position]);   
        dfs(position+1);
        
        /** step 2: process without adding current number */
        subset.pop(); // backtrack
        // before we process next if we have same values from sorted nums we skip
        while(position+1 < nums.length && nums[position] == nums[position+1]){
            position++;
        }
        dfs(position+1);
    }
    
    dfs(0);
    
    return result;
};
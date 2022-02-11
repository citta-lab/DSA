/** 
 * 
 * 39. Combination Sum 
 * 
 * Given an array of distinct integers candidates and a target integer target, 
 * return a list of all unique combinations of candidates where the chosen numbers 
 * sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. 
 * Two combinations are unique if the frequency of at least one of the 
 * chosen numbers is different.
 * 
 * It is guaranteed that the number of unique combinations that sum up to 
 * target is less than 150 combinations for the given input. 
 * 
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * 
 * leetcode-question:39
 * leetcode:
 * video:
 * 
 * BLIND :11 (11/75)
 * 
 * Hint:
 * - backtracking 
 * - dfs which runs one with combination and one without combination 
 * 
 * 
 * 
 * */

/** time: O(2^t) where t is target as this would be the hegith of tree */
var combinationSum = function(candidates, target) {

    let result = [];
    
    function dfs(ithElement, curResult, sum){
        
        /** base : when we find the combination */
        if(sum === target){
            /** array uses reference and we are using the same curResult in rest of cal */
            let copy = JSON.parse(JSON.stringify(curResult));
            result.push(copy);
            return;
        }
        
        /** base : if we go out of bound */
        if(ithElement >= candidates.length){
            return;
        }
        
        /** base : if combination sum is more than target */
        if(sum > target){
            return;
        }
        
        /** Step 1: considering the current element in our result and updating the sum */
        curResult.push(candidates[ithElement]);
        dfs(ithElement, curResult, sum + candidates[ithElement]);
        
        /** Step 2: removing the current element from rest of the combination
        and considering from next element (i.e i+1 ) */
        curResult.pop();
        dfs(ithElement+1, curResult, sum);
    }
    
    dfs(0, [], 0);
    
    return result;
};

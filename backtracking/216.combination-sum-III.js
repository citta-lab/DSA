/** 
 * 216. Combination Sum III
 * 
 * Find all valid combinations of k numbers that sum up to n such that the 
 * following conditions are true:
 * - Only numbers 1 through 9 are used.
 * - Each number is used at most once.
 * Return a list of all possible valid combinations. 
 * The list must not contain the same combination twice, and the combinations 
 * may be returned in any order.
 * 
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * 
 * Input: k = 3, n = 9
 * Output: [[1,2,6],[1,3,5],[2,3,4]]
 * 
 * leetcode-question:216
 * leetcode:https://leetcode.com/problems/combination-sum-iii/
 * refer: https://leetcode.com/problems/combination-sum-iii/discuss/427713/Combination-Sum-I-II-III-with-Detailed-Explanation-and-Complexity-Analysis
 * 
 * Hint:
 * - Backtracking 
 * - Time: O(K * 9^k) where k is the subset size and 9 is the range from 1..9
 * - Space: O(K)
 * - K is number which says we can pick K size numbers from 1..9 range to form
 * sum which is equal to N. 
 * - every time we pick number, easy way to check is subtracting that number with
 * target N so we know in next recursion we need to find sum for N-num.
 */

 var combinationSum3 = function(k, n) {
    let result = [];
    let subset = [];
    
    function dfs(num, k, n){
        
        /** our target sum shouldn't be less than 0 */
        if(n < 0) return 
        
        /** if we every go more than our K size */
        if(subset.length > k) return
     
        /** 
        success base condition:
        we found numbers which made target to ZERO 
        and we have K sized (three) numbers in subset 
        */
        if(subset.length === k && n === 0){
            let copy = [...subset];
            result.push(copy);
            return
        }
        
        /** k can have numbers from 1 to 9 so we need to check all */
        for(let i=num; i<=9; i++){
            
            /** we need to pick numbers which will add up to n (target)*/
            let nextNumPicked = n - i;
            
            if(nextNumPicked < 0) break
            
            /** 
            now we have reduced the target by picking num in range 1..9 
            so we will check if we can make target === 0 using that.
            
            IMP: if we use num instead of i in dfs i.e dfs(num+1, k, nextNum)
            then it will result in all duplicate combination of n i.e target.
            ex: [[1,2,4],[1,3,3],[2,2,3]] instead of just [[1,2,4]] 
            */
            subset.push(i);
            dfs(i+1, k, nextNumPicked)
            
            /** backtrack to check other number */
            subset.pop();
        }
    }
    
    /** 1 is number range starts at 1 upto 9. not position */
    dfs(1, k, n)
    
    return result;
};
/**
 * 47. Permutations II
 * 
 * Given a collection of numbers, nums, that might contain duplicates, 
 * return all possible unique permutations in any order.
 * 
 * Example:
 * Input: nums = [1,1,2]
 * Output:
 * [[1,1,2],
 * [1,2,1],
 * [2,1,1]]
 * 
 * leetcode-question:47
 * leetcode:https://leetcode.com/problems/permutations-ii/
 * 
 * 
 * Hint:
 * - Backtracking :: Time:O(N!) and Space:O(N)
 * - Diff between this problem vs when nums = [1,2,3] is that, when 
 * we are handling [1,2,3] we will not have duplicates. So backtracking
 * with DFS will be okay. Refer: 046-Permutation problem.
 * - Now we need to handle duplication which we might see in decision tree.
 * - Will still use BACKTRACKING 
 * - Instead of looping on nums i.e `for(let i=0; i<nums.length; i++)` we will
 * loop on countHash.
 * - countHash will count occurance of numbers 
 * 
 */

 var permuteUnique = function(nums) {
    
    let result = [];
    let subset = [];
    
    /** 
    HashMap: 
    build count hashMap which will help us not build
    duplicate permutations while traversing the decision tree
    in backtracking - this step is not needed if the given nums
    doesnt have duplicates. i.e nums = [1,2,3] instead of [1,1,2] */
    
    let countMap = {};
    for(let num of nums){
        if(!countMap[num]) countMap[num] = 0;
        countMap[num] += 1
    }
    
    console.log(countMap); // {1:2, 2:1}
    
    function dfs(){
        
        if(subset.length === nums.length){
            let copy = [...subset];
            result.push(copy);
            return;
        }
        
        /** instead of looping for nums, we loop for countMap */
        for(let num in countMap){
            // making sure we dont cross if we dont have numbers
            if(countMap[num] > 0){
                subset.push(num);
                countMap[num] -= 1;
                
                dfs();
                
                subset.pop();
                countMap[num] += 1
            }
        }
    }
    
    dfs();
    return result
    
};
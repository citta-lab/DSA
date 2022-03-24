/** 
   40. Combination Sum II
   
   Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in 
   candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.
   Note: The solution set must not contain duplicate combinations.
   
   Input: candidates = [10,1,2,7,6,1,5], target = 8
    Output: 
    [
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
    ]
    
    Input: candidates = [2,5,2,1,2], target = 5
    Output: 
    [
    [1,2,2],
    [5]
    ]
    
    leetcode-question:40
    leetcode:https://leetcode.com/problems/combination-sum-ii/
    
    Hint:
    - Time: O(n*2^n) and Space:O(N)
    - Combination of subset and combination sum problem 
    - Important thing here is, we dont need duplicates. So sorting
      given data will help us to compare while processing 
    - base condition should check for 
    -- target === sum to add subset array to result 
    -- sum > target to return 
    -- position >= arr.length to return 
    
    */

    var combinationSum2 = function(candidates, target) {
      let result = [];
      let subset = [];

      /** helps us to compare candiates[i] with candidates[i+1] while processing right side in the tree */
      candidates.sort((a, b) => a - b);

      function dfs(position){

          /** important to check >= as array is 0 index based */
          if(position >= candidates.length) return 

          let sum = subset.reduce((a,b) => a + b, 0);
          if(sum > target) return 

          if(sum === target){
              /** important to use copy as array uses reference */
              let copy = [...subset];
              result.push(copy);
              return
          }

          /** processing left side by considering current element */
          subset.push(candidates[position]);
          dfs(position+1)

          /** processing right side by not considering current element */
          subset.pop();
          // checking for duplicates 
          while(position < candidates.length && candidates[position] === candidates[position+1]) {
              position++
          }
          dfs(position+1)
      }

      dfs(0)

      return result
};

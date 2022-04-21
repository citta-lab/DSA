/** 
 * 
 * 437. Path Sum III  
 * 
 * Given the root of a binary tree and an integer targetSum, return the number of 
 * paths where the sum of the values along the path equals targetSum. The path does
 *  not need to start or end at the root or a leaf, but it must go downwards 
 * (i.e., traveling only from parent nodes to child nodes). 
 * 
 * 
 * Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * Output: 3
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: 3
 * 
 * leetcode-question:437
 * leetcode:https://leetcode.com/problems/path-sum-iii/
 * video:https://www.youtube.com/watch?v=x87RihNvRaY
 * 
 * Hint:
 * - Bruteforce: O(n^2)
 * - Can we do DFS and add all the node values to array 
 * - Hence it's DFS node values in array are in order from Leaft to Root.
 * - we do forloop at the end of DFS to calculate if tempSum === targetSum. 
 * if yes increase count and pop last value from array.
 *
 *
 * - (Optimized) PrefixSum : O(n)
 * - All the elements in between sum up to curr_sum - (curr_sum - target) = target.
 * - Similar to preFixSum we do in continuous subarrays that sum to target.
 * */

/** Bruteforce  time:O(n^2) && space: O(n) */
var pathSum = function(root, targetSum) {
    let count = 0;
    dfs(root, targetSum, []);
    return count
    
    /** list will hold all processed nodes in DFS order */
    function dfs(root, targetSum, list){
        
        if(!root) return null
        
        /** adds root value which will be on top */
        list.push(root.val);
        
        /** process all of it's left */
        if(root && root.left){
            dfs(root.left, targetSum, list)
        }
        
        /** process all of it's right */
        if(root && root.right){
            dfs(root.right, targetSum, list)
        }
        
        /** now we go over the list from last to first( bottom up)
        and calculate if we have target sum. If yes then we increment
        and remove the last element until we reach top */
        
        let tempSum = 0;
        for(let i=list.length-1; i >=0; i--){
            tempSum += list[i];
            if(tempSum === targetSum){
                count++
            }
        }
        
        list.pop();
    }
};


/****************************************************************************
 *
 * Optimized : preFix Sum in Binary Tree
 * Time:O(N) and Space:O(N)
 *
 ****************************************************************************/

var pathSum = function(root, targetSum) {
    
    let count = 0;

    /** holds the curSum occurance in map */
    let sumMap = {};
    
    function preorder(root, curSum){
        
        if(!root) return 
        
        /** preorder hence process root and go left, right */
        curSum += root.val;
        
        if(curSum === targetSum){
            count++
        }
        
        /** 
        find if we have preFix sum has occured already. 
        i.e this will determine number of times a path with targetSum has occured until current node
        */
        let predixSum = curSum-targetSum;
        count += sumMap[predixSum] || 0
        
        /** hold the sum count for child node processing */
        if(!sumMap[curSum]) sumMap[curSum] = 0;
        sumMap[curSum] += 1;
        
        preorder(root.left, curSum);
        
        preorder(root.right, curSum);
        
        sumMap[curSum] -= 1
    }
    
    preorder(root, 0);
    
    return count
};

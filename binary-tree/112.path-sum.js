/** 
 * 
 * 112. Path Sum
 * 
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf 
 * path such that adding up all the values along the path equals targetSum. A leaf is a node with no children. 
 * 
 * leetcode : https://leetcode.com/problems/path-sum/
 * video: https://www.youtube.com/watch?v=Hg82DzMemMI 
 * 
 * Hint
 * - we can do TWO ways with using DFS. or BFS
 * - we can DECREMENT the target sum with root.val and check if we reached left and target sum is 0
 * - we can INCREMENT the sum with root.val and check if sum === target when root's left and right 
 * values are null. i.e if(sum + root.val === targetSum) return true.
 * */

 const { buildTree } = require('./helper/BinaryTree');

 var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    let diff = targetSum - root.val;
    if( root && root.left === null && root.right === null && diff === 0){
        return true; 
    } else {
        return hasPathSum(root.left, diff) || hasPathSum(root.right, diff);
    }
 }

 /****************** OR  */

 /** adding sum instead of subtracting */
var hasPathSum = function(root, targetSum) {
    return dfs(root, targetSum, 0);
};

function dfs(root, targetSum ,sum){
    
    if(!root) return false;
    
    if(root && !root.left && !root.right){
        if(sum + root.val === targetSum){
            return true
        }
    }
    
    let leftSum = dfs(root.left, targetSum, sum + root.val);
    let rightSum = dfs(root.right, targetSum, sum + root.val);
    
    return leftSum || rightSum
}

let tree = buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
console.log(hasPathSum(tree, 22));  // true

tree = buildTree([1,2,3]);
console.log(hasPathSum(tree, 5));  // false

tree = buildTree([1,2]);
console.log(hasPathSum(tree, 0)); // false

tree = buildTree([2,2,3]);
console.log(hasPathSum(tree, 5)); // true
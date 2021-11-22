/** 
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf 
 * path such that adding up all the values along the path equals targetSum. A leaf is a node with no children. 
 * 
 * leetcode : https://leetcode.com/problems/path-sum/
 * video: https://www.youtube.com/watch?v=Hg82DzMemMI 
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

let tree = buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
console.log(hasPathSum(tree, 22));  // true

tree = buildTree([1,2,3]);
console.log(hasPathSum(tree, 5));  // false

tree = buildTree([1,2]);
console.log(hasPathSum(tree, 0)); // false

tree = buildTree([2,2,3]);
console.log(hasPathSum(tree, 5)); // true
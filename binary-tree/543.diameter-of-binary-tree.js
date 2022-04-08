/** 
 *
 * 543. Diameter of Binary Tree | Max Width of Binary Tree
 *
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
 * This path may or may not pass through the root. 
 * The length of a path between two nodes is represented by the number of edges between them.
 * 
 * Input: root = [1,2,3,4,5]
 * Output: 3
 *
 * Input: root = [1,2]
 * Output: 1
 *
 * leetcode-question:543
 * leetcode:https://leetcode.com/problems/diameter-of-binary-tree/
 * similar : maxSum of binary tree
 *
 * 
 * Hint:
 * - Time:O(N) and Space:(N)
 * - Have length defined as 0 and update it when we find leftPath + rightPath more than current length
 * - have call for leftPath recursively 
 * - have call for rightPath recurively
 * - check if we find better length than 'length'
 * - return max of leftPath or rightPath + 1
 */

var diameterOfBinaryTree = function(root) {
   
    let length = 0;
    function findLongestPath(root){
    
        if(!root) return 0;

        let leftPath = findLongestPath(root.left);
        let rightPath = findLongestPath(root.right);

        length = Math.max(length, leftPath + rightPath);

        return Math.max(leftPath, rightPath) + 1

    }
    
    findLongestPath(root);
    return length;
};

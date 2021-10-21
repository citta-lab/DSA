/** 
Given the root of a binary tree, return the inorder traversal of its nodes' values. 
Input: root = [1,null,2,3]
Output: [1,3,2]

leet code :
https://leetcode.com/problems/binary-tree-inorder-traversal/ 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/** O(n) time as it takes O(n/2) * 2 times for traversing the tree ( left and right ), O(n) space */
var inorderTraversal = function(root) {
  // left, root, middle
    let arr=[];
    let val = preOrder(root, arr);
    return arr
};

const preOrder = (root, arr) => {
    root.left && preOrder(root.left, arr);
    if(root.val) arr.push(root.val);
    root.right && preOrder(root.right, arr);
}

console.log(inorderTraversal([1,null,2,3]));// [1,2,3]
console.log(inorderTraversal([]));// []
console.log(inorderTraversal([1]));// [1]



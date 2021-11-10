/** Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    /** base condition otherwise we will have empty array as TreeNode */
    if(nums.length === 0 ) return null
    
    /** remember to floor it so when 5/2 = 2.5 happens we take 2 as middle */
    let mid = Math.floor(nums.length/2);
    
    /** remember to use array value not just mid (i.e position) to build tree */
    let node = new TreeNode(nums[mid]);
    
    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid+1);
    
    node.left = sortedArrayToBST(leftArr);
    node.right = sortedArrayToBST(rightArr);
    
    return node;
};

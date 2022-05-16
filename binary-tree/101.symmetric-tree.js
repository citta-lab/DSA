/**
 * 101. Symmetric Tree
 *
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * 
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *  
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 * leetcode-question:101
 * leetcode: https://leetcode.com/problems/symmetric-tree/
 *
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - Need to have helper method which will take left and right node
 * - But start with root,root as left and right 
 * - check if left === null && right == null as it is TRUE 
 * - check if left === null || right === null then it is FALSE as one is null
 * - check if left.val === right.val && isSame(left.left, right.right) && isSame(left.right, right.left)
 */
 
var isSymmetric = function(root) {
    return isSame(root, root);
};

function isSame(left, right){
    
    /** if we are at the tail, then we have null so it matches */
    if(!left && !right) return true;
    
    /** if one of them is null but not other */
    if(!left || !right) return false;
    
    /** if values are same and it's left, right are also same*/
    return left.val === right.val && isSame(left.left, right.right) && isSame(left.right, right.left);

}

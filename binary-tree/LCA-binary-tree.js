/** 
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * leetcode : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *  */

 var lowestCommonAncestor = function(root, p, q) {

    /** base case */
    if(!root) return null;
 
    /** if either of them are equal to root then root is the common parent */
    if(root === p || root === q) return root;
 
    /** similar to BST we send left and right part */
    let leftSide = lowestCommonAncestor(root.left, p, q);
    let rightSide = lowestCommonAncestor(root.right, p, q);
 
    /** if both came back with result then root is the parent */
    if(leftSide && rightSide) return root;
 
    /** hence both left and right didnt come back true, one side must have both p and q */
    return leftSide ? leftSide : rightSide;
};

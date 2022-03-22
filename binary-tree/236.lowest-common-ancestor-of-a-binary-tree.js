/** 
 * 
 * 236. Lowest Common Ancestor of a Binary Tree
 * 
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * 
 * leetcode-question:236
 * leetcode : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * BLIND: 54 (54/75)
 * 
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - This is BINARY TREE not binary search tree 
 * - If give p OR q equals to root then ROOT must be the ancestor 
 * - we cant check if we need to go left or right rather we will call recursion on both
 * - left = LCA(root.left, p, q)
 * - right = LCA(root.right, p, q)
 * - we need to hold left and right value rather returning directly as we need to check
 * if both P and Q exists 
 * - if left and right has node then root must be ancestor 
 * - if left has value then left must be ancestor (ex: 4 is child of 5  and p=5, q=4
 * then 5 is parent)
 * - if right has value then right must be ancestor
 *
 *  */

 /** Time:O(N) and Space:O(N) */
 var lowestCommonAncestor = function(root, p, q) {

    /** base case */
    if(!root) return null;
 
    /** if either of them are equal to root then root is the common parent */
    /** if p and q are values not nodes then if(root.val === p || root.val === q) return root; */
    if(root === p || root === q) return root;
 
    /** similar to BST we send left and right part */
    let leftSide = lowestCommonAncestor(root.left, p, q);
    let rightSide = lowestCommonAncestor(root.right, p, q);
 
    /** if both came back with result then root is the parent */
    if(leftSide && rightSide) return root;
 
    /** hence both left and right didnt come back true, one side must have both p and q */
    return leftSide ? leftSide : rightSide;
};

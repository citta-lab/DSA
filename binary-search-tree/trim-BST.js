/** 
 * Given the root of a binary search tree and the lowest and highest boundaries as low and high, 
 * trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change
 *  the relative structure of the elements that will remain in the tree (i.e., any node's descendant
 *  should remain a descendant). It can be proven that there is a unique answer. Return the root of
 *  the trimmed binary search tree. Note that the root may change depending on the given bounds. 
 * 
 * leetcode: https://leetcode.com/problems/trim-a-binary-search-tree/
 * */

 const { buildTree } = require('./helper/BinaryTree');
 
 /** O(N) time becase we might have to traverse all the nodes and O(N) space */
 var trimBST = function(root, low, high) {
    if(!root) return null;
    
    /** 
     hence it a BST, if the root.val < low then root.left will be lesser than current root.val
     so we move to right. Similary, if root.val > high, then if we move to right of root it will
     be more so we move to left */
    if(root && root.val < low){
        return trimBST (root.right, low, high);
    }else if(root && root.val > high){
        return trimBST (root.left, low, high);
    }
    
    let left = root && trimBST (root.left, low, high);
    let right = root && trimBST (root.right, low, high);
    
    root.left = left;
    root.right = right;
    
    return root;
};

let tree = buildTree([1,0,2]);
console.log(trimBST(tree, 1, 2)); // [1,null,2]

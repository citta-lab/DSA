/**
 * 285. Inorder Successor in BST
 * 
 * Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree, return null.
 * The successor of a node p is the node with the smallest key greater than p.val.
 * 
 * leetcode-question:285
 * leetcode:https://leetcode.com/problems/inorder-successor-in-bst/
 * 
 * Hint:
 * - Use BS in this tree
 * - Time:(logn) and Space:O(1)
 * - root of the p node value should be greater in inorder
 */

 var inorderSuccessor = function(root, p) {
    let successor = null;
     
    while(root){
        if(p.val >= root.val){
            root = root.right;
        }else{
            if(p.val < root.val) successor = root;
            root = root.left;
        }
    }
     
   return successor;
 };
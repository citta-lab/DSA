/** 
   
   98. Validate Binary Search Tree
   
   Given the root of a binary tree, determine if it is a valid binary search tree (BST).

    A valid BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
    
    Input: [2,1,3]
    Output: true
    
    Inout: [5,1,4,null,null,3,6]
    Output: false
    
    Input: [2,2,2]
    Output: false
    
     Input: [1,1]
    Output: false
    
     Input: [1]
    Output: true
    
    leetcode-question:98
    leetcode:https://leetcode.com/problems/validate-binary-search-tree/
    video: https://www.youtube.com/watch?v=s6ATEkipzow
    
    BLIND: 25 (25/75)
*/


const { buildTree} = require('./helper/BinaryTree');

/** 
 * 
 * O(N) time as we need to traverse all nodes
 * O(N) space as we will store all nodes
 * In ORDER ( left-root-right )
 */
var isValidBST = function(root) {
    let left = -Infinity;
    let right = Infinity;
    
    return valid(root, left, right);
};

function valid(root, left, right){
    
    if(!root) return true;
    
    if(!(root.val < right && root.val > left)){
        return false;
    }
    
    let leftNode = valid(root.left, left, root.val);
    let rightNode = valid(root.right, root.val, right);
    
    return leftNode && rightNode
    
}

let node = buildTree([5,2,6,1,3]);
console.log(validateBST(node)); // true

node = buildTree([1,2,3,4,5,6]);
console.log(validateBST(node)); // false

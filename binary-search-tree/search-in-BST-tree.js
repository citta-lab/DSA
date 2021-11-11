
/** 
You are given the root of a binary search tree (BST) and an integer val. 
Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
If such a node does not exist, return null. 

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

leetcode: https://leetcode.com/problems/search-in-a-binary-search-tree/

*/

/** Using Binary Search ( Iterative ) */
/** O(lon n) time and O(1) space */
var searchBST = function(root, val) {
    let cur = root;
    while(cur){
        if(cur.val === val) return cur;
        if(cur && val < cur.val ) cur = cur.left;
        if(cur && val > cur.val ) cur = cur.right;
    }
    
    return null;
};


/** Using Binary Search ( Recursion ) */
/** O(lon n) time and O(log n ) space */
var searchBST = function(root, val) {
    let cur = root;
    if(!cur) return null; /** need to make sure we return null if root is null */
    if(cur && cur.val === val) return cur;
    if(cur && val < cur.val) return searchBST(cur.left, val);
    if(cur && val > cur.val) return searchBST(cur.right, val);
};


/** Using Pre Order ( Iterative ) */
var searchBSTPreOrder = function(root, val) {
    let cur = root;
    let stack = [];
    
    stack.push(cur);
    while(stack.length){
        let node = stack.pop();
        if(node && node.val === val) return node;
        
        if(node && val < node.val) stack.push(node.left);
        if(node && val > node.val) stack.push(node.right);
    }
    return null
};


/** Using InOrder ( not efficent as we couldn't split the tree left or right like Binary Search or PreOrder */
var searchBSTInOrder = function(root, val) {
    let cur = root;
    let stack = [];
    
    while(cur || stack.length){
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        
        let node = stack.pop();
        if(node.val === val) return node;
        
        cur = node.right
    }
    
    return null
};

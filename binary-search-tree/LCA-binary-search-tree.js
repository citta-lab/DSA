/** 

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. 
leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
youtube: https://www.youtube.com/watch?v=gs2LMfuOR9k
*/ 


/** BINARY SEARCH ( ITERATIVE ) */

/** O(log N) time and O(1) space AND O(N) time and O(1) space for worst */
var lowestCommonAncestor = function(root, p, q) {
    let cur = root;
    
    let pVal = p.val;
    let qVal = q.val;
    
    while(cur){
     
        let nodeVal = cur.val;
        
        /** check if values are at left or right, if not then root must be the parent */
        if(pVal < nodeVal && qVal < nodeVal ){
           cur = cur.left;   
        } else if(pVal > nodeVal && qVal > nodeVal) {
           cur = cur.right;   
        } else {
           return cur;
        }
        
    }
    
    return null;
};



/** BINARY SEARCH ( RECURSION ) */

/** best case: O(log N) time and O(log N) space AND O(N) time and O(N) space for worst */
var lowestCommonAncestor = function(root, p, q) {
   return helper(root, p, q);
};

const helper = (root, p, q) => {
 
    let nodeVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    if( pVal < nodeVal && qVal < nodeVal ) return helper(root.left, p, q);
    if( pVal > nodeVal && qVal > nodeVal ) return helper(root.right, p, q);
    return root;
    
}

/** 
 * 
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. 
 * 
 * leetcode:235
 * leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * video: https://www.youtube.com/watch?v=gs2LMfuOR9k
 * BLIND: 53 (53/75)
 * 
 * Hint:
 * - Time:O(N) and Space:O(N) but in ITERATIVE Space:O(1)
 * - checking if root.val === p && root.val === q will work if and only p,q values
 * are following the BST pattern exa: p=2, q=8. If we had p=8 and q=2 then having 
 * this check will act as BOTTLE NECK. so we SHOUDN't comapre this rather check for
 * left and right side.
 * - if p & q less than root then go left
 * - if p & q more than root then go right
 * - else return root
*/ 


/** BINARY SEARCH ( RECURSION ) */

/** best case: O(log N) time and O(log N) space AND O(N) time and O(N) space for worst */
var lowestCommonAncestor = function(root, p, q) {
    
   if(!root) return root;
   
   if(root === p || root === q) return root;
   
   if(p.val <= root.val && q.val <= root.val){
       return lowestCommonAncestor(root.left, p, q);
   }else if (p.val >= root.val && q.val >= root.val){
       return lowestCommonAncestor(root.right, p, q);
   }else{
       return root;
   }
};

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





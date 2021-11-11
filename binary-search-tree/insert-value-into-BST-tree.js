/** 
You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

leetcode: https://leetcode.com/problems/insert-into-a-binary-search-tree/

*/

/** given tree node */
class TreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



/** O(log n) time and O(1) space
var insertIntoBST = function(root, val) {
    
    /** base case if root itself is null, then we insert value and send it */
    if(!root) return new TreeNode(val)
    
    /** 
    `pre` : helps in keeping track of the parent node, so at the end we can 
    simply add new node to left or right based on value < pre.val or value > pre.val */
    let cur = root;
    let pre = null; 
    
    while(cur){
     /** move left if value is less than cur */
     if( cur && val < cur.val ) {
         pre = cur;
         cur = cur.left;
     }
        
     /** move right if value is greater than cur */   
     if( cur && val > cur.val ) {
         pre = cur;
         cur = cur.right;
     }
        
     /** at this point our current will be null as we exhausted all left and right, reached the tip */
     /** MAKE use of 'parent' pre now */   
     if(!cur && val < pre.val) pre.left = new TreeNode(val);
     if(!cur && val > pre.val) pre.right = new TreeNode(val);
    }
    
    return root;
};

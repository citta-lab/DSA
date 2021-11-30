/** 
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.

leetcode: https://leetcode.com/problems/delete-node-in-a-bst/
*/

var deleteNode = function(root, key) {
    
    if(!root) return null;
    
    /** STEP 1: Hence BST, if key value is less than root then it KEY must be in left side */
    if(root.val > key){
        root.left = deleteNode(root.left, key);  
        return root;
    }
    
    /** STEP 2: Hence BST, if key value is greater than root then it KEY must be in right side */
    if(root.val < key){
        root.right = deleteNode(root.right, key);
        return root;
    }
    
    /** STEP 3: if the current root matched with key then we need to delete the root value and replace with right value to keep the BST structure intact */
    if(root.val === key){
     
        /** STEP 3.1: if we are at the left node */
        if(root.left === null && root.right === null){
          root = null;
          return root;
        }
        
        /** STEP 3.2: if we dont have left side, then we just point root to it's right */
        if(root && root.left === null) {
          root = root.right;
          return root;
        } 
        
        /** STEP 3.3 if we dont have right side, then we just point root to its left */
         if(root && root.right === null) {
          root = root.left;
          return root;
        } 
        
        /** STEP 3.4 if root has left and right child */
        if(root && root.right && root.left){
        
          // find the next smallest from rightside, so our left side still obeys BST 
          let minNode = replaceWithRightsLeftMost(root);
          root.val = minNode.val;
          
          // now we need to delete the least node we used to replace root
          root.right = deleteNode(root.right, minNode.val);
          return root;
        } 
    }
    
    return root;
};

const replaceWithRightsLeftMost = (node) => {
    node = node.right;
    while(node && node.left){
     node = node.left;   
    }
    
    return node;
};


/** 
   
     226. Invert Binary Tree
     
     Given the root of a binary tree, invert the tree, and return its root.
     
     Input: root = [4,2,7,1,3,6,9]
     Output: [4,7,2,9,6,3,1]
     
     Input: root = [2,1,3]
     Output: [2,3,1]
     
     Input: root = []
     Output: []
     
     leetcode-question:226
     leetcode:https://leetcode.com/problems/invert-binary-tree/
     BLIND: 51 (51/75)
     
 */

 /** time: O(N) and space:O(N) */
var invertTree = function(root) {
    return invert(root)
};

function invert(root){
    if(!root) return root;
    
    let left = invert(root.left);
    let right = invert(root.right);
    
    root.left = right;
    root.right = left;
    
    return root;
}


/**** ITERAVTIVE ***/
/** time: O(N) and space:O(N) */
var invertTree = function(root) {
    
    if(!root) return root
    
    let stack = [root];
    while(stack.length){
        let node = stack.pop();
        
        let temp = node.left;
        node.left = node.right;
        node.right = temp; 
        
        if(node && node.left) stack.push(node.left);
        if(node && node.right) stack.push(node.right);
    }
    
    return root
};

/** 
In a binary tree, a lonely node is a node that is the only child of its parent node.
The root of the tree is not lonely because it does not have a parent node.
Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. 
Return the list in any order.

Input: root = [1,2,3,null,4]
Output: [4]
Explanation: Light blue node is the only lonely node.
Node 1 is the root and is not lonely.
Nodes 2 and 3 have the same parent and are not lonely.
*/

/** O(N) time and O(N) space as worst case */
var getLonelyNodes = function(root) {
    let queue = [root];
    let result = [];
    
    while(queue.length){
     let node = queue.shift();
     
     if(node){
        if(!node.left && node.right) {
           result.push(node.right.val)
        }else if (node.left && !node.right){
           result.push(node.left.val)   
        }
     }
        
      if(node && node.left) queue.push(node.left);
      if(node && node.right) queue.push(node.right);
    }
    
    return result;
};

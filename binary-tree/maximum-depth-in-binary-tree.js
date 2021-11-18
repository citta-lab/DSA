/** 
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

leetcode: https://leetcode.com/problems/maximum-depth-of-binary-tree/

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = []
Output: 0
*/

/** O(N) time and O(N) space from queue */
/** BFS with level order */
var maxDepth = function(root) {
    
    if(!root) return 0;
    
    let queue = [root];
    let depth = 0;
    
    while(queue.length){
      let size = queue.length;
    
      for(let i=0; i< size; i++){
        let node = queue.shift();
        if(node && node.left) queue.push(node.left);
        if(node && node.right) queue.push(node.right);   
      }
        
      depth++
    }
    
    return depth
};


/** 
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

leetcode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
leetcode-question:104

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

/** OR RECURSION */
/** if the given tree is like then 
 *       0         depth At 0 = Max(maxDepth(1), maxDepth(2)) + 1 => Max(1, 2)+1 = 3
 *     /   \     
 *    1     2      depth At 1 = Math(maxDepth(0), maxDepth(0)) + 1 => 1
 *         / \     depth At 2 = Math(maxDepth(3), maxDepth(4)) + 1 => Max(1,1)+1 = 2;
 *        3   4    
 *                 depth At 3 = Math(maxDepth(0), maxDepth(0)) + 1 => 1;
 *                 depth At 4 = Math(maxDepth(0), maxDepth(0)) + 1 => 1;
 * 
 * 
 */
var maxDepth = function(root) {
  if(!root) return 0;
  
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  
  let depth = Math.max(left, right) + 1;
  
  return depth;
};



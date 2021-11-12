
/** 
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along 
 * the shortest path from the root node down to the 
 * nearest leaf node. Note: A leaf is a node with no 
 * children. 
 * 
 * Input: root = [3,9,20,null,null,15,7]
   Output: 2
 * 
 * leet code: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * 
 * Hint: 
 * Below appraoch is done in DFS manner and we will visit until the end
 * of the node first, then go to right. However if we would have choosen BFS then
 * in best case scernario ( when tree is not balanced ) we could have reduced the
 * time to O(N/2) as we are traversing by level and if we find the leaf node then 
 * that could be the min.
 * 
 * */


const { buildTree } = require('./helper/BinaryTree');

/** O(n) time and O(n) space */
var minDepth = function(root) {
    
    if(!root) return 0;
    
    let minDepth = Infinity;
    let cur = root;
    
    /** pre order way */
    let stack = [];
    /** key is to store depth along with node in stack */
    stack.push([1, cur]);
    
    while(stack.length){
        let pair = stack.pop();
        
        let [depth, node] = pair;
        console.log(" Node : "+node.val+ " depth : "+depth)
        if( node && !node.left && !node.right){
            /** cal only when we know we are at leaf, but we need to wait until we finish both side so no early return */
            minDepth = Math.min(depth, minDepth);
            console.log(' node : '+node.val+ ' minDepth : '+minDepth)
        } else {
            /** either left or right node still exist */
            depth++;
            if(node.left) stack.push([depth, node.left]);
            if(node.right) stack.push([depth, node.right]);
        }
    }
    
    return minDepth;
    
}

/** Note : Refer leetcode for test as my buildTree might have problem while constructing
 * a tree and it gives in correct depth when tested. However above code works fine in 
 * leet code
 */
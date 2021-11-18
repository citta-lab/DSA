/**
 *  Given the root of a binary tree, the value of a target node target,
 *  and an integer k, return an array of the values of all nodes that have a distance k 
 * from the target node.You can return the answer in any order. 
 * 
 * leetcode: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
 * Output: [7,4,1]
 * Explanation: The nodes that are a distance 2 from the target 
 * node (with value 5) have values 7, 4, and 1.
 * */

const { buildTree } = require('./helper/BinaryTree');

 var distanceK = function(root, target, k) {
    /** STEP 1: Get root and parent node mapping */
    let parentMap = new Map();
    dfs(root, null, parentMap);
    
    /** STEP 2: Construct visited to not vistt same nodes when accessing parent node */
    let visited = new Set();
    visited.add(target); // <--- IMP adding target not root
    
    /** STEP 3: BFS with level order to find the nodes in each level (based on k) */
    let queue = [target];
    let distance = 0;
    
    let result = [];
    while(queue.length){
        let size = queue.length; 
        for(let i=0; i<size; i++){
            
            let node = queue.shift();
           
            if(node && distance === k){
                result.push(node.val);
            }
            
            if(node) visited.add(node);
            
            if(node && !visited.has(node.left)) queue.push(node.left);
            if(node && !visited.has(node.right)) queue.push(node.right);
            
            /** Step 3.1: hence we only added left/right now we need to add parent if its not visited */ 
            let parentNode = parentMap.get(node);
            if(parentNode && !visited.has(parentNode)) queue.push(parentNode)
        }
        
        distance ++;
    }
    
    return result;
};


/** DFS to build mapping between root node and parent node */
const dfs = (root, parent, map) => {
    if(!root) return null;
    
    if(root){
        map.set(root, parent)
        if(root.left) dfs(root.left, root, map);
        if(root.right) dfs(root.right, root, map);
    }
 
}

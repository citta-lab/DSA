/**
 * 
 * 113. Path Sum II
 * 
 * Given the root of a binary tree and an integer targetSum, 
 * return all root-to-leaf paths where the sum of the node values in the path 
 * equals targetSum. Each path should be returned as a list of the node values, 
 * not node references. A root-to-leaf path is a path starting from the root 
 * and ending at any leaf node. A leaf is a node with no children.
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22 
 * Output: [[5,4,11,2],[5,8,4,5]]
 * 
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 * 
 * leetcode-question:113
 * leetcode:https://leetcode.com/problems/path-sum-ii/
 * 
 * Hint:
 * - Simialar to Path Sum problem. Instead of returning true/false we just call dfs
 * - Have two array, one holds all nodes while traversing and second one only holds
 * path nodes when sum meets targetSum.
 * - we also need running sum. 
 * - dfs(root, targetSum, sum, pathNodes, pathList);
 * - we will need to pop() last element from pathNodes as backtrack to go right from
 * previous rootnode.
 */

 var pathSum = function(root, targetSum) {
    let pathList = [];
    let pathNodes = [];
    dfs(root, targetSum, 0, pathNodes, pathList);
    return pathList
};

function dfs(root, targetSum, sum, pathNodes, pathList){
    
    if(!root) return ;
    
    /** we will keep adding nodes to this array so if we do find
    target sum at the end, we can simplay add this to pathList */
    
    pathNodes.push(root.val);
    
    /** 
      if we reached leaf node and sum equals to target, 
      we copy all pathNodes to pathList.
    */
    if(root && !root.left && !root.right){
        if(sum + root.val === targetSum){
            pathList.push([...pathNodes]);
        }
    } 
    
    dfs(root.left, targetSum, sum + root.val, pathNodes, pathList);
    dfs(root.right, targetSum, sum + root.val, pathNodes, pathList);
    
    /** 
    this will remove nodes from bottom one by one and reaches all
    the way uptp root, then let root go right and starts popping back
    
    - also helpful to remove previously added node when sum
    doesnt match the target sum
    */
    pathNodes.pop();
}



/********************************************************************************
 *
 *    Same as ABOVE, but using BACKTRACKING template ( similar to combination sum )
 *
 *
 *******************************************************************************/

var pathSum = function(root, targetSum) {
    
    let nodePath = [];
    let nodeList = [];
    
    function dfs(root){
        
        if(!root) return 
        
        nodePath.push(root.val);
        
        if(root && !root.left && !root.right){
            let sum = nodePath.reduce((a,b) => a+b, 0);
            if(sum === targetSum){
                let copy = [...nodePath];
                nodeList.push(copy);
            }
        }
        
        dfs(root.left);
        dfs(root.right);
        
        nodePath.pop();
    }
    
    dfs(root)
    
    return nodeList;
};

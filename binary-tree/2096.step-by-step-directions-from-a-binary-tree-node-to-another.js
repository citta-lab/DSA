/** 
 * 
 * 2096. Step-By-Step Directions From a Binary Tree Node to Another  
 * 
 * You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value 
 * from 1 to n. You are also given an integer startValue representing the value of the start node s, 
 * and a different integer destValue representing the value of the destination node t. 
 * Find the shortest path starting from node s and ending at node t. 
 * Generate step-by-step directions of such path as a string consisting of only the 
 * uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction: 
 * 
 * 'L' means to go from a node to its left child node.
 * 'R' means to go from a node to its right child node.
 * 'U' means to go from a node to its parent node.
 * 
 * Return the step-by-step directions of the shortest path from node s to node t.
 * 
 * Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
 * Output: "UURL"
 * 
 * Input: root = [1,null,10,12,13,4,6,null,15,null,null,5,11,null,2,14,7,null,8,null,null,null,9,3]
 * startValue = 6, destValue = 15
 * Output: "UURR"
 * 
 * leetcode-question:2096
 * leetcode:https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/
 * ref: https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/discuss/1613071/Idea-Explained-oror-LCA-Tree-Traversal-and-Backtracking-oror-C%2B%2B-Clean-Code
 * 
 * Hint:
 * - we cannot go from bottom to common parent. So first we need to find common parent.
 * - write helper function to find common parent for start and dest i.e (LCA)
 * - write DFS which will find path from just found PARENT (LCA) to start (with backtrack) by adding L
 * - write DFS which will find path from just found PARENT (LCA) to dest (with backtrack) by adding R
 * - reverse the LEFT traversed path to U and right paths should be correct
 * - return leftPaths and rightPaths by doing join('').
 * */

 var getDirections = function(root, startValue, destValue) {
   
    /** step 1: we need to know LCA (common parent of start / dest ) */
    let parent = getLCA(root, startValue, destValue);
    
    /** step 2: find dfs traversal for start, dest from parent */
    let parentToStart = [];
    let parentToDest = [];
    DFS(parent, parentToStart, startValue);  // <-- imp we are passing parent as root 
    DFS(parent, parentToDest, destValue);    // <-- imp we are passing parent as root 
    
    /** step 3: modify the paths for result */
    // we need to move UP from start to LCA (parent) so we simply update L to U
    let parentToStartUpdated = parentToStart.map(path => 'U'); 
    
    // we dont need to do anything to parentToDest as its in right format
    
    // return as string
    return parentToStartUpdated.join('') + parentToDest.join('');
};

function getLCA(root, start, dest){
    
    if(!root) return root;
    
    /** if the given node it self is a start/dest then that itself is LCA */
    if(root.val === start || root.val === dest) return root;
    
    /** find if we have start/dest in either left or  right of root */
    let left = getLCA(root.left, start, dest);
    let right = getLCA(root.right, start, dest);
    
    /** if left && right is not null then we found start/dest of root */
    if(left && right) return root;
    
    return left ? left : right;
}

function DFS(root, paths, targetNodeVal){
    
    if(!root) return false;
    
    if(root.val === targetNodeVal) return true;
    
    /** keep exloring left */
    paths.push('L');
    let left = DFS(root.left, paths, targetNodeVal);
    if(left) return true; /** we found the start/dest as targetNode */
    paths.pop();          /** we didnt find, so we need to undo (backtrack) */
    
    /** keep exploring right */
    paths.push('R');
    let right = DFS(root.right, paths, targetNodeVal);
    if(right) return true; 
    paths.pop();
    
    /** if we didnt find start/dest then added paths are useless, we return false */
    return false;
    
}
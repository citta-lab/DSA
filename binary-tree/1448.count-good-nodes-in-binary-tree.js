/**
 * 1448. Count Good Nodes in Binary Tree
 *
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 *
 * Example:
 * Input: root = [3,1,4,3,null,1,5]
 * Output: 4
 *
 * Input: root = [3,3,null,4,2]
 * Output: 3
 *
 * leetcode-question:1448
 * leetcode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 *
 * Hint:
 * - DFS Recursion | Time:O(N) and Space:O(N) from recursion stack 
 * - initialize DFS with root, parent where parent = root.val
 * - while calling DFS on left and right find max between root.val and parent 
 * - NOTE: if done iterative appraoch we could have saved space 
 */ 

/** Time:O(N) and Space:O(N) */
var goodNodes = function(root) {
    let goodCount = 0;
    
    
    function DFS(root, parent){
        
        if(!root) return 
        
        if(root.val >= parent){
            goodCount ++
        }
        
        let newParentMax = Math.max(root.val, parent)
        if(root && root.left) DFS(root.left, newParentMax);
        if(root && root.right) DFS(root.right, newParentMax);
    }
    
    DFS(root, root.val);
    return goodCount;
};

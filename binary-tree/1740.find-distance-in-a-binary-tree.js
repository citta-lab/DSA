/** 1740. Find Distance in a Binary Tree 
 * 
 * Given the root of a binary tree and two integers p and q, return the distance between 
 * the nodes of value p and value q in the tree. The distance between two nodes is the 
 * number of edges on the path from one to the other. 
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 0
 * Output: 3
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 7
 * Output: 2
 * 
 * leetcode-question:1740
 * leetcode:https://leetcode.com/problems/find-distance-in-a-binary-tree/
 * 
 * Hint
 * - Break this problem into two seperate problems 
 * - LCA to find common parent between p and q ( start and dest )
 * - use DFS on start which will return x distance ( DFS(LCAnode, p))
 * - use DFS on dest which will return y distance ( DFS(LCAnode, q))
 * return leftDFS + rightDFS
 * */

 var findDistance = function(root, p, q) {
    let parent = getLCA(root, p, q);
    let lResult = DFS(parent, p, 0);
    let rResult = DFS(parent, q, 0);
    return lResult + rResult;
};

function getLCA(root, start, dest){
    
    /** if null then nothing to do so we return root */
    if(!root) return root;
    
    /** if the given node it self is a start/dest then that itself is LCA */
    if(root.val === start || root.val === dest){
        return root;
    }
    
    /** find if we have start/dest in either left or right side of root */
    let left = getLCA(root.left, start, dest);
    let right = getLCA(root.right, start, dest);
    
    /** if left && right is not null then we found start/dest beblongs to the root */
    if(left && right){
        return root;
    }
    
    return left ? left : right;
}

function DFS(root, targetNode, distance){
    
    if(!root) return -1; // <-- IMP not to use 0
    
    if(root.val === targetNode){
        return distance
    }
    
    
    let left = DFS(root.left, targetNode, distance + 1);
    if(left >= 0) return left;
    
    let right = DFS(root.right, targetNode, distance + 1);
    if(right >= 0 ) return right;
    
    return -1; // <-- IMP not to use 0
}
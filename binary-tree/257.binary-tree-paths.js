/** 
 * 
 * 257. Binary Tree Paths
 * 
 * Given the root of a binary tree, return all root-to-leaf paths in any order. 
 * A leaf is a node with no children. 
 * 
 * 
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 * 
 * leetcode-question:257
 * lettcode: https://leetcode.com/problems/binary-tree-paths/
 *
 *
 * Hint
 * - Time:O(N) where N is nodes and Space:O(N) but if it is balanced tree then O(logN)
 * - Backtracking with DFS
 * - we need to have pathNode and pathList arrays. When we reach tail we join pathNodes with ->
 * - Similar pattern as Combination Sum
 * 
 * */
 
 /** DFS with backtracking :: Time: O(N) and Space:O(N) when tree is just one line */
 var binaryTreePaths = function(root) {
    let pathNodes = [];
    let pathList = [];
    DFS(root, pathNodes, pathList);
    return pathList
};

function DFS(root, pathNodes, pathList){
    
    if(!root) return 
    
    /** we keep adding and backtracking will help us with desired result */
    pathNodes.push(root.val)
    
    if(root && !root.left && !root.right){
        let str = pathNodes.join('->')
        pathList.push(str);
    }
    
    DFS(root.left, pathNodes, pathList);
    DFS(root.right, pathNodes, pathList);
    
    /** backtracking which will remove the nodes from bottom to create other combination */
    pathNodes.pop()
}





 /** Iterative Appraoch  */
 var binaryTreePaths = function(root) {
   
    let cur = root;
    
    let stack = [cur];
    let pathStack = [cur.val+'']; // storing it as string
    
    let result = [];
    while(stack.length){
        let node = stack.pop();
        let nodePath = pathStack.pop();
        
        if(!node.left && !node.right){
            result.push(nodePath);
        }
        
        if(node && node.left){
            stack.push(node.left);
            let path = nodePath +'->'+ node.left.val;
            pathStack.push(path);
        }
        
        if(node && node.right){
            stack.push(node.right);
            let path = nodePath +'->'+node.right.val;
            pathStack.push(path);
        }
    }
    
    return result;
    
   
};

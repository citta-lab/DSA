/** 
 * Given the root of a binary tree, return all root-to-leaf paths in any order. 
 * A leaf is a node with no children. 
 * 
 * 
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 * 
 * lettcode: https://leetcode.com/problems/binary-tree-paths/
 * 
 * */

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
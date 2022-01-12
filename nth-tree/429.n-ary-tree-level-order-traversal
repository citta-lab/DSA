/** 

429. N-ary Tree Level Order Traversal 

Given an n-ary tree, return the level order traversal of its nodes' values. Nary-Tree input serialization is represented in their 
level order traversal, each group of children is separated by the null value (See examples).

Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]

leetcode-question:429
leetcode: https://leetcode.com/problems/n-ary-tree-level-order-traversal/
*/

var levelOrder = function(root) {
    
    if(!root) return []
    
    let queue = [root];
    let result = [];
    
    while(queue.length){
        let size = queue.length;
        let level = [];
        for(let i=0; i<size; i++){
            let node = queue.shift();
            let value = node.val; 
            level.push(value);
            
            let children = node.children;
            for(let child of children){
                queue.push(child);
            }
        }
        
        result.push(level);
    }
    
    return result;
};

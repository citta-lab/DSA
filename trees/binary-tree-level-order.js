/** 
 * Given binary tree print the nodes in level order way.  
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * leet code:
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * */

const { buildTree } = require('./BinaryTree');
var levelOrder = function(root) {

    let queue = [];
    let current = root;
    
    /** prevents adding empty i.e [ ] to the queue */
    if(current) queue.unshift(current);
    
    let result = [];
    while(queue.length){
       
        let temp = [];
        let size = queue.length; 
        
        /** 
           insertion to the queue happens similar to recursion stack, so if we depend on
           queue size we are literally tracking levels of the tree. Example: First time 
           queue has size one due to root (for loop runs once ), so root element is added
           to temp, then to result. second time queue has root's left and right so size is
           two for loops ends after dequeing two nodes and continues */
        for(let i=0; i < size; i++){
            
            let node = queue.pop();
            if(node) temp.push(node.val);

            if(node && node.left) queue.unshift(node.left);
            if(node && node.right) queue.unshift(node.right);
        }
        
        result.push(temp);
    }
    
    return result;
};


/** with right push and shift methods  */
var levelOrderII = function(root) {
    
    
    let queue = [];
    let current = root;
    
    /** prevents adding empty i.e [ ] to the queue */
    if(current) queue.push(current);
    
    let result = [];
    while(queue.length){
       
        let temp = [];
        let size = queue.length; 
        
        /** 
           insertion to the queue happens similar to recursion stack, so if we depend on
           queue size we are literally tracking levels of the tree. Example: First time 
           queue has size one due to root (for loop runs once ), so root element is added
           to temp, then to result. second time queue has root's left and right so size is
           two for loops ends after dequeing two nodes and continues */
        for(let i=0; i < size; i++){
            
            let node = queue.shift();
            if(node) temp.push(node.val);

            if(node && node.left) queue.push(node.left);
            if(node && node.right) queue.push(node.right);
        }
        
        result.push(temp);
    }
    
    return result;
};




let tree = buildTree([3,9,20,15,7]);
console.log(levelOrderII(tree)); // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

tree = buildTree([3,9]);
console.log(levelOrderII(tree)); // [ [ 3 ], [ 9 ] ]

tree = buildTree([]);
console.log(levelOrderII(tree)); // []


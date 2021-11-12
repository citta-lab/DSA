/** Given the root of a binary tree, imagine yourself standing on the right side of it, retur
 * n the values of the nodes you can see ordered from top to bottom.
 * 
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 * 
 * leetcode: https://leetcode.com/problems/binary-tree-right-side-view/
 *  */

const { buildTree } = require('./helper/BinaryTree');

var rightSideView = function(root) {
    
    let cur = root;
    let queue = [];
    
    queue.push(cur);
    
    let result = [];
    while(queue.length){
        
        let size = queue.length;
        let node = null;
        for(let i=0; i < size; i++){
            node = queue.shift();
            
            if(node && node.left) queue.push(node.left);
            if(node && node.right) queue.push(node.right);
        }
        
        /** 
        this will only print right most or last element from the queue as 'shift' will pop from first pushed to last
        example here: in queue it will be [ 1 | 2,3 | 5,4 ] however we are printing once level order forloop ends 
        and hence node will be last item from that LEVEL in the queue */ 
        if(node) result.push(node.val);
    }
    
    
    return result;
};

let tree = buildTree([1,2,3,null,5,null,4]);
console.log(rightSideView(tree)); // 1,3,4

tree = buildTree([1,null,3]);
console.log(rightSideView(tree));  // 1,3

tree = buildTree([1]);
console.log(rightSideView(tree)); // 1

tree = buildTree([]);
console.log(rightSideView(tree)); // [ ]

// though 2 is on left, we can see from right as 1 doesnt have any right node
tree = buildTree([1,2]);
console.log(rightSideView(tree)); // 1,2
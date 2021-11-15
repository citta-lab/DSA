/** Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (i.e., from left to right, then right to left for the next level and alternate between). 
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 * 
 * leetcode: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * */

 const { buildTree } = require('./helper/BinaryTree');

 var zigzagLevelOrder = function(root) {
    let cur = root;
    let queue = [];
    queue.push(cur);
    
    let result = [];
    let toggel = true;
    while(queue.length){
        
        let temp = [];
        let originalQueueSize = queue.length; 
        
        
        for(let i=0; i<=originalQueueSize-1; i++){
            let node = queue.shift();
            if(node){
                if(toggel){
                    /** push this normal way */
                    temp.push(node.val);
                }else{
                    /** push this reverse way */
                    temp.unshift(node.val);
                }
            }
            
            if(node) queue.push(node.left);
            if(node) queue.push(node.right);
        }

        if(temp.length > 0) result.push(temp);
        toggel = !toggel;   
    }
    
    // console.log(result);
    return result;
};

let tree = buildTree([3,9,20,null,null,15,7]);
console.log(zigzagLevelOrder(tree));  // [ [ 3 ], [ 20, 9 ], [ null, null, 15, 7 ] ]

tree = buildTree([1]);
console.log(zigzagLevelOrder(tree));   // [[1]]

tree = buildTree([]);
console.log(zigzagLevelOrder(tree));  // []

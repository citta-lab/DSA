/** 
 * Given the root of a binary tree, return the leftmost value in the last row of the tree. 
 * 
 * HINT: it's not just traversing node.left
 * leetcode: https://leetcode.com/problems/find-bottom-left-tree-value/
 * video : https://www.youtube.com/watch?v=u_by_cTsNJA
 * */

let { buildTree } = require('./helper/BinaryTree');

 /** O(N^2) time and O(N) space for array ( see below for cleaner and O(1) space */
 var findBottomLeftValueI = function(root) {
    let cur = root;
    let queue = [cur];
    
    let result = []
    while(queue.length){
        let size = queue.length; 
        
        for(let i=0; i<size; i++){
            let node = queue.shift();
            
            if(node){
                result.push(node.val);
                queue.push(node.right); // instead of pushing left and right
                queue.push(node.left);
                
            }
        }
    }
    
    let size = result.length-1;
    return result[size]
};

/** O(N) time and O(1) space */
var findBottomLeftValue = function(root) {
    let cur = root;
    let queue = [cur];
    
    let result = null;
    while(queue.length){
        let node = queue.shift();
        result = node.val;
        if(node && node.right) queue.push(node.right);
        if(node && node.left) queue.push(node.left);
    }
    
    return result;
};

let tree = buildTree([2,1,3]);
console.log(findBottomLeftValueI(tree)); // 1
console.log(findBottomLeftValue(tree)); // 1

tree = buildTree([1,2,3,4,5,6,7,8]);
console.log(findBottomLeftValueI(tree)); // 8
console.log(findBottomLeftValue(tree)) // 8 
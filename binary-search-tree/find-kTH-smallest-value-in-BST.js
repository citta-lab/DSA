/** 
 * Given the root of a binary search tree, and an integer k, 
 * return the kth smallest value (1-indexed) of all the values
 *  of the nodes in the tree. 
 * 
 * Input: root = [3,1,4,null,2], k = 1
   Output: 1
 * 
 * leetcode: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * */

const { buildTree } = require('./helper/BinaryTree');

var kthSmallest = function(root, k) {
    let cur = root;
    let stack = [];
    let result = [];
    
    while(cur || stack.length){
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        
        let node = stack.pop();
        result.push(node.val);
        
        cur = node.right;
    }
    
    let indexPositionForKth = k - 1;
    return result[indexPositionForKth]
};

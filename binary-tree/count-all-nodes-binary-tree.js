/** Given the root of a complete binary tree, return the number of the nodes in the tree.
According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
Design an algorithm that runs in less than O(n) time complexity.

Input: root = [1,2,3,4,5,6]
Output: 6

leetcode : https://leetcode.com/problems/count-complete-tree-nodes/

IMPORTANT: 
question said COMPLETE tree. So depth of the tree on left and right is same but might not be balanced
SOLVE with O(1) space and O(log n) time

*/

/** BrutForce : O(N) time and O(log N) space */
var countNodes = function(root) {
    return root ? 1 + countNodes(root.left) + countNodes(root.right) : 0
};





/** EASY preOrder appraoch */
/** O(N) time and O(N) space */
var countNodesPreOrder = function(root) {
    
    let cur = root;
    let count = 0;
    
    if(!cur) return count;
    
    let stack = [];
    stack.push(root);
    
    while(stack.length){
        let node = stack.pop();
        count = count + 1;
        
        if(node && node.left) stack.push(node.left);
        if(node && node.right) stack.push(node.right);
    }
    
    return count;
};





/** 
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

leetcode: https://leetcode.com/problems/recover-binary-search-tree/
 */

var recoverTree = function(root) {
    let stack = [];
    /** are the nodes we will need to swap */
    let x = null, y = null; 
    /** pre to keep track if the values are ascending order */
    let prev = null;

    while(stack.length > 0 || root) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
    
        root = stack.pop();
    
        /** break point, if we get current value less than previous then its not BST and is wacked */
        if(prev !== null && prev.val > root.val) {
            y = root;
            if(!x) x = prev; // <-- first out of place node 
            // else break;  <--- helps with ealry exit. 
        }

        prev = root;
        root = root.right;
    }
    swap(x, y);
};

const swap = (nodeA, nodeB) => [nodeA.val, nodeB.val] = [nodeB.val, nodeA.val];
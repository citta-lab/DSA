/** flatten the given binary tree to linkedList without creating new node. Instead use TreeNode and it's right as
 * linkedList's next node.
 */



// given 
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/** ITERATIVE  */
/** O(n) time and space */

var flatten = function(root) {
    let current = root;
    while(current){
        /** check if left is not null so we dont process null nodes */
        if(current.left){
            /** idea is take first left of node, then go all the way to right end of the left node */
            let lastNode = current.left; 
        
            /** last right element of first left */
            while(lastNode && lastNode.right) {
                lastNode = lastNode.right; 
            }

            /** join tail of first left's right tail to node's current right */
            lastNode.right = current.right; 
            current.right = current.left; 
            current.left = null;
        }
        
        /** now we removed left, we can only go left */
        current = current.right; 
    }
};


const { buildTree} = require('../BinaryTree');

/** 
 * 
 * O(N) time as we need to traverse all nodes
 * O(N) space as we will store all nodes
 * In ORDER ( left-root-right )
 */
const validateBST = (root) => {
    let stack = [];
    let pre = -Infinity;

    /** 
     * 1. valid binary tree  will have left value < root value < right value 
     * 2. In order will print left, root and right. So at any given time value is increasing.
     * 3. If we start with lowest value for `pre` then every next value should be greater
     * or it is not binary search tree.
     * */

    let cur = root;
    while(cur || stack.length ){
        /** STEP 1: add all left nodes, including root */
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }

        /** STEP 2: now process stack */
        let node = stack.pop();

        /** STEP 2.1: popped value should be more than prev or fail it. */
        if(node.val <= pre) return false; 
        if(node.val > pre) pre = node.val; 

        /** STEP 3: process any right side of the popped node if any */
        cur = node.right;
    }

    return true;

};

let node = buildTree([5,2,6,1,3]);
console.log(validateBST(node)); // true

node = buildTree([1,2,3,4,5,6]);
console.log(validateBST(node)); // false
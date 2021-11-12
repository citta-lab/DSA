
const { buildTree } = require('../trees/BinaryTree');

/** 
 * O(N) time as we need to visit eachj node exactly once
 * O(N) space for stack
 */
const preOrderIterative = (root) => {
    let stack = [];
    let result = [];

    /** 
     * hence we need to print root first, and 
     * stack is empty we can pre-poluate the 
     * stack with root 
     * */

    stack.push(root);

    /** everything needs to run from stack so  */
    while(stack.length){
        /** step1: pre-order prints root first */
        let node = stack.pop();
        if(node) result.push(node.val);

        /** 
         * step 2:
         * pre-order needs to print left next, however we are using stack 
         * so to left to print before right we need to push right so it sits
         * below left.
         */

        if(node) stack.push(node.right);
        if(node) stack.push(node.left);
    }

    return result;
}

let root = buildTree([1,2,3,4,5,6,7]);
console.log(preOrderIterative(root)); // 1,2,4,5,3,6,7

root = buildTree([]);
console.log(preOrderIterative(root)); // []

root = buildTree([1,null,3,null,null,null,7]);
console.log(preOrderIterative(root)); // 1,3,7
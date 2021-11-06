/** 
 * Gievn tree has multiple children instead of left / right, we would need to print 
 * node values in root-left-right way. we are given a node class.
 * 
 * LeetCode: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */

/** given */
function Node(val, children) {
    this.val = val;
    this.children = children;
};

/** O(n) time and space */
const preorder = (root) => {
    let stack = [];
    let result = [];

    stack.push(root);
    while(stack.length){

        /** parent node is popped, now we need to process childrens */
        let node = stack.pop();
        if(node) result.push(node.val);

        /** 
         * children array is in an order of left, secondLeft, thirdLeft,....right 
         * pre-order needs to process left side of the root node before right. So
         * we need to push right node to the bottom and left to the top. hence reversing
         * it to have right first.
         * */
        if(node) node.children.reverse();

        if(node){
            for(let child of node.children) {
                stack.push(child);
            }
        }

    }

    return result;
}
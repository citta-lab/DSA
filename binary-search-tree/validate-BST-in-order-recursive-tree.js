const { buildTree} = require('./helper/BinaryTree');

/** 
 * 
 * O(N) time as we need to traverse all nodes
 * O(N) space as we will store all nodes
 * In ORDER ( left-root-right )
 */
const validateBST = (root) => {
    let pre = -Infinity;

    /** 
     * 1. valid binary tree  will have left value < root value < right value 
     * 2. In order will print left, root and right. So at any given time value is increasing.
     * 3. If we start with lowest value for `pre` then every next value should be greater
     * or it is not binary search tree.
     * 4. (IMPORTANT): hence this is recursive we need to make sure left and right part of the
     * results are true (combined) not just one side of the tree.
     * */

    return inorderTraversal(root, pre);
    
};

const inorderTraversal = ( root, pre) => {
    /** 
     * Base condition
     * - if root is null then it is valid binary search tree as nothing to compare
     *  */
    if(!root) return true;

    /** 
     * InOrder:
     * left,
     * root <- compare value here
     * right
     */
    let left = inorderTraversal(root.left, pre);
    
    if(root.val <= pre) return false;
    if(root.val > pre) pre = root.val;

    let right = inorderTraversal(root.right, pre);

    /** final to decide if both left && tree result in true not just one */
    return left && right

}

let node = buildTree([5,2,6,1,3]);
console.log(validateBST(node)); // true

node = buildTree([1,2,3,4,5,6]);
console.log(validateBST(node)); // false
const { buildTree } = require('./BinaryTree');


const validateBST = (root) => {
    return validateBSTHelper(root, -Infinity, Infinity);
}

const validateBSTHelper = (root, min, max) => {
    /** Assumption: BST is valid if the node is null */
    if(!root) return true;

    /** out of bound exception to break */
    if(root.val < min || root.val >= max) return false;

    return validateBSTHelper(root.left, min, root.val) && validateBSTHelper(root.right, root.val, max);
}


let node = buildTree([5,2,6,1,3]);
console.log(validateBST(node)); // true

node = buildTree([1,2,3,4,5,6]);
console.log(validateBST(node)); // false

node = buildTree([]);
console.log(validateBST(node)); // true

node = buildTree([5,2,100000]);
console.log(validateBST(node)); // true
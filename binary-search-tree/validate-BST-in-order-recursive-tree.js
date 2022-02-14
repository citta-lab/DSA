const { buildTree} = require('./helper/BinaryTree');

/** 
 * 
 * O(N) time as we need to traverse all nodes
 * O(N) space as we will store all nodes
 * In ORDER ( left-root-right )
 */
var isValidBST = function(root) {
    let left = -Infinity;
    let right = Infinity;
    
    return valid(root, left, right);
};

function valid(root, left, right){
    
    if(!root) return true;
    
    if(!(root.val < right && root.val > left)){
        return false;
    }
    
    let leftNode = valid(root.left, left, root.val);
    let rightNode = valid(root.right, root.val, right);
    
    return leftNode && rightNode
    
}

let node = buildTree([5,2,6,1,3]);
console.log(validateBST(node)); // true

node = buildTree([1,2,3,4,5,6]);
console.log(validateBST(node)); // false

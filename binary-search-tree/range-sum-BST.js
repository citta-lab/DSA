/** Given the root node of a binary search tree and two integers low and high,
 *  return the sum of values of all nodes with a value in the inclusive range [low, high]. 
 * 
 * leetcode: https://leetcode.com/problems/range-sum-of-bst/
 * */

const { buildTree } = require('./helper/BinaryTree');

var rangeSumBSTI = function(root, low, high) {
    let cur = root;
    let stack = [cur];
    
    let sum = 0;
    while(stack.length){
        
        let node = stack.pop();
        
        if(node){
            if(node.val >= low && node.val <= high ){
                sum = sum + node.val;
            }
            
            /** hence its BST we know right will have higher and left will have lower values */
            if(node.right && node.val <= high) stack.push(node.right);
            if(node.left  && node.val >= low ) stack.push(node.left);
        }
    }
    
    return sum;
};

var rangeSumBST = function(root, low, high) {
    if(!root) return null;
    
    let sum = 0;
    if(root){
        if(root.val >= low && root.val<= high){
            sum = sum + root.val;
        }
    }
    
    /** hence its BST we know right will have higher and left will have lower values */
    let left = low <= root.val ? rangeSumBST(root.left, low, high) : 0;
    let right = high >= root.val ? rangeSumBST(root.right, low, high) : 0;
    
    
    return left + sum + right;
};


let tree = buildTree([10,5,15,3,7,null,18]);
console.log(rangeSumBSTI(tree, 7, 15));
console.log(rangeSumBST(tree, 7, 15));

/** Given the root of a binary tree, 
 * check whether it is a mirror of itself (i.e., symmetric around its center). 
 * 
 * Input: root = [1,2,2,3,4,4,3]
   Output: true
 * 
 * */

const { buildTree } = require('./helper/BinaryTree');

/** O(N) time and O(N) space (i.e O(2N)) */
var isSymmetric = function(root) {
    let stack = [];
    
    /** 
    hence both side share same root, we need to add twice so 
    we can keep track of left and right as seperate */
    stack.push(root);
    stack.push(root);
    
    while(stack.length){
        
        /** treat first pop as left side and second as right for entire traversal */
        let leftSide = stack.pop();
        let rightSide = stack.pop();
        
        /** tail node might have left and right null, but it might not be end of complete tree */
        if(!leftSide && !rightSide ) continue;
        
        /** if one of the side has null and other has value then its not symmetric */
        if(!leftSide || !rightSide) return false;
        
        /** check if values are same */
        if(leftSide && rightSide){
         if(leftSide.val !== rightSide.val) return false;   
        }
        
        /** hence its a mirror, match mirror sides for each side */
        if(leftSide) stack.push(leftSide.left);
        if(rightSide) stack.push(rightSide.right);
        
        if(leftSide) stack.push(leftSide.right);
        if(rightSide) stack.push(rightSide.left);
    }
    
    return true;
};


let tree  = buildTree([1,2,2,3,4,4,3]);
console.log(isSymmetric(tree)); // true

tree  = buildTree([2,3,3,4,5,5]);
console.log(isSymmetric(tree)); // false

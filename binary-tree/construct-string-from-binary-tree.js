/** 
 * Given the root of a binary tree, construct a string consisting of parenthesis 
 * and integers from a binary tree with the preorder traversal way, and return it. 
 * Omit all the empty parenthesis pairs that do not affect the one-to-one mapping 
 * relationship between the string and the original binary tree. 
 * 
 * Example:
 * Input: root = [1,2,3,4]
 * Output: "1(2(4))(3)" 
 * 
 * Input: root = [1,2,3,null,4]
 * Output: "1(2()(4))(3)"
 * 
 * leetcode: https://leetcode.com/problems/construct-string-from-binary-tree/
 * company: Facebook
 * 
 * */

 const { buildTree } = require('./helper/BinaryTree');

 var tree2str = function(root) {
    if(!root) return '';
    
    let left = tree2str(root.left);
    let right = tree2str(root.right);
    
    let result = `${root.val}`;
    if(left === '' && right === '') return result;
    if(left && right === '') return `${result}(${left})`;
    if(right && left === '') return `${result}()(${right})`;
    if(right && left) return `${result}(${left})(${right})`;
};

let tree = buildTree([1,2,3,4]);
console.log(tree2str(tree)); // 1(2(4))(3)

tree = buildTree([1,2,3,null,4]);
console.log(tree2str(tree)); // 1(2(null)(4))(3)
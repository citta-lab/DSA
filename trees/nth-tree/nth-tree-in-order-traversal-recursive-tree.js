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

var preorder = function(root) {
    let result = [];
    recursive(root, result)
    return result;
 };
 
 const recursive = (root, result) => {
    if(root) result.push(root.val);
    if(root){
      for(let child of root.children){
        recursive(child, result)
      }
    }
     
   return result;
 }
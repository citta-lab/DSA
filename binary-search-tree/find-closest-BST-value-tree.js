/** 
Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. 
Example: root = [4,2,5,1,3], target = 3.714286
Ans: 4

leetcode: https://leetcode.com/problems/closest-binary-search-tree-value/

IMPORTANT: 
Last solution will run in O(1) space as we will not use any stack or queue or recursion call stack. Make sure to
check closestValueBS. 
*/

var closestValue = function(root, target) {
    /** settting the default to the Max */ 
    let pre = Infinity;
  
    /** we could use any of traversal but i am using pre-Order as i am very comfortable with it */
    let stack = [];
    stack.push(root);
    
    while(stack.length){
        let node = stack.pop();
        /** adding null checker here instead of everywhere */
        if(node){
            /** if we happen to find a match then just return */
            if( node && node.val === target ) return node.val;

            /** 
              we need to find the DIFF between previous value ( parent node value )
              and with current node to find what would be the min diff between them*/ 
            let preDiff = Math.abs(target - pre);
            let nodeDiff = Math.abs(target - node.val);

            /** store in `previous` only if current node value - target comes smaller than with pre node */
            if(nodeDiff < preDiff) {
              pre = node.val;   
            }

            /** split the tree to either left of right so we can do it in O(log n) */
            if(target < node.val) stack.push(node.left);
            if(target >= node.val) stack.push(node.right);
        }
        
    }
    
    /** return whatever we have it in pre */
    return pre;
};



/** IN ORDER WAY */
var closestValueInOrder = function(root, target) {
    let pre = Infinity;
    let stack = [];
    
    let cur = root;
    while(cur || stack.length) {
     while(cur){
         stack.push(cur);
         cur = cur.left;
     }
        
     let node = stack.pop();
     
     let preDiff = Math.abs(target - pre);
     let nodeDiff = Math.abs(target - node.val);
        
     if(nodeDiff < preDiff){
         pre = node.val;
     }
        
     cur = node.right
    }
    
    return pre;
};


/ ** BINARY SEARCH */ 
/** 
  This is purely on the concept of Binary Search 
  O(lon n) time as we are doinf binary search 
  O(1) space as no stack or recursion 
  */
   
var closestValueBS = function(root, target) {
    
    let pre = Infinity;
    let cur = root;
    
    while(cur){
        /** i doubt we will find this but good to have this */
        if(cur.val === target.val) return cur.val;
        
        /** same diff check as before */
        let curVal = cur.val;
        let preDiff = Math.abs(target - pre);
        let curDiff = Math.abs(target - curVal);
        pre = curDiff < preDiff ? curVal : pre;
        
        /** now we route the node left or right */
        cur = target < curVal ? cur.left : cur.right;
    
    }
    return pre;
};

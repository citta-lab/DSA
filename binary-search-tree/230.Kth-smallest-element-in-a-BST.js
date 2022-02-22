/** 
 * 
 * 230. Kth Smallest Element in a BST
 * 
 * Given the root of a binary search tree, and an integer k, 
 * return the kth smallest value (1-indexed) of all the values
 *  of the nodes in the tree. 
 * 
 * Input: root = [3,1,4,null,2], k = 1
   Output: 1
 * 
*  leetcode-question:230
 * leetcode: https://github.com/citta-lab/DSA/blob/main/binary-search-tree/230.Kth-smallest-element-in-a-BST.js
 * BLIND:52(52/75)
 * */

const { buildTree } = require('./helper/BinaryTree');

/** 
 * Time: O(N) i.e O(H+k) where H is height Space: O(N) in worst case and O(logN)
 * in average balanced tree.
 * 
 * Recursion is second example
 */
var kthSmallest = function(root, k) {
    let cur = root;
    let stack = [];
    let result = [];
    
    while(cur || stack.length){
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        
        let node = stack.pop();
        result.push(node.val);
        
        cur = node.right;
    }
    
    let indexPositionForKth = k - 1;
    return result[indexPositionForKth]
};


/** Recursion: Time: O(N) and space: O(N)  */
var kthSmallest = function(root, k) {
    
    /** 
    BST is already sorted and by doing inorder we can have
    sorted array and simply return the k'th element from array */
    
    let arr = [];
    BST(root, arr);
    return arr[k-1]
    
};

function BST(root, arr){
    if(!root) return null
    
    if(root && root.left){
        BST(root.left, arr);
    }
    
    arr.push(root.val);
    
    if(root && root.right){
        BST(root.right, arr);
    }
}

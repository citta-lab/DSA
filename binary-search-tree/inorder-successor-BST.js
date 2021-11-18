/** 
 * Given the root of a binary search tree and a node p in it, return the in-order successor of that 
 * node in the BST. If the given node has no in-order successor in the tree, return null. 
 * The successor of a node p is the node with the smallest key greater than p.val. 
 * 
 * Input: root = [2,1,3], p = 1
 * Output: 2
 * Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
 * 
 * leetcode: https://leetcode.com/problems/inorder-successor-in-bst/
 * */




/** O(N) time and O(N) space */
var inorderSuccessor = function(root, p) {
    let cur = root;
    let stack = [];
    
    let result = null;
    let fetchNext = false;
    while(cur || stack.length){
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        
        let node = stack.pop();
        
        if(fetchNext) {
            result = node;
            fetchNext = false;
        }
        
        if(!fetchNext && node === p){
            fetchNext = true;
        }
        
        cur = node.right;
    }
    
    return result;
};
/** 
 * 938. Range Sum of BST 
 * 
 * Given the root node of a binary search tree and two integers low and high, 
 * return the sum of values of all nodes with a value in the inclusive range [low, high]. 
 * 
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 * 
 * Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * Output: 23
 * 
 * leetcode-question:938
 * leetcode:https://leetcode.com/problems/range-sum-of-bst/
 * company:FACEBOOK
 * 
 * Hint:
 * - Time:O(n) and Space:O(n)
 * - use pre-order recursion and before calling left and right 
 * check if the low < root.val and high > root.val respectively.
 * 
 * 
 * */

 /** Time:O(N) and Space:O(N) */
 var rangeSumBST = function(root, low, high) {
    let sum =0;
    preorder(root, low, high);
    return sum;
    
    function preorder(root, low, high){
        let stack = [root];
        while(stack.length){
            let node = stack.pop();
            
            if(node.val >= low && node.val <= high){
                sum += node.val;
            }
            
            if(node && node.left && low < node.val) stack.push(node.left);
            if(node && node.right && high > node.val) stack.push(node.right);
        }
    }
};


/***********************************************
 *
 * 
 *  Recursion way
 * 
***********************************************/



var rangeSumBST = function(root, low, high) {
    
    let sum = 0;
    dfs(root, low, high);
    
    function dfs(root, low, high){
    
        if(!root) return 0;

        if(root.val >= low && root.val <= high){
            sum += root.val;
        }

        if(root && root.val > low ){
            dfs(root.left, low, high);
        }

        if(root && root.val < high ){
            dfs(root.right, low, high);
        }

    }
    
    return sum;
};
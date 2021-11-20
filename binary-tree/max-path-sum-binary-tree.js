/** 
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence 
 * has an edge connecting them. A node can only appear in the sequence at most once. Note that the path
 *  does not need to pass through the root. 
 * 
 * The path sum of a path is the sum of the node's values in the path. 
 * 
 * Given the root of a binary tree, return the maximum path sum of any non-empty path. 
 * 
 * Examples:
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
 * 
 * Input: root = [-10,9,20,null,null,15,7]
 * Output: 42
 * Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 * 
 * leetcode: https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * algoexpert: https://www.algoexpert.io/questions/Max%20Path%20Sum%20In%20Binary%20Tree 
 * 
 * great explanation : https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/603423/Python-Recursion-stack-thinking-process-diagram
 * video explanation I: https://www.youtube.com/watch?v=Hr5cWUld4vU 
 * video explanation II: https://www.youtube.com/watch?v=6cA_NDtpyz8  
 * 
 * */

 const { buildTree } = require('./helper/BinaryTree');

 var maxPathSum = function(root) {
    /** global maximum value we will keep updating only when max is found*/
    let maxSum = -Infinity;
    
    /** method helps in writing global variable */
    function preOrder(root) {
        
        if(!root) return 0;
        
        /** step 1: process left */
        let leftBranch = preOrder(root.left);
        let leftBranchMax = Math.max(leftBranch, 0); // only take if it's +ve values 
        
        /** step 2 : process right */
        let rightBranch = preOrder(root.right);
        let rightBranchMax = Math.max(rightBranch, 0);
        
        /** step 3: process subtree i.e left, right, root */
        let subTree = leftBranchMax + root.val + rightBranchMax; 
        
        /** step 4: update only if we find max, so we can simply return maxSum later */
        maxSum = Math.max(maxSum, subTree); 
        
        /** step 5: return left or right branch with root as we cant use substree as child of another root */
        return Math.max((leftBranchMax + root.val), (rightBranchMax + root.val));
    }
    
    
    preOrder(root);
    return maxSum; 
};


let tree = buildTree([1,2,3]);
console.log(maxPathSum(tree)); // 6

tree = buildTree([-10,9,20,null,null,15,7]);
console.log(maxPathSum(tree)); // 42

/** note other examples might give wrong answer if we use buildTree as it doesnt handle edge cases well. Refer leetcode for more examples */

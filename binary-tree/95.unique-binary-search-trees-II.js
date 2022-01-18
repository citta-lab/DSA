/** 
 * 
 * 95. Unique Binary Search Trees II 
 * 
 * Given an integer n, return all the structurally unique BST's (binary search trees), 
 * which has exactly n nodes of unique values from 1 to n. Return the answer in any 
 * order.
 * 
 * leetcode-question:95
 * leetcode:https://leetcode.com/problems/unique-binary-search-trees-ii/
 * 
 * Input:
 * n=3
 * Output: 
 * [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 * 
 * */




/** time O(n^2) and space: O(n) */
var generateTrees = function(n) {
    if (n === 0) return [];
    
    /** we can pass 1 as start and 3 as end if the number of nodes n = 3 */
    const generate = (start, end) => {
        const result = [];
        
        /** if we endup with start > end like (2,0) then we push null to binary search result */
        if (start > end) return [null];
        
        /** lets find and left and right tree */
        for (let i = start; i <= end; i++) {
            const leftTrees = generate(start, i - 1); // (1,0) for i=1
            const rightTrees = generate(i + 1, end); // (2,3) for i=1
            
            for (let leftNode of leftTrees) {
                for (let rightNode of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = leftNode;
                    root.right = rightNode;
                    
                    result.push(root);
                }
            }
        }
        
        return result;
    }
    
    return generate(1, n);
};
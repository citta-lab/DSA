/** 
 * Given the root of a binary tree, return all duplicate subtrees.
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them. 
 * Two trees are duplicate if they have the same structure with the same node values. 
 * 
 * 
 * leetcode: https://leetcode.com/problems/find-duplicate-subtrees/
 * Company: Google
 * */

/** O(n^2) time ( Since strings are bring used, the concatenation takes O(n) time in each recursive call taking overall complexity to O(n2).) */
 var findDuplicateSubtrees = function(root) {
    let seen = {};
    let result = [];
    
    dfs(root, seen, result);
    return result;
};

/** POSTORDER */
const dfs = (root, seen, result) => {
    
    if(!root) return null;
    
    let left = dfs(root.left, seen, result);
    let right = dfs(root.right, seen, result);
    
    let rootLeftRight = `${root.val}-${left}-${right}`;
    
    if(seen[rootLeftRight]){
        seen[rootLeftRight]++
    }else{
        seen[rootLeftRight] = 1;
    }
    
    if(seen[rootLeftRight] === 2) result.push(root)
    
    return rootLeftRight;
}
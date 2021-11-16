/** 
 * Given the root of a binary tree, return the lowest common ancestor (LCA) 
 * of two given nodes, p and q. 
 * If either node p or q does not exist in the tree, return null. 
 * All values of the nodes in the tree are unique. 
 * 
 * leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
 * 
 * HINT: Question says nodes might not exist.
 * In https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ both nodes are for sure present
 * */

/** FAILURE : this WORKS if both p and q for sure exist  */
const LCA = (root, p, q) => {
    if(!root) return null; 

    if(root === p || root === q) return root;

    let left = LCA(root.left, p, q);
    let right = LCA(root.right, p, q);

    if( left && right) return root;

    return left ? left : right; // <-- as it doesnt check if p or q doesnt even present
}

/** GOOD:  but global count get overridden so leet code second examples onward will fail */
var lowestCommonAncestor = function(root, p, q) {
    let LCA = LCAHelper ( root, p, q);
    // if we get 2 count then it means we found both p and q
    return count === 2 ? LCA : null; 
};

let count = 0;
const LCAHelper = ( root, p, q) => {
   
    if(!root) return root;
    
    if(root === p || root === q){
        count ++
        return root;
    }
    
    let left = LCAHelper(root.left, p, q);
    let right = LCAHelper(root.right, p, q);
    
    /** important to do this order of check left null then right, right null then root */
    return left === null ? right : right === null ? left : root;
}

/** 
 * 
 * 1644. Lowest Common Ancestor of a Binary Tree II
 * 
 * Given the root of a binary tree, return the lowest common ancestor (LCA) of two given nodes, p and q. 
 * If either node p or q does not exist in the tree, return null. All values of the nodes in the tree are
 * unique. According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p 
 * and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a 
 * node to be a descendant of itself)". A descendant of a node x is a node y that is on the path from 
 * node x to some leaf node.
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * 
 * leetcode-question:1644
 * leetcode:https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
 * company:FACEBOOK
 * 
 * Hint:
 * - Time: O(N) and Space:O(N)
 * - this is Binary Tree and p or q might not exits 
 * - Hence p & q might not exist we cannot assume rather need to check p & q explicitly 
 * - same LCA as binary tree but with boolean check to confim the p & q existance 
 * - binary tree LCA from 236 question
 * - while returning foundP && foundQ ? return lca : null
 */

 var lowestCommonAncestor = function(root, p, q) {
   
    /** hence we need to make sure both p & q present we need explicit check */
    this.foundP = false;
    this.foundQ = false; 
    
    let lca = LCA (root, p, q);
    
    /** if we have both as true then we can return LCA */
    return this.foundP && this.foundQ ? lca : null;
    
    
    function LCA(root, p, q){
        
        if(!root) return root;
        
        let left = LCA(root.left, p, q);
        let right = LCA(root.right, p, q);
        
        /** if we have match by using both side */
        if(left && right) return root;
        
        /** below TWO blocks used to verify if p & q exists */
        if(root === p){
            this.foundP = true;
            return root;
        }
        
        if(root === q){
            this.foundQ = true;
            return root;
        }
        
        /** we find left as the parent and have foundP and foundQ then we are good */ 
        if(left) return left;
       
        /** same as above for right */
        if(right) return right;
    }
};
/** 

    1676. Lowest Common Ancestor of a Binary Tree IV
    
    Given the root of a binary tree and an array of TreeNode objects nodes, return the lowest common ancestor (LCA) 
    of all the nodes in nodes. All the nodes will exist in the tree, and all values of the tree's nodes are unique.

    Extending the definition of LCA on Wikipedia: "The lowest common ancestor of n nodes p1, p2, ..., pn in a binary 
    tree T is the lowest node that has every pi as a descendant (where we allow a node to be a descendant of itself) 
    for every valid i". A descendant of a node x is a node y that is on the path from node x to some leaf node.
    
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], nodes = [4,7]
    Output: 2
    Explanation: The lowest common ancestor of nodes 4 and 7 is node 2.
    
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], nodes = [7,6,2,4]
    Output: 5
    Explanation: The lowest common ancestor of the nodes 7, 6, 2, and 4 is node 5.
    
    leetcode-question:1676
    leetcode:https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/
    
    Hint:
    - this assumes that nodes are present ( doesnt have random number )
    - Instead of passing p and q as two nodes we are expecting array of nodes
    - This is exact same LCA agorithm when two nodes p and q are given in binary tree
    -- then alter if check from `if(root.val === p.val || root.val === q.val)` return root to
    `if(nodes.icludes(root)) return true`
    - refer binary tree lca : https://github.com/citta-lab/DSA/blob/main/binary-tree/236.lowest-common-ancestor-of-a-binary-tree.js
    
    */

    var lowestCommonAncestor = function(root, nodes) {
    
     if(!root) return null;
    
     if(nodes.includes(root)) return root
    
     let left = lowestCommonAncestor(root.left, nodes);
     let right = lowestCommonAncestor(root.right, nodes);
    
     if(left && right) return root;
    
     if(left) return left;
    
     if(right) return right
};

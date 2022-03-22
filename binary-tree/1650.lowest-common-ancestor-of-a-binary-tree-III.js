/** 

   1650. Lowest Common Ancestor of a Binary Tree III
   
   Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

    Each node will have a reference to its parent node. The definition for Node is below:

    class Node {
        public int val;
        public Node left;
        public Node right;
        public Node parent;
    }
    According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a 
    tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."
    
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
    Output: 3
    Explanation: The LCA of nodes 5 and 1 is 3.
    
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
    Output: 5
    
    leetcode-question:1650
    leetcode:https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
    
    Hint:
    - Think this as similar to LINKEDLIST where we find common parent 
    - Hence root is not given, we need to traverse from p & q
    - Analogy is, we move p and q reference by parent until p === q or null. 
    -- if NULL, then we need to swap the reference
    -- swapping reference forces them to traverse again but this time they will
    meet at one point which is the parent
    
    */

var lowestCommonAncestor = function(p, q) {
    /** we need node1 and node2 so we dont lose reference to p & q so we can swap */
    let node1 = p;
    let node2 = q;
    
    /** instead of checking node1.parent === node2.parent we can check if node1 === node2 */
    while(node1 !== node2){
        node1 = node1 ? node1.parent : q;
        node2 = node2 ? node2.parent : p;
    }
    
    return node1
};

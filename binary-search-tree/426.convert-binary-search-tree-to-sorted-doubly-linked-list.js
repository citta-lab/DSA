/**
 * 426. Convert Binary Search Tree to Sorted Doubly Linked List
 * 
 * Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
 * You can think of the left and right pointers as synonymous to the predecessor 
 * and successor pointers in a doubly-linked list. For a circular doubly linked list, 
 * the predecessor of the first element is the last element, and the successor of the
 * last element is the first element.
 * 
 * We want to do the transformation in place. After the transformation, 
 * the left pointer of the tree node should point to its predecessor, 
 * and the right pointer should point to its successor. 
 * You should return the pointer to the smallest element of the linked list.
 * 
 * Input: root = [4,2,5,1,3]
 * Output: [1,2,3,4,5]
 * 
 * leetcode-question:426
 * leetcode:https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 * 
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - DFS with inOrder helps linking left and right nodes to current node in doubbly 
 * - DFS InOrder will go all the way to left. From here travserse back due to BACKTRACKING and 
 * we will update last.right to current and current.left to last which forms the bond
 */

/** time:O(N) and Space:O(N) */
var treeToDoublyList = function(root) {
    
    /** 
    doublyLink start and end, we update first when we reach first null 
    and last will keep getting updated until the end 
    */
    
    let first = null;
    let last = null;
    
    if(!root) return null; 
    inOrder(root);
    
    /** make it a circle */
    last.right = first;
    first.left = last;
    
    
    function inOrder(node){
     
        if(!node) return null;
        
        /** left tree processing */
        if(node && node.left) inOrder(node.left);
        
        /** node processing (inorder) */
        if(last){
            /** (doubly) link previous node from backtracking to current node */
            last.right = node;
            /** (doubly) link current node left to last */
            node.left = last; 
        } else {
            first = node;
        }
        
        last = node;
        
        /** right tree processing */
        if(node && node.right) inOrder(node.right);
    }
    
    return first;
};
/**  
 * A linked list of length n is given such that each node contains an additional random pointer, 
 * which could point to any node in the list, or null. Construct a deep copy of the list. 
 * The deep copy should consist of exactly n brand new nodes, where each new node has its value set
 *  to the value of its corresponding original node. Both the next and random pointer of the new nodes
 *  should point to new nodes in the copied list such that the pointers in the original list and copied 
 * list represent the same list state. None of the pointers in the new list should point to nodes 
 * in the original list.
 * 
 * leetcode: https://leetcode.com/problems/copy-list-with-random-pointer/
 * video: https://www.youtube.com/watch?v=5Y2EiZST97Y
 * 
 * Company: Facebook, Google, Microsoft 
 * 
 * */


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */



/** O(N) time and O(N) space */
var copyRandomList = function(head) {
    /** two pass arrpaoch */
    
    let map = new Map();
    map.set(null, null); /** this helps in null lookup at tail end */
    
    let cur = head;
    /** Step 1: first pass O(N) time and O(N) space*/
    while(cur){
        let newCopy = new Node(cur.val);
        map.set(cur, newCopy);
        cur = cur.next; 
    }
    
    let newCur = head;
    /** Step 2: second pass to build next and random */
    while(newCur){
        let copy = map.get(newCur);
        copy.next = map.get(newCur.next);
        copy.random = map.get(newCur.random);
        newCur = newCur.next;
    }
    
    return map.get(head);
};
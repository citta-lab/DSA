/** 
 * 
 * 141. Linked List Cycle
 * 
 * Given head, the head of a linked list, determine if the linked list has a 
 * cycle in it. There is a cycle in a linked list if there is some node in the 
 * list that can be reached again by continuously following the next pointer. 
 * Internally, pos is used to denote the index of the node that tail's next pointer 
 * is connected to. Note that pos is not passed as a parameter. 
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * 
 * Input: head = [1,2], pos = 0
 * Output: true
 * 
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * 
 * Input: head = [1], pos = -1
 * Output: false
 * 
 * leetcode-question:141
 * leetcode:https://leetcode.com/problems/linked-list-cycle/
 * 
 */

/** Same as below but instead of pointing `fast = head.next` at first we can start at head but then 
 * we need to check `slow === fast` after we increment becasue slow,fast will be same at first.
 */

 var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true;
    }
    
    return false;
};





/** APPRAOCH 1: with set but LOOK into appraoch II to reduce the space from O(n) to O(1) with two pointer*/
// O(n) time and O(n) space 
var hasCycleI = function(head) {
    let visited = new Set();
    let root = head;
 
    while(root){
        if(visited.has(root)){
         return true;   
        }else{
         visited.add(root);
         root = root.next;
        }
    }
    
    return false
};


// O(n) time and O(1) space
var hasCycle = function(head) {
    let slow = head;
    let fast = head && head.next;

    // or add this instead of let fast = head && head.next;
    //if( head === head.next ) return true
    
    /** 
     * Two pointer start at first 
     * and second position, but slow will increment by one 
     * and fast will by two in every iteration 
     * */
    while(fast && fast.next){
        if(fast === slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return false
};



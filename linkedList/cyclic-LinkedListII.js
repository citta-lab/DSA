
/** If the linkedList is cyclic then return the node otherwise return null */

/** 
 * O(n) time and O(n) space 
 * 
 * IMPORTANT: Check below for O(1) space using slow and fast pointer to detech the cyclic, then
 * using two pointers at head andf intersection to find the intersected node. 
 * */
var detectCycle = function(head) {
    let visited = new Set()
    let root = head;
    
    let position = 0;
    while(root){
        if(visited.has(root)) return root;
        visited.add(root)
        root = root.next;
    }
    
    return null
};

/** O(n) time and O(1) space */
var detectCycle = function(head) {
    
    let slow = head;
    let fast = head;
    
    let ptrOne = head;
    let ptrTwo = null;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            ptrTwo = slow;
            break;
        }
    }
    
    /** if we didnt update the secondPointer that means we didnt find cyclic */
    if(!ptrTwo) return null;
    
    /** hence it is cyclic if we traverse the pointer from head and intersection we will meet again */
    while(ptrOne && ptrTwo){
        if(ptrOne === ptrTwo) return ptrOne;
        ptrOne = ptrOne.next;
        ptrTwo = ptrTwo.next;
    }
};



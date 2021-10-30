/** find if the given linked list is cyclic or not, if cyclic return true */

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

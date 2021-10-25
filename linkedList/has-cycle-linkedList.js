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
    
    if(!head) return false
    
    if( head === head.next ) return true
    
  /** tow pointer start at first and second position, but slow will increment by one and fast will by two in every iteration */
    let slow = head;
    let fast = head.next;
    
    while(fast && fast.next && fast.next.next){
        if(fast === slow){
            return true;
        }
        
        slow = slow.next;
        fast = fast.next.next
    }
    
    return false
};

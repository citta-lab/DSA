 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
   
    /** base condition */
    if(!head) return null;
    if(!head.next) return head;
      
    /** we iterate the list until end and then join end to start hence root */
    let root = head;
    let oldTail = head;
  
    /** find size while iterating for finding end. 
     * IMP: hence base condition is passed we are alreaedy at head so need to start counting from 1 rather than 0 */
    let size = 1;
    while(oldTail && oldTail.next){
        size++
        oldTail = oldTail.next;
    }
      
    /** pointing end to head, becomes cycle and now we can loop in cycle to find new head/tail */
    oldTail.next = root;
      
    let newTail = head;
    let newTailPosition = size - (k % size) - 1; // i.e (n-k-1) would give tail but if size is < k we need %
    /** below is example of finding head */
    let newHeadPosition = size - (k % size); // i.e (n-k) would have given new head but if size 
      
    while(newTailPosition > 0){
        newTail = newTail.next;
        newTailPosition --
    }
      
    /** new head will be after tail as we are in cyclic linkedList */  
    let newHead = newTail.next;
    /** break the cycle */
    newTail.next = null
      
    return newHead;
  };
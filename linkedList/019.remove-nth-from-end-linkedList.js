/**
 * 
 * 19. Remove Nth Node From End of List
 * 
 * Given linkedList remove n'th position node from tail. 
 * head = 1->2->3->4->5->6->7->8 if n = 3 then we need to move node 6.
 * answer: 1->2->3->4->5->7->8
 * 
 * IMPORTANT:
 * If the n position is equal to the size of linkedList then first element needs to be removed.
 * Then our n+1 logic fails. Last example covers that scenario. 
 * 
 * leetcode-question:19
 * leetcode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * BLIND: 6 (6/75)
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// GIVEN 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// GIVEN: used for building linked list
const { buildLinkedList } = require('./LinkedList');





 /** O(n) time and O(1) space */
var removeNthFromEnd = function(head, n) {
    if(!head) return null 
    
    /** 
    this helps in solving when head is just [1] or [1,2] and we need to remove 1st position 
    Example: having dummy will give [0,1,2] and we can easily remove 1 from making changes to
    dummy.next to be head.next. 
    */
    let dummy = new ListNode(null);
    dummy.next = head; 
    
   /** fast pointer to reach end and slow pointer to reach n position behind */ 
   let slow = dummy;
   let fast = dummy; 
    
   /** if we need to remove n'th position from last then it (size-n) will give us the n'th 
   position from the front. However we need to remove the n'th position and can only do by
   updating the previous node. So making fast pointer reach end one setp faster than n, i.e (n+1)
   will put "slow" pointer 1 step behind. Then we can just update slow.next = slow.next.next */
    
   let fastForward = n + 1;
    
   /** fast forwarding the fast pointer ahead so when we reach end, slow will point to a node behind n'th node*/  
   while(fastForward > 0 ){
       fast = fast.next;
       fastForward --
   }
    
   while(fast){
       slow = slow.next;
       fast = fast.next;
   }
    
   /** removing the n'th position node */ 
   let nodeAfterRemovePosition = slow.next.next; 
   slow.next = nodeAfterRemovePosition;
    
   /** we need to return head, so dummy.next */  
   return dummy.next;
    
};


// let head = buildLinkedList([1,2,3,4,5,6,7]);
// console.log(removeNthFromEnd(head, 6)); // 2 should be removed

// head = buildLinkedList([1,2]);
// console.log(removeNthFromEnd(head, 1)); // 2 is removed

// head = buildLinkedList([1]);
// console.log(removeNthFromEnd(head, 1)); // null 

// head = buildLinkedList([1,2,3,4]);
// console.log(removeNthFromEnd(head, 1)); // 4 should be removed




/** Example to handle using k instead of k+1 when size and k are equal */
function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      let result = head;
      let fast = head;
      let fwd = k; 
      
      while(fwd > 0 && fast ){
          fast = fast.next;
          fwd --
      }
      
  if(!fast){
      /** 
       * this does print from 1 to 9 by removing 0 
       * but algo experts seems to not compare the 
       * return */
      let dummy = new ListNode(null);
      dummy.next = head.next;
      return dummy.next;
      
      /** algo experts updates the head itself */
      // head.value = head.next.value;
      // head.next = head.next.next;
      // return
  }
      
      let slow = head;
      /** 
       * moving fast a step furhter so we can stop slow pointer 
       * a step behind where we need to remove the node. similar to
       * k+1 strategy  */
      fast = fast.next;
      while(fast){
          slow = slow.next;
          fast = fast.next;
      }
      
      let nextPosition = slow.next.next;
      slow.next = nextPosition;
      
      return result;
  }

head = buildLinkedList([1,2,3,4]);
console.log(removeKthNodeFromEnd(head, 4)); // 2,3,4

head = buildLinkedList([1]);
console.log(removeKthNodeFromEnd(head, 1));

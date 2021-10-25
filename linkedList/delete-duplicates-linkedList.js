/** 
Given a sorted linked list, remove duplicates and return sorted list without any duplicate values 
Example: 1->1->2->3->3->4 should return 1->2->3->4
*/
 
//O(n) time and O(1) space
var deleteDuplicates = function(head) {

    let root = head;
    let preVal = root.val;
    
    /** we can only remove item if we can peak before we go to that position */
    while(root && root.next){
     if(root.next.val === preVal){
         root.next = root.next.next;
         root = root.next;
     }else{
         preVal = root.next.val;
         root = root.next;
     }
   }
    
    return head
};

let node = buildLinkedList([1,1,2,3,3,4]);
console.log(deleteDuplicates(node));

node = buildLinkedList([1,1,2]);
console.log(deleteDuplicates(node));

node = buildLinkedList([1,1,1,1,1,1]);
console.log(deleteDuplicates(node));

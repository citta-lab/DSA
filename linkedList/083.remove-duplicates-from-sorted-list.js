/** 
 * 83. Remove Duplicates from Sorted List
 * 
 * Remove all duplicate elements including the number in sorted linked list. 
 * linked list : [1,2,3,3,3,4,5,5,6]
 * ans list : [1,2,4,6]
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const { buildLinkedList } = require('./LinkedListII');

// o(n) time and O(1) space
var deleteDuplicates = function(head) {
    let dummy = new ListNode(null);
    dummy.next = head;
    
    /** need to hold a pointer to node before comparing so we can remove all the nodes for duplicates */
    let prev = dummy;
    let root = head;

    while(root && root.next){
        /** if current node val and next node val are same, then lets go on while until we find otherwise */
        if(root.val === root.next.val){
            while(root.next && root.val === root.next.val){ 
                root = root.next;
            }
            
            /** at this we by passed all nodes with same value, so we can point the prev pointer to next node */
            prev.next = root.next;
            /** irrespective of match/no-match we need to move the pointers */
            root = root.next;
        }else{
            /** if no match we need to move the prev pointer so we can use it when duplicates are found */
            prev = prev.next;
            /** irrespective of match/no-match we need to move the pointers */
            root = root.next;
        }
    }
   
    return dummy.next;
};

let node = buildLinkedList([1,2,3,3,3,4,5,5,6]);
console.log(deleteDuplicates(node)); // [1,2,4,6]

node = buildLinkedList([1,1,1,1,1,1]);
console.log(deleteDuplicates(node)); // [ ]
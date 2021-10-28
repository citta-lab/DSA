/**
 * Given linked list of order L0 → L1 → … → Ln - 1 → Ln and need to redorder it such a way the result should be
 * of the form L0 → Ln → L1 → Ln - 1 → L2 → Ln -. 
 * 
 * Example:
 * input: 1->2->3->4->5
 * output: 1->5->2->4->3
 */

/** GIVEN */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/** GIVEN : data prep */
const { buildLinkedList } = require('./LinkedListII');

/** 
 * Hint: 
 * 
 * Given problem can be sub divided into multiple diff problem. Take a closer look, first 1,2,3 are extended
 * in such a way that order didn't change however the numbers from tails are added in between. So can we represent 
 * this as 1->2->3 and 4->5. But order of the 4,5 needs to be changed to 5->4 so it matches the output. Now if i
 * added them together 1->5->2->4->3.
 * 
 * In algorithms terms,
 * - Find mid point using two pointers
 * - Reverse the second half of the linked list 
 * - merge them together.
 * 
 * leet code: https://leetcode.com/problems/reorder-list/
 */


/** O(n) time and O(1) space */
var reorderList = function(head) {
    let root = head;
    
    // will return 4->5->6 from 1->2->3->4->5->6
    const mid = findMid(head); 
  
    // will give 6->5->4 && root will detach after 4th node during reverse and becomes 1->2->3->4
    const reverse = reverseList(mid); 

    let l1= root;
    let l2= reverse;

    /** when used merge sort logic we ran into cylick node, so using temp to merge */
    const merge = mergeTwo(l1, l2);
    
    return merge; 
}

const mergeTwo = (l1, l2) => {
    let head = l1;
    while(l2.next){
        let tmp = l1.next; // hold 1.next pointer ( to 2 ) ref
        l1.next = l2;      // 1.next points to 6
        l1 = tmp;          // move l1 from 1 to 2

        tmp = l2.next;    // hold 6.next pointer ( to 5 ) ref
        l2.next = l1;     // 6.next points to 2 ( as l1 moved its position from 1 to 2 )
        l2 = tmp;
    }

    return head;
}

const reverseList = (head) => {
    let pre = null;
    let cur = head;
    let future = null;

    while(cur){
        future = cur.next;
        cur.next = pre;
        
        pre = cur;
        cur = future;
    }

    return pre
}

const findMid = (head) => {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

let node = buildLinkedList([1,2,3,4,5,6]);
console.log(reorderList(node));

node = buildLinkedList([1,2,3,4]);
console.log(reorderList(node)); // [1,4,2,3]

node = buildLinkedList([1,2,3,4,5]);
console.log(reorderList(node));// [1,5,2,4,3]



/** swap pairs of node in linked list and return a swapped linkedList 
 * example: 1->2->3->4->null should be 2->1->4->3
*/

const { buildLinkedList } = require('./LinkedListII');
/** Appraoch I: O(n) time and O(n) space where n stacks are used by recursions */
// using iteration we can do O(1) space check here https://leetcode.com/problems/swap-nodes-in-pairs/solution/
var swapPairs = function(head) {
    
    /** base condition: when head reaches the tail then it will be null which is the breaking point of swapPairs */
    if(!head || !head.next) return head;
    
    /** have two pointers and firstPointer result depends on recursion so it will go all the way to end, when head is null it will return */
    let firstNode = head;
    let secondNode = head.next;
    
    /** in  this recursion it goes all the way from 1 to 4 and gets resolved then backtracks */
    firstNode.next = swapPairs(secondNode.next);
    secondNode.next = firstNode;
    
    return secondNode;
  
};


let node = buildLinkedList([1,2,3,4,5]);
console.log(swapPairs(node)); // [2,1,4,3]

node = buildLinkedList([1]);
console.log(swapPairs(node)); // [1]



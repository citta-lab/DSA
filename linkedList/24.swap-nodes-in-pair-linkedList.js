/** 
 * 24. Swap Nodes in Pairs
 * 
 * swap pairs of node in linked list and return a swapped linkedList 
 * example: 1->2->3->4->null should be 2->1->4->3
 * 
 * leetcode-question:24
 * leetcode:https://leetcode.com/problems/swap-nodes-in-pairs/
 * 
 * HINT:
 * Try to solve with O(1) space in second attempt. Second solution is using O(1) space
 * 
 * Topic:
 * LinkedList-Recursion
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

    /** backtracking */
    secondNode.next = firstNode;
    
    return secondNode;
  
};


let node = buildLinkedList([1,2,3,4,5]);
console.log(swapPairs(node)); // [2,1,4,3]

node = buildLinkedList([1]);
console.log(swapPairs(node)); // [1]


/** GIVEN: class */
class Node {
    constructor(){
        this.val = 0;
        this.next = null;
    }
}

/** O(n) and O(1) */
/** 1->2->3->4->5->6 */
const swapPairsIterative = (head) => {

    

    let dummy = new Node(null);
    dummy.next = head;

    // prev->1
    let prev = dummy;

    while(prev.next && prev.next.next){
        let first = prev.next; // 1 
        let second = prev.next.next; // 2

        console.log(first);
        console.log(second)

        first.next = second.next; // 1.next -> 3
        second.next = first; // 2.next -> 1
        prev.next = second; // prev->2 ( prev changed from 1 to 2)

        prev = first;
    }

    return dummy.next
}


node = buildLinkedList([1,2,3,4,5]);
console.log(swapPairsIterative(node)); // [2,1,4,3]

// node = buildLinkedList([1]);
// console.log(swapPairsIterative(node)); // [1]
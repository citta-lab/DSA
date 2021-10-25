/**
 * Given K sorted linked list, merge all of the linked list and return final sorted list. 
 */


// GIVEN 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// given used for building data
const { buildLinkedList } = require('./LinkedListII');



/**
 * APPRAOCH 1: ( not the optimized ) 
 *
 * In this appraoch we use the concept of merging two sorted linkedList and keep applying to all of the
 * elements in the list until we find the final result. This can be our first step towards solving the
 * problem. 
 * 
 * Refer: merge-two-sorted-linkedList.js file for core idea. 
 * 
 * merging two sorted list = O(n+m) where n & m are first and second list node size
 * we have k number of merging.
 * O(kN) time where O(N) = O(n+m); 
 * O(1) space
 * 
 */
var mergeKLists = function(lists) {
    
    let l1 = lists[0];
    let l2 = lists[1];
    
    /** find the merge of first two and use the result for consecutive merges  */
    let head = mergeTwo(l1, l2);
    
    for(let i=2; i<lists.length; i++){
        head = mergeTwo(head, lists[i]);
    }
    
    return head;
};


/** read more here https://github.com/citta-lab/DSA/blob/e3e328aa2b4c0635352c49c882ab1c9a9f4ea33a/linkedList/merge-two-sorted-linkedList.js */
const mergeTwo = (l1, l2) => {
   
    let dummy = new ListNode(null);
    let head = dummy; 
    
    /** this is base condition to handle [] or [[]] linked list */
    if(!l1 && !l2) return dummy.next;
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            head.next = l1;
            l1 = l1.next;
        }else{
            head.next = l2;
            l2 = l2.next;
        }
        
        head = head.next;
    }
    
    head.next = l1 ? l1 : l2;
    
    return dummy.next;
};


let nodeA = buildLinkedList([1]);
let nodeB = buildLinkedList([4]);
let nodeC = buildLinkedList([3,4]);
let nodeD = buildLinkedList([2]);

console.log(mergeKLists([nodeA, nodeB, nodeC, nodeD])); // [1,2,3,4,4]
console.log(mergeKLists([])); // [ ]
console.log(mergeKLists([[]])); // [ ]

nodeA = buildLinkedList([111,222,333]);
nodeB = buildLinkedList([1,100]);
console.log(mergeKLists([nodeA, nodeB])); // [1,100,111,222,333]


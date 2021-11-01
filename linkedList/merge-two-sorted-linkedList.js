/**
 * Given two sorted linked list, merge them together in such a manner the resulting linked should be
 *  "SORTED" as well. 
 * 
 * l1: 1->3->4->4->6
 * l2: 1->2->5->7
 * 
 * result : 1->1->2->3->4->5->6->7
 */


// GIVEN 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 

// GIVEJN TO build data
const { buildLinkedList } = require('./LinkedListII');

// O(n+m) time and O(1) space becuase we are only using pointer to connect and using the existing l1 and l2 list
var mergeTwoLists = function(l1, l2) {

    /** use dummy node to start with connect l1 and l2 nodes based on comparision */
    let dummy = new ListNode(null);
    let head = dummy;

    /** can only compare until they have both equal size */
    while(l1 && l2){
        if(l1.val <= l2.val){
            /** use dummy node to point l1 */
            head.next = l1;
            /** now l1 need to move to next node, so it can be compared against l2 */
            l1 = l1.next; 
        }else{
            head.next = l2;
            /** same as l1 sitation, we need to move l2 to next node so l2 will be comapred with l1 */
            l2 = l2.next;
        }

        /** 
         * one of the l1 and l2 will be added to head, now we need to move the head otherwise
         * head will keep replaced with new value and will not have list but just one node ( last node val) */
        head = head.next;
    }

    /** 
     * if l1 or l2 are not same size then one of the list's node will be be left but they are sorted (given) 
     * hence our sorting started from begining the left nodes must have higer value than what we have in the head.
     * so we find which one is remaining and attach it to the next of head */
    head.next = l1 ? l1 : l2;

    /** head is at the end, rememer we saved the head start postion so we return dummy.next which is ACTUAL head */
    return dummy.next;
}


console.log("------------ MERGE TWO SORTED LIST --------");

let nodeOne = buildLinkedList([1,2]);
let nodeTwo = buildLinkedList([3,4]);
console.log(mergeTwoLists(nodeOne, nodeTwo)); // 1,2,3,4

nodeOne = buildLinkedList([4]);
nodeTwo = buildLinkedList([3]);
console.log(mergeTwoLists(nodeOne, nodeTwo)); // 3,4

nodeOne = buildLinkedList([0]);
nodeTwo = buildLinkedList([0]);
console.log(mergeTwoLists(nodeOne, nodeTwo)); // 0,0

nodeOne = buildLinkedList([3]);
nodeTwo = buildLinkedList([0,1,2,4,5]);
console.log(mergeTwoLists(nodeOne, nodeTwo)); // 0,1,2,3,4,5

nodeOne = buildLinkedList([2,6,7,8]);
nodeTwo = buildLinkedList([1,3,4,5,9,10]);
let test = mergeTwoLists(nodeOne, nodeTwo)
console.log(test.next.next.next); // 0,1,2,3,4,5
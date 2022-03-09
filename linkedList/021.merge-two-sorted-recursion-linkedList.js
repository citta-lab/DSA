/**
 * 21. Merge Two Sorted Lists
 * 
 * Given two sorted linked list, merge them together in such a manner the resulting linked should be
 *  "SORTED" as well. 
 * 
 * l1: 1->3->4->4->6
 * l2: 1->2->5->7
 * 
 * result : 1->1->2->3->4->5->6->7
 * 
 * leetcode-question:21
 * leetcode:https://leetcode.com/problems/merge-two-sorted-lists/
 */


// GIVEN 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 

// GIVEJN TO build data
const { buildLinkedList } = require('./LinkedListII');

// O(n+m) time and O(n+m) space becuase we are only using pointer to connect and using the existing l1 and l2 list
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
};


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
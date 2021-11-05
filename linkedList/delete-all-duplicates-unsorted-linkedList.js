/**
 * If the given linked list is of unsorted then please do delete all the occurance of the node value and 
 * return the linkedList without any duplicates and it's nodes.
 * 
 * Example: 1->2->3->2->5 then 
 * result 1->3->5 as 2 is duplicate and botj occurance of 2 needs to be deleted
 * 
 * LeetCode: https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/
 */

/** GIVEN for data */
const { buildLinkedList } = require('./LinkedListII');

/** GIVEN */
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

/** O(n) time and O(n) space */
/** NOTE: This fails with Time Exceeded when larger linkedList is added. Modified solution is after this */
var deleteDuplicatesUnsorted = function(head) {
    
    /** STEP 1: count number of occurence so in next pass we can remove the node */
    let countMap = {}
    let root = head;
    while(root){
        if(countMap[root.val]){
            countMap[root.val]++
        }else{
            countMap[root.val] = 1
        }
        root = root.next;
    }
    

    /** STEP 2: Need a pointer before node so we can even remove the head it it's repeated more than 1 */
    let dummy = new ListNode(null);
    dummy.next = head;
    
    /** STEP 3: go through the linkedList and check the countMap for occurance */
    let cur = dummy;
    while(cur){
        /** if count is more than 1 then, we remove it by changing the pointer to next.next */
        if(cur.next && countMap[cur.next.val] > 1){
            cur.next = cur.next.next;
            
            /** we reset back to start so we can remove node we left when we move the pointer with next.next */
            cur = dummy;
        }else{
            cur = cur.next;
        }
    }
    
    return dummy.next;
};



var deleteDuplicatesUnsortedModified = function(head) {
    
    /** STEP 1: count number of occurence so in next pass we can remove the node */
    let countMap = {}
    let root = head;
    while(root){
        if(countMap[root.val]){
            countMap[root.val]++
        }else{
            countMap[root.val] = 1
        }
        root = root.next;
    }
    

    /** STEP 2: Need a pointer before node so we can even remove the head it it's repeated more than 1 */
    let dummy = new ListNode(null);
    dummy.next = head;
    
    /** STEP 3: go through the linkedList and check the countMap for occurance */
    let cur = dummy;
    while(cur){
        /** while will run entire list whenwe find count more than 1, helps removing all the occurance */
        while(cur.next && countMap[cur.next.val] > 1){
            cur.next = cur.next.next;
        }

        /** if while happens or not we need to move pointer to next to check next element */
        cur = cur.next;
    }
    
    return dummy.next;
};


let head = buildLinkedList([1,2,3,2,4]);
console.log(deleteDuplicatesUnsorted(head)); // 1,3,4
console.log(deleteDuplicatesUnsortedModified(head)); // 1,3,4

head = buildLinkedList([1,2,2,1]);
console.log(deleteDuplicatesUnsorted(head)); // []
console.log(deleteDuplicatesUnsortedModified(head)); // []

head = buildLinkedList([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]);
console.log(deleteDuplicatesUnsorted(head)); // [1,3]
console.log(deleteDuplicatesUnsortedModified(head)); // [1,3]

head = buildLinkedList([1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]);
console.log(deleteDuplicatesUnsorted(head)); // [1,3]
console.log(deleteDuplicatesUnsortedModified(head)); // [1,3]
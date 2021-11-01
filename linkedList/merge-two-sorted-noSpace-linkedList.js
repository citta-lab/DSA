/**
 * Given two sorted linked list, merge them together in such a manner the resulting linked should be
 *  "SORTED" as well without any aditional space ( or creating new list ). i.e O(1) space
 * 
 * l1: 1->3->4->4->6
 * l2: 1->2->5->7
 * 
 * result : 1->1->2->3->4->5->6->7
 * 
 * Note: another solution with O(n) i.e using dummy linkedList is here 
 * https://github.com/citta-lab/DSA/blob/c88146f392e56faa5cb0f6b90d41198da37dee9d/linkedList/merge-two-sorted-linkedList.js
 */


// GIVEN 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 

// GIVEJN TO build data
const { buildLinkedList } = require('./LinkedListII');

function mergeLinkedLists(headOne, headTwo) {
	let listOne = headOne;
	let listTwo = headTwo;
	
	/** pointer for one of the list, here we choose listOne */
	let prevOne = null;
	
	while(listOne && listTwo){
		if(listOne.val < listTwo.val){
			/** hence pointer is for listOne, we take the new val and go to next */
			prevOne = listOne;
			listOne = listOne.next;
		}else{
			/** 
			hence we update preOne with listOne, now we need to point to listTwo val
			as we are in this else section. if(prevOne) is used to prevent edge cases */
			if(prevOne) prevOne.next = listTwo;
			
			/** prevOne takes new val from listTwo & we move the listTwo cursor */
			prevOne = listTwo;
			listTwo = listTwo.next;
			
			/** then we need to move the pointer back to listone element */
			prevOne.next = listOne;
		}
	}
	
	/** 
	consider any reminder list elements 
	can also be writtern like if(!listOne) prevOne.next = listTwo;
	*/
	prevOne.next = listOne ? listOne : listTwo;
	
	/** hence we updated the list and dont really one which one is the root, we check here to return*/
	let head = headOne.val < headTwo.val ? headOne : headTwo;
	return head;
}


let nodeOne = buildLinkedList([1,2]);
let nodeTwo = buildLinkedList([3,4]);
console.log(mergeLinkedLists(nodeOne, nodeTwo)); // 1,2,3,4

nodeOne = buildLinkedList([4]);
nodeTwo = buildLinkedList([3]);
console.log(mergeLinkedLists(nodeOne, nodeTwo)); // 3,4

nodeOne = buildLinkedList([0]);
nodeTwo = buildLinkedList([0]);
console.log(mergeLinkedLists(nodeOne, nodeTwo)); // 0,0

nodeOne = buildLinkedList([3]);
nodeTwo = buildLinkedList([0,1,2,4,5]);
console.log(mergeLinkedLists(nodeOne, nodeTwo)); // 0,1,2,3,4,5

nodeOne = buildLinkedList([2,6,7,8]);
nodeTwo = buildLinkedList([1,3,4,5,9,10]);
console.log(mergeLinkedLists(nodeOne, nodeTwo)); 



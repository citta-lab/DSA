
/** Given two linked list of uneven size, find the sum of two linkedList and return the newLinked list
 * Example: 2->4->7->1 and 9->4->5 then result should be 1->9->2->2
 * 
 * explanation: 2->4->7->1 is presented as 1742 and similarlu second one is 549. 
 * if we add 1742 + 549 = 2291
 * However we need to present the linked list as 1->9->2->2
 * 
 * 
 * Hint: 
 * Option 1: we can reverse listOne and listTwo, then add values to make new list then reverse it again
 * 
 * Option 2: (Better)
 * Without reversing add the values, keep track of carry and use it in next addition. Also remember to handle
 * uneven list cases and we also need to make sure we are left with no carry ( i.e reminder ). Example: 2 + 9 = 11
 * then we need to present as 1->1
 */


/** GIVEN for building data */
const { buildLinkedList } = require('./LinkedListII');

/** GIVEN linkedList ndoe */
class Node {
    constructor(val = 0){
        this.val = val;
        this.next = null;
    }
}

/** O(n) time and O(n) space */
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  
	let dummy = new Node(null);
	let carry = 0;
	let result = dummy;
	
	while(linkedListOne && linkedListTwo){
		let valOne = linkedListOne.val;
		let valTwo = linkedListTwo.val;
		
		let sum = valOne + valTwo + carry;
		let newVal = sum % 10;
		carry = Math.floor(sum / 10); 
		

        console.log(newVal)
		dummy.next = new Node(newVal);
		
		
		dummy = dummy.next;
		linkedListOne = linkedListOne.next;
		linkedListTwo = linkedListTwo.next;
	}
	
	let remainingList = linkedListOne ? linkedListOne : linkedListTwo;
	
	while(remainingList){
		let val = remainingList.val;
		
		let sum = val + carry;
		let newVal = sum % 10;
		carry = Math.floor(sum / 10);
		
		dummy.next = new Node(newVal);
		dummy = dummy.next;
		remainingList = remainingList.next;
	}
	
	if(carry > 0){
		dummy.next = new Node(carry);
	}
	
  return result.next;
}


let nodeA = buildLinkedList([2,4,7,1]);
let nodeB = buildLinkedList([9,4,5]);
console.log(sumOfLinkedLists(nodeA, nodeB)); // 1->9->2->2

nodeA = buildLinkedList([2]);
nodeB = buildLinkedList([9]);
console.log(sumOfLinkedLists(nodeA, nodeB)); // 1->1

nodeA = buildLinkedList([0]);
nodeB = buildLinkedList([9]);
console.log(sumOfLinkedLists(nodeA, nodeB)); // 9

nodeA = buildLinkedList([1,1,1]);
nodeB = buildLinkedList([9,9,9]);
console.log(sumOfLinkedLists(nodeA, nodeB)); // 0-1-1-1
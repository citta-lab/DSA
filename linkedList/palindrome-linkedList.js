/**
 *  Palindrome Linked List
	Input: 1->2
	Output: false
	
	Input: 1->2->2->1
	Output: true
 */

 const { buildLinkedList } = require('./LinkedListII');

/** palindrome is something which needs to be same when we read from left to right,
 * right to left. So one thing we can realize is the numbers going inwards needs to be same
 * which indicates we could have done two pointer if this was array but here its singly linked
 * list we can only traverse from left to right. 
 * 
 * But we can find the middle point in the linkedList and then reverse from the middle to return 
 * new list which contains the second part. At this point original head has linked list until middle and
 * reversed linked list has second half which is reversed ( second head points to tail). We can do
 * while loop and compare each element from list one and list two.
 */

 /** O(n) time and O(1) space */
 const isPalindrome = (head) => {
    let root = head;
    if(!head) return falsel;
    if(head && !head.next) return true;

    let mid = findMid(head);
    let reversed = reverseFromMid(mid);

    let listOne = root;
    let listTwo = reversed;

    while(listOne && listTwo){
        if(listOne.val !== listTwo.val) return false;
        listOne = listOne.next;
        listTwo = listTwo.next;
    }

    /** do this check only if needed */
    if(listOne || listTwo) return false;

    return true;
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

 const reverseFromMid = (head) => {
     let prev = null;
     let cur = head;
     let future = null;

     while(cur){
        future = cur.next;
        cur.next = prev;
        
        prev = cur;
        cur = future;
     }

     return prev;
 }

 let node = buildLinkedList([1,2]);
 console.log(isPalindrome(node)); // false

 node = buildLinkedList([1,2,4,2,1]);
 console.log(isPalindrome(node)); // true

 node = buildLinkedList([1,2,1]);
 console.log(isPalindrome(node)); // true

 node = buildLinkedList([1]);
 console.log(isPalindrome(node)); // true

 node = buildLinkedList([1,2,1,4]);
 console.log(isPalindrome(node)); // false

 node = buildLinkedList([1000, 1000, 1000, 1000, 1000]);
 console.log(isPalindrome(node)); // true

const { buildLinkedList } = require('./LinkedList');

/** 
 * Print middle linkedlist postion value with O(1) space and O(n) time complexity. You will be given 
 * singly linkedList with a head. Head has property of .data and .next.
 * 
 * Example: head = [1,2,3,4,5], output should be 3
 */

/** 
 * This can be solved with 2 pointers. If two people are running (slow) and (fast) where slow runs hasf the
 * speed of fast then once fast reaches the detination we can retun the slow position. 
 * 
 * Every two steps "fast" takes, "slow" must only take one step.
 * */ 
const printMiddle = (head) => {
    if(!head) return head;

    if(head && !head.next) return head.data;
    
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

let head = buildLinkedList([1,2,3,4,5]);
console.log(printMiddle(head)); // 3

head = buildLinkedList([1,2,3,4,5,6,7,8,9,10])
console.log(printMiddle(head)); // 5

head = buildLinkedList([]);
console.log(printMiddle(head)); // null

head = buildLinkedList([1]);
console.log(head)
console.log(printMiddle(head)); // 1

head = buildLinkedList([1,2]);
console.log(printMiddleII(head)); // 1


/** 
 * In this case we are doing in O(n^2) at worst but ideally it would be O(n * n/2) as our inner while loops only
 * trasversing for remidner of counter. 
 */
const printMiddleWithCounter = (head) => {
    
    let middle = head;
    let start = head; 

    let count = 0;
    let previousCounter = 0;
    while(start && start.next){
        count++
        start = start.next;

        let middlePosition = Math.round(count/2);
        let counter = middlePosition - previousCounter;
        previousCounter = middlePosition;

        while(counter > 0){
            middle = middle.next;
            counter --
        }
    }

    return middle.data;
}

const listThreeHead = buildLinkedList([1,2,3,4,5]);
console.log(printMiddleWithCounter(listThreeHead));
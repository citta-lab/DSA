/** 
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse 
 * the nodes of the list from position left to position right, and return the reversed list. 
 * 
 * leetcode: https://leetcode.com/problems/reverse-linked-list-ii/
 * */

const { buildLinkedList } = require('./LinkedListII');

var reverseBetween = function(head, left, right) {
    
    if(!head) return null;
    
    
    while(left < right){
        
        /** 
          we need to reinitialize inside while so it doesnt go out of bound,
          example when left = 1, right=5 for [1,2,3,4,5] */
        let leftPoint = head;
        let rightPoint = head;
        
        /** move left pointer to left position, hence it is started at first position we need to conside > 1 */
        let fwdLeft = left;
        while(fwdLeft > 1){
            leftPoint = leftPoint.next;
            fwdLeft --
        }
        
        /** move to right position */
        let fwdRight = right;
         while(fwdRight > 1){
            rightPoint = rightPoint.next;
            fwdRight --
        }
        
        /** SWAP right and left values */
        let temp = rightPoint.val; 
        rightPoint.val = leftPoint.val;
        leftPoint.val = temp;
        
        left ++
        right --
    }
    
    
    return head;
    
};


let head = buildLinkedList([1,2,3,4,5]);
console.log(reverseBetween(head, 1, 5)); // 5,2,3,4,1

head = buildLinkedList([1,2,3,4,5]);
console.log(reverseBetween(head, 2, 4)); // 1,4,3,2,5
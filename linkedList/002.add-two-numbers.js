/**
 * 2. Add Two Numbers
 * 
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * leetcode:https://leetcode.com/problems/add-two-numbers/
 * leetcode-question:2
 * 
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - Initialise dummy node 
 * - Initialize result node to dummy.next which will carry sum 
 * - Use p1 and p2 to represent l1 and l2 list 
 * - Use carry = 0 which will carry reminder 
 * - In while loop, make sure to check p1 if we dont have value assing 0.Same for p2
 */

 var addTwoNumbers = function(l1, l2) {
    
    let dummy = new ListNode(-1);
    let head = dummy; 
    
    let p1 = l1;
    let p2 = l2;
    
    let carry =0;
    
    while(p1 || p2){
        
        let num1 = p1 ? p1.val : 0;
        let num2 = p2 ? p2.val : 0;
        
        let sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10); // <-- Important otherwise we will get floating numbers 
        
        head.next = new ListNode(sum % 10);
        head = head.next;
        
        p1 = p1 ? p1.next : null
        p2 = p2 ? p2.next : null
    }
    
    if(carry) head.next = new ListNode(carry);
    
    return dummy.next
};
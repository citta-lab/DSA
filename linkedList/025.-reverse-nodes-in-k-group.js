/** 
 * 25. Reverse Nodes in k-Group
 * 
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is 
 * not a multiple of k then left-out nodes, in the end, should remain as it is. 
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * 
 * leetcode-question:25
 * leetcode:
 * 
 * Hint:
 * - Can be done using STACK or RECURSION which will cost O(N) space
 * 
 * - (BETTER)
 * - Without using Extra space
 * - Have reverseList helper which will do reverse when asked
 */

 /** Time: O(N) and Space: O(N) */
 var reverseKGroup = function(head, k) {
    let stack = [];
    let newNode = new ListNode(-1);
    let temp = newNode;
    
    while(head) {
        for(let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next;
        }
        
        if(stack.length === k) {
            while(stack.length > 0) {
                temp.next = stack.pop();
                temp = temp.next;
            }
            temp.next = head;
        }
    }
    return newNode.next;
};



/** Time:O(N) and Space:O(1) */
const reverseKGroup = function (head, k) {
    if (!head || !head.next || k < 2) return head;
  
    let dummy = new ListNode(-1, head);
    let prev = dummy;
    let curr = head;
    while (curr) {
      prev.next = reverseList(prev, curr, k);
      let next = curr.next;
      prev = curr;
      curr = next;
    }
    return dummy.next;
  };
  
  const reverseList = (prevNode, currNode, k) => {
    if (!currNode.next) return currNode;
    //check whether this list meets k nodes
    let count = 0;
    let pointer = currNode;
    while (count < k && pointer) {
      pointer = pointer.next;
      count++;
    }
    if (count < k) return currNode;
  
  //if you have k nodes to reverse, it only takes k-1 times of operations
    while (k-1 > 0) {
      let nextNode = currNode.next;
      currNode.next = nextNode.next;
      nextNode.next = prevNode.next;
      prevNode.next = nextNode;
      k--;
    }
    return prevNode.next;
  };
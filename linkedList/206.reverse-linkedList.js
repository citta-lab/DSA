/** 

 206. Reverse Linked List || Reverse LinkedList

 Given the head of a singly linked list, reverse the list, and return the reversed list.
 
 leetcode-question:206
 leetcode:https://leetcode.com/problems/reverse-linked-list/
 BLIND: 44 (44/75)
 
 Example:
 Input: 1->2->3->4->5->NULL
 Output: 5->4->3->2->1->NULL 

 */
    

    const { buildLinkedList } = require('./LinkedListII');

    const reverse = (head) => {
        if(!head || !head.next) return head;

        let prev = null;
        let cur = head;
        let future = null;; 

        while(cur){
            future = cur.next;
            cur.next = prev;
            

            prev = cur;
            cur = future;
        }

        return prev
    }

    /** same one concised  */
    var reverseList = function(head) {
        let dummy = null;
        while(head){
            let temp = head.next;
            head.next = dummy;
            dummy = head
            head = temp;
        }
        
        return dummy
    };

    let node = buildLinkedList([1,2,3,4,5]);
    console.log(reverse(node));

/** given linked list partition all the values less than given k to before and greater values to after. ORDER should be preserved
 * example: 1->4->2->3->5->2->9 where k = 3
 * answ: 1->2->2->4->3->5->9  ( where 4-->3 to preserve the order )
 * 
 * Leet code: https://leetcode.com/problems/partition-list/
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const { buildLinkedList } = require('./LinkedListII');

//O(n) time and O(1) time
var partition = function(head, x) {
    
    /** have two empty list so we can keep adding less values and greater values to them */
    let beforeHead = new ListNode(null);
    let afterHead = new ListNode(null);

    let before = beforeHead;
    let after = afterHead;
    
    let root = head;
    while(root){
        /** compare less than and dont do <= so 3 will go to else */
        if(root.val < x){
            before.next = root;
            before = before.next;
        }else{
            after.next = root;
            after = after.next;
        }
        
        /** need to keep the root moving  */
        root = root.next;
    }
    
    /** end of the list should be null */
    after.next = null;
    /** the only reason we need head for after so we can attach it at the end of traversed 'before' list */
    before.next = afterHead.next;
    
    /* only reason we need before head so we can return head not just tail of 'before'*/
    return beforeHead.next;
};


let node = buildLinkedList([1,4,5,3,2,4,1,6])
console.log(partition(node, 3)); // 1,2,1,3,4,4,5,6

node = buildLinkedList([5,4,3])
console.log(partition(node, 3))
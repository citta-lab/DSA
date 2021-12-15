const { buildLinkedList } = require('./LinkedListII');

/** given node */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/** O(N) time and O(N) space using Dummy node */
const copy = (head) => {
    /** goal is to not alter head */
    let dummy = head;
    let newList = new ListNode(null);
    let cur = newList;

    while(dummy){
        let node = new ListNode(dummy.val);
        cur.next = node;
        dummy = dummy.next;
        cur = cur.next;
    }

    return newList.next;
}

/** O(N) time and O(N) space using callstack from recursion node */
const copyWithRecursion = head => {

    if(!head) return head;

    let newNode = new ListNode(head.val);
    newNode.next = copyWithRecursion(head.next);

    return newNode;
}


let list = buildLinkedList([1,2,3,4]);
let lsitTwo = copy(list);
console.log(lsitTwo); // 1,2,3,4
console.log(copyWithRecursion(list)); // 1,2,3,4



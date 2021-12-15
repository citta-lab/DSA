
/** given node */
function ListNode(val, next, prev) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.prev = (prev===undefined ? null: prev)
}

const copy = (head, preNode) =>{
    if(!head) return head;

    let newNode = new ListNode(head.val);
    newNode.prev = preNode;

    newNode.next = copy(head.next, newNode);
    return newNode;
}

const copyRecursive = head => {
    return copy(head, null);
}
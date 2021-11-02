
class ListNode {
    constructor(val=0){
        this.val = val;
        this.next = null;
    }
}

// 1->2->3->4
const dummy = new ListNode(null);
dummy.next = head;

let root = dummy.next;
while(root){
    size++
    root=root.next;
}

if(size === k){
    return head.next;
}

return dummy.next.next;
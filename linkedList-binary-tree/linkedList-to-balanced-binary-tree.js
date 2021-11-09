/** Convert given sorted ( ascending order ) linked list to balanced binary tree of same height */


/** 
 * O(Nlog N) time as N for linkedList and n/2 operations to find middle while making BST
 * O(log N) space from left/right BST parts 
 * */
const sortedListToBST = (head) => {
    /** split the linkedList at middle so middle will be root of tree */
    const left = head;
    const middle = findMiddle(head);

    const node = new TreeNode(middle.val);
    node.left = sortedListToBST(left);
    node.right = sortedListToBST(middle.next);

    return node;
}

const findMiddle = (head) => {
    if(!head) return null; 

    /** need pre to detach the linkedList before slow */
    let pre = null;
    let slow = head;
    let fast = head;

    while(fast){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    /** cuts the linkedList before slow */
    if(pre){
        pre.next = null
    }

    /** slow points to middle and rest of the right part of linkedList */
    return slow;
}
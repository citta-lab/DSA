









/** LinkedList node class */
class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

/** Helper function to build Node from Node Class */
const newNode = (nodeData) => {
    let node = new Node();
    node.data = nodeData;
    node.next = null;

    return node;
}

/** manual way of building linkedList from 1 --> 5 */
const manualLinkedListBuilder = () => {
    let head = newNode(1);
    head.next = newNode(2);
    head.next.next = newNode(3);
    head.next.next.next = newNode(4);
    head.next.next.next = newNode(5);

    return head;
}
//manualLinkedListBuilder();


const buildLinkedList = (values=[]) => {
    if(values.length < 1) return null;
    if(values.length < 2) return newNode(values[1]);

    let head = newNode(values[0]); /** need to start from 1st element */
    let newHead = head; /** need to catch hold of original head */
    for(let i=1; i<values.length; i++){
        newHead.next = newNode(values[i]);
        newHead = newHead.next;
    }

    return head;
}

// console.log(buildLinkedList([1,2,3,4,5]));

module.exports = {
    buildLinkedList,
    manualLinkedListBuilder
}


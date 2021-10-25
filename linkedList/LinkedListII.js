/** Similar to LinkedList class but instead of using data as property we will use val */

class Node {
    constructor(){
        this.val = 0;
        this.next = null;
    }
}

let newNode = (val) => {
    let node = new Node();
    node.val = val;

    return node;
}

const buildLinkedList = (values=[]) => {

    if(values.length < 1) return null;

    let head = newNode(values[0]);
    let newHead = head;

    for(let i=1; i<values.length; i++){
        let val = values[i];
        let node = newNode(val);
        head.next = node;
        head = head.next;
    }

    return newHead;
}

module.exports = {
    buildLinkedList
}
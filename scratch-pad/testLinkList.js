

class Node {
    constructor(){
        this.data = 0;
        this.next = null;
    }
}


const newNode = (data) => {
    let node = new Node();
    node.data = data;

    return node;
}

const build = (num) => {
    let node = newNode(1);
    let head = node;
    for(let i=2; i<= num; i++){
        node.next = newNode(i);
        node = node.next;
    }

    return head;
}

console.log(build(4))
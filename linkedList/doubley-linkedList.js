class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtEnd(value){
        let newNode = new Node(value);

        if(this.tail){
            /** add new node next to tail */
            newNode.prev = this.tail;
            newNode.next = this.tail.next; // which is null (i.e tail)

            /** make tail as before end */
            this.tail.next = newNode;
            
            /** make new node as tail */
            this.tail = newNode;
        }

        /** this means neither tail or head exist before */
        if(!this.tail){
            this.tail = newNode;
            this.head = newNode;
        }
    }

    insertAtStart(value){
        let newNode = new Node(value);

        /** already have head */
        if(this.head){
            /** add new node before head */
            newNode.next = this.head;
            newNode.prev = this.head.prev; // which is null (i.e head)

            /** update head to reference the new node */
            this.head.prev = newNode;

            /** make new node as head */
            this.head = newNode;
        }

        /** if no head, then this is the first element */
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
    }

    /** method to help adding new node and re-point the tail */
    insertNext(value){
        this.insertAtEnd(value);
    }

    removebyNode(node){
        if(!this.head && !this.tail) return null;
        
        if(this.head === node && this.tail === node ){
            this.head = null;
            this.tail = null;
            return;
        }

        if(this.head === node){
            
            let temp = this.head.next;
            
            this.head.next.prev = null;
            this.head = this.head.next;
            temp = null;
        }

        if(this.tail === node){
            let temp = this.tail.prev;

            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            temp = null;
        }

        let current = this.head.next;
        while(current !== node){
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        current.next = null;
        current.prev = null;

    }

    removeByValue(value){
        let newNode = new Node(value);
        this.removebyNode(newNode);
    }
}


let linkedList = new DoublyLinkedList();
linkedList.insertNext(4);
linkedList.insertNext(5);
linkedList.insertNext(6);

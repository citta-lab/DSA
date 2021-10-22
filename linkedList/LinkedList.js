class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function newNode(key) {
    var temp = new Node();
            temp.data = key;
            temp.next = null;
            return temp;
        }


        var head = newNode(1);
        head.next = newNode(2);
        head.next.next = newNode(3);
        head.next.next.next = newNode(4);
        head.next.next.next.next = newNode(5);

        console.log(head)


const move = () => {
    let odd = head;
    let even = head.next;
    let evenFirst = even;

    console.log("********* F ***********")
    console.log(odd.next);
    console.log(even.next);

   // odd.next = even.next;

    console.log("********** S **********")
    console.log(odd.next);
    console.log(even.next);

    console.log("********** T **********")
    odd = even.next;
    console.log(odd)
    console.log(odd.next);
   
    console.log(head)

}

move();
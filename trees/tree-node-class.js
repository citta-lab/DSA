/** Binary Tree Node Class */
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/** EXAMPLE ONE */
const ExampleOne = new Node(1);
ExampleOne.left = new Node(2);
ExampleOne.right = new Node(3);

const leftRoot = ExampleOne.left;
leftRoot.left = new Node(4);
leftRoot.right = new Node(5);

const rightRoot = ExampleOne.right;
rightRoot.left = new Node(6);
rightRoot.right = new Node(7);

/** EXAMPLE TWO */
const ExampleTwo = new Node(5);
ExampleTwo.left = new Node(3);
ExampleTwo.right = new Node(8);

const firstLeftRoot = ExampleTwo.left;
firstLeftRoot.left = new Node(1);
firstLeftRoot.right = new Node(4);

const firstRightRoot = ExampleTwo.right;
firstRightRoot.left = new Node(6);
firstRightRoot.right = new Node(10);

const firstLeftLeftRoot = firstLeftRoot.left;
firstLeftLeftRoot.left = new Node(0);
firstLeftLeftRoot.right = new Node(2);

const firstRightLeftRoot = firstRightRoot.left;
firstRightLeftRoot.right = new Node(7);

const firstRightRightRoot = firstRightRoot.right;
firstRightRightRoot.left = new Node(9);

//console.log(ExampleTwo);

module.exports = {
    Node, 
    ExampleOne,
    ExampleTwo
};


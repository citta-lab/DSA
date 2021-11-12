const { Node, ExampleOne, ExampleTwo } = require('./binary-tree-node-class');

/** ROOT -> LEFT -> RIGHT */
const preOrderRecursive = (root) => {
    console.log(root.data);
    if(root.left) preOrderRecursive(root.left);
    if(root.right) preOrderRecursive(root.right);
}

console.log(" ----- example one -----")
console.log(preOrderRecursive(ExampleOne)); // 1,2,4,5,3,6,7
console.log(" ----- example two -----")
console.log(preOrderRecursive(ExampleTwo));

const preOrderIterative = (root) => {
    const stack = [];

    while(true){

        while(root){
            console.log(root.data);
            stack.push(root);
            root = root.left;
        }

        if(stack.length <= 0) return;

        root = stack.pop();
        root = root.right;
    }

}


console.log(" ----- example one iterative -----")
console.log(preOrderIterative(ExampleOne)); // 4,2,5,1,6,3,7

console.log(" ----- example two iterative-----")
console.log(preOrderIterative(ExampleTwo));
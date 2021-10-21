const { Node, ExampleOne, ExampleTwo } = require('./tree-node-class');

/** LEFT --> RIGHT --> ROOT */
const postOrderRecursive = (rootNode) => {
    if(rootNode.left) postOrderRecursive(rootNode.left);
    if(rootNode.right) postOrderRecursive(rootNode.right);
    console.log(rootNode.data);
}

console.log(" ----- example one -----")
console.log(postOrderRecursive(ExampleOne)); // 4,5,2,6,7,3,1
// console.log(" ----- example two -----")
// console.log(postOrderRecursive(ExampleTwo)); // 0,2,1,4,3,7,6,9,10,8,5

const postOrderIterative = (root) => {
    const stack = [];

    while(true){

        while(root){
            stack.push(root);
            root = root.left;
        }

        if(stack.length <= 0) return 

        console.log(root.data);
        root = stack.pop();
        root = root.right;
        
    }
}

console.log(" ----- example one -----")
console.log(postOrderIterative(ExampleOne));
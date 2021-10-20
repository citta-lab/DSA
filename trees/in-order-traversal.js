const { Node, ExampleOne, ExampleTwo } = require('./tree-node-class');

/** LEFT --> ROOT --> RIGHT */
const inOrderRecursive = (rootNode) => {
    if(rootNode.left) inOrderRecursive(rootNode.left);
    console.log(rootNode.data);
    if(rootNode.right) inOrderRecursive(rootNode.right);
}

console.log(" ----- example one -----")
console.log(inOrderRecursive(ExampleOne)); // 4,2,5,1,6,3,7

console.log(" ----- example two -----")
console.log(inOrderRecursive(ExampleTwo));


const inOrderIterative = (rootNode) => {
    const stack = [];
    while(true){

        while(rootNode){
            stack.push(rootNode);
            rootNode = rootNode.left;
        }

        if(stack.length <= 0) return;

        rootNode = stack.pop();  
        console.log(rootNode.data);  
        rootNode = rootNode.right;
    }
}

console.log(" ----- example one -----")
console.log(inOrderIterative(ExampleOne)); // 4,2,5,1,6,3,7
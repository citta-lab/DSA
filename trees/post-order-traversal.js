const { Node, ExampleOne, ExampleTwo } = require('./tree-node-class');

/** ROOT --> LEFT --> RIGHT */
const postOrderRecursive = (rootNode) => {
    if(rootNode.left) postOrderRecursive(rootNode.left);
    if(rootNode.right) postOrderRecursive(rootNode.right);
    console.log(rootNode.data);
}

console.log(" ----- example one -----")
console.log(postOrderRecursive(ExampleOne)); // 4,5,2,6,7,3,1
console.log(" ----- example two -----")
console.log(postOrderRecursive(ExampleTwo)); // 0,2,1,4,3,7,6,9,10,8,5


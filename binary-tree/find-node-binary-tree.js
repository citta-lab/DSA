
const { buildTree } = require('./helper/BinaryTree');

const findNode = (root, targetNode) => {
    
    if(!root) return false;

    let leftFind = findNode(root.left, targetNode);
    let rightFind = findNode(root.right, targetNode);

    return root.val === targetNode || leftFind || rightFind ;
}

let tree = buildTree([1,2,3]);
console.log(findNode(tree, 2)); // true

tree = buildTree([4,9,0,5,1])
console.log(findNode(tree, 5)); // true

tree = buildTree([4,9,0,5,1])
console.log(findNode(tree, 11)); // false
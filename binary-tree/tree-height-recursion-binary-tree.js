const { buildTree } = require('./helper/BinaryTree');

const treeHeight = (root) => {
    
    if(!root) return 0;

    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);

    let maxHeight = Math.max(leftHeight, rightHeight);

    return 1 + maxHeight; 

}

let tree = buildTree([1])
console.log(treeHeight(tree)); // 1

tree = buildTree([1,2])
console.log(treeHeight(tree)); // 2

tree = buildTree([1,2,3])
console.log(treeHeight(tree)); // 2

tree = buildTree([4,9,0,5,1])
console.log(treeHeight(tree)); // 3



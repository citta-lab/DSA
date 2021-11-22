/** reverse binary tree  */
const { buildTree } = require('./helper/BinaryTree');

const reverseTree = (root) => {
    
    if(!root) return;

    let left = reverseTree(root.left);
    let right = reverseTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

let tree = buildTree([1,2,3]);
console.log(reverseTree(tree)); 

tree = buildTree([6,3,4,7,3,8,1]);
console.log(reverseTree(tree)); 

tree = buildTree([4,9,0,5,1])
console.log(reverseTree(tree)); 

tree = buildTree([4,9,0,5,1])
console.log(reverseTree(tree)); 
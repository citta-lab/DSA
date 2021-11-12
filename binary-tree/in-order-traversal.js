const { buildTree } = require('../trees/BinaryTree');


let result = [];
const inOrder = (root) => {
    if(root.left) inOrder(root.left);
    result.push(root.val)
    if(root.right) inOrder(root.right);
}


const inOrderIterative = (root) => {
    
    let result = [];
    let stack = [];

    while(true){
        while(root){
            stack.push(root);
            root = root.left;
        }

        if(stack.length <= 0) return result;
    
        root = stack.pop();
        result.push(root.val);
    
        root = root.right;
    }
}


let root = buildTree([1,2,3,4,5,6,7]);
inOrder(root);
console.log(result); // 4,2,5,1,6,3, 7

console.log(inOrderIterative(root)); // 4,2,5,1,6,3, 7


const { buildTree } = require('../trees/BinaryTree');

// in order traversal 

// const inOrder = (root, result=[]) => {
    
//     if(root.left) inOrder(root.left, result);
//     result.push(root.val);
//     if(root.right) inOrder(root.right, result);

//     return result;
// }

const InOrderIterative = (root, result=[]) => {
    const stack = [];


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

const preOrder = (root, result=[]) => {
    b
}



const root = buildTree([1,2,3,4,5,6,7]);
console.log(InOrderIterative(root))
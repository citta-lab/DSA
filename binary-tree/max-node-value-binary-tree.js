/** */

const { buildTree } = require('./helper/BinaryTree');


const maxNode = (root) => {
    
    if(!root) return -Infinity;

    let leftMax = maxNode(root.left);
    let rightMax = maxNode(root.right);

    return Math.max(root.val, leftMax, rightMax);
}

const maxNodeIterative = (root) => {
    let max = -Infinity;

    let cur = root;
    let stack=[cur];

    while(stack.length){
        let node = stack.pop();
        max = Math.max(max, node.val);

        if(node && node.left) stack.push(node.left);
        if(node && node.right) stack.push(node.right);
    }

    return max; 
}

const maxNodeRecursion = (root) => {
    return recursionHelper(root, -Infinity);
}

const recursionHelper = (root, max) => {
    
    if(!root) return null;

    max = Math.max(max, root.val);
    console.log(' root val : '+root.val+ " max : "+max);
    if(root && root.left) max = recursionHelper(root.left, max);
    if(root && root.right) max = recursionHelper(root.right, max);

    return max;
}

let tree = buildTree([1,2,3])
console.log(maxNode(tree)); //3
console.log(maxNodeIterative(tree)); // 3
console.log(maxNodeRecursion(tree)); // 3

tree = buildTree([4,9,0,5,1]);
console.log(maxNode(tree)); // 9
console.log(maxNodeIterative(tree)); // 9
console.log(maxNodeRecursion(tree)); // 9



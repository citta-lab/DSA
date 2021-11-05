/** build binary tree from given array */

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Main function to build binary tree
 * @param {Array} nums : array of numbers for building binary tree in level order  
 * @returns tree node
 */
const buildTree = (nums = []) => {
    return buildTreeHelper(nums, null, 0);
}

/**
 * @param {Array} nums : numbers to be used as node values 
 * @param {Node} parent : tree node 
 * @param {Number} position: numbers position in the array 
 * @returns tree node
 */
const buildTreeHelper = (nums, parent, position) => {
    parent = new Node(nums[position]);
    parent.left = new Node(nums[position+1]);
    parent.right = new Node(nums[position+2]);

    return parent;
}

console.log(buildTree([1,2,3]))




/** Build our first binary tree */
const parent = new Node(1);
const childOne = new Node(2); 
const childTwo = new Node(3);

/** making use of left/right directions to attach childrens */
parent.left = childOne;
parent.right = childTwo;

// console.log(parent);



const tree = (array) =>{
    let root;
    root = treeBuilder(array, null, 0);
    return root;
}

const treeBuilder = (array, root, position) => {


    if(position < array.length){
        let newNode = new Node(array[position]);
        root = newNode;

    root.left = treeBuilder(array, null, 2*position+1);
    root.right = treeBuilder(array, null, 2*position+2);
    }

    return root;
}

let node = tree([1,2,3,4,5,6,7]);


// root - left - right
const preOrder = (root, result=[]) => {
    result.push(root.val);
    if(root.left) preOrder(root.left, result);
    if(root.right) preOrder(root.right, result);
    return result;
}

// 4,2,5,1,6,3,7
const inOrder = (root, result=[]) => {
    if(root.left) inOrder(root.left, result);
    result.push(root.val);
    if(root.right) inOrder(root.right, result);

    return result;
}

const postOrder = (root, result=[]) => {
    if(root.left) postOrder(root.left, result);
    if(root.right) result.push(root.right.val);
    result.push(root.val);

    return result;
}

// let result = preOrder(node);
// console.log(result); // 1,2,4,5,3,6,7

// console.log(inOrder(node)); // 4,2,5,1,6,3,7

// console.log(postOrder(node)); 


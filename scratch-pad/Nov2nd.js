/** build binary tree from given array */

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

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
const preOrder = (root) => {
    
}
class Node {
    constructor(val = null){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const buildTree = (array) => {
    let root;
    root = buildTreeHelper(array, root, 0);
    return root;
}

const buildTreeHelper = (array, root, position) => {
    // array = [1,2,3]
    if(position < array.length){
        /** get first element and make it as root of the tree */
        let treeNode = new Node(array[position]); // 1 will become root
        root = treeNode; 

        /** add left node */
        root.left = buildTreeHelper(array, root.left, 2*position+1); // 1.left = buildTree(2)

        /** add right node */
        root.right = buildTreeHelper(array, root.right, 2*position+2); // 1.right = buildTree(3)
    }

    return root; 
}


// console.log(buildTree([1, 2, 3, 4, 5, 6]));
// console.log(buildTree([ 1, 2, 3, 4, 5, 6, 6, 6, 6 ]));

module.exports = {
    Node, 
    buildTree
}; 



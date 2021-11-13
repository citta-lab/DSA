/** If the given binary tree is COMPLETE find the depth of the tree */

const { buildTree } = require('./helper/BinaryTree');

const depth = (root) => {
    let cur = root;
    let count = 0;
    if(!root) return count;

    /** hence it is 'complete' tree, depth on both left and right side should be same */
    while(cur){
        cur = cur.left;
        count++
    }

    return count;
}

let tree = buildTree([1,2,3,4,5,6,7]);
console.log(depth(tree)); // 3

tree = buildTree([1,2,3]);
console.log(depth(tree)); // 2

tree = buildTree([1]);
console.log(depth(tree)); // 1

tree = buildTree([1,2,3,4,5,6,7,8,8,8,8,9,9,9,9,0,0,0,0,1,1,1,1]);
console.log(depth(tree)); // 5
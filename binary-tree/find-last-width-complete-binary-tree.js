/** If the given binary tree is COMPLETE find the maximum width of the tree */

const { buildTree } = require('./helper/BinaryTree');

const findWidth = (root) => {
    /** find the depth just doing O(log n) */
    const depth = treeDepth(root);
    
    /** gives total count of nodes as we used depth  */
    const totalNodes = Math.pow(2, depth) - 1;

    /** by lowering one level down in depth, we can calculate total nodes until that level */
    const totalNodesBeforeLastWidth = Math.pow(2, (depth-1)) - 1;

    /** the diff between total count and one depth lower total count will give last layer nodes */
    const width = totalNodes - totalNodesBeforeLastWidth;
    return width;
}

const treeDepth = (root) => {
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
console.log(findWidth(tree)); // 4

tree = buildTree([1,2,3]);
console.log(findWidth(tree)); // 2

tree = buildTree([1]);
console.log(findWidth(tree)); // 1

tree = buildTree([1,2,3,4,5,6,7,8,8,8,8,9,9,9,9,0,0,0,0,1,1,1,1]);
console.log(findWidth(tree)); // 16
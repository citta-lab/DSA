/** 
 * Given a valid binary search tree and a kth value which represents the K'th largest value in BST.
 * Example: if the BST has values ranging from 1 to 9 and k = 2 then k'th largest value in BST is
 * 8 as 9 is the first largest and 8 is the second largest.
 * 
 * Hint: Remember it is BST. So values are sorted and all we need to do is apply the correct traversal.
 */

const { buildTree } = require('./helper/BinaryTree');

const findKthLargestValue = (tree, k ) => {

    /** 
     * hence it's a BST, all values on left of nodes are less than
     * root and all values on right are greater. So if we apply 
     * INORDER TRAVERSAL ( left, root, right) we will have sorted array
     * in ascending order. Then we can simply return value at size-k piosition */

    const result = inOrderTraversal(tree); // returns array;
    const size = result.length;
    const kThPositionFromTail = size - k;

    return result[kThPositionFromTail];
}

const inOrderTraversal = (tree, array=[]) => {
    
    /** left, root, right */
    
    let stack = [];
    let cur = tree;

    while(cur || stack.length){
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }

        /** now we have all left nodes in, so process root and then go to right */
        let node = stack.pop();
        array.push(node.val);

        cur = node.right; // this will rerun the while loop with right node as cur
    }

    return array;
}

let tree  = buildTree([5,2,6,1,3]);
console.log(findKthLargestValue(tree, 2));  // 5



tree = buildTree([15,5,20,2,5,17,22,1,3]);
console.log(findKthLargestValue(tree, 2)) // 20

tree = buildTree([15,5,20,2,5,17,22,1,3]);
console.log(findKthLargestValue(tree, 3)) // 17
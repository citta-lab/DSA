/**  
 * Find the minimum path sum of the binary tree. 
 * 
 * This problem is similar to maxPathSum problem we have solved in another case. For more information on 
 * please refer https://github.com/citta-lab/DSA/blob/main/binary-tree/max-path-sum-binary-tree.js
 * 
 * */


const { buildTree } = require('./helper/BinaryTree');

const minPathSum = (root) => {
    let minSum = Infinity;

    let preOrder = (root) => {
        if(!root) return 0;

        let left = preOrder(root.left);
        let leftMin = Math.min(left, 0);

        let right = preOrder(root.right);
        let rightMin = Math.min(right, 0);

        let sum = leftMin + root.val + rightMin;
        minSum = Math.min(sum, minSum);

        return Math.min((leftMin + root.val), (rightMin + root.val))
    }

    preOrder(root);
    return minSum;
}

let tree = buildTree([1,2,3]);
console.log(minPathSum(tree)); // 1

tree = buildTree([-1,-2,-3]);
console.log(minPathSum(tree)); // -6

tree = buildTree([-1,-2,-3, 4, 1, -5, 5]);
console.log(minPathSum(tree)); // -11

tree = buildTree([1,2,-3, 4, 1, -5, -5]);
console.log(minPathSum(tree)); // -13
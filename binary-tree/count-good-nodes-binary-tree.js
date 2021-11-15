/** Given a binary tree root, a node X in the tree is named good if in
 * the path from root to X there are no nodes with a value greater than 
 * X.Return the number of good nodes in the binary tree. 
 * 
 * Input: root = [3,1,4,3,null,1,5]
 * Output: 4
 * 
 * leetcode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * */

const { buildTree } = require('./helper/BinaryTree');

/** Recursion  */

/** O(N) time and O(N) space */
 var goodNodes = function(root) {
    return helper(root, root.val);
};

const helper = (root, max) => {
    let count = 0; 
    
    if(!root) return count;
    
    if(root.val >= max) {
        count++;
        max = root.val;
    }
    
    if(root && root.left) count += helper(root.left, max, count);
    if(root && root.right) count += helper(root.right, max, count);
    
    return count;
}


/** ITERATIVE */
var goodNodesIterative = function(root) {
    
    let cur = root;
    
    let stack = [];
 
    /** we need to track maxSize along with node so we can compare against right and left node of cur */
    stack.push([cur, -Infinity]);
    
    let count = 0;
    
    while(stack.length){
        let pair = stack.pop();
        
        let [node, max] = pair;

        if(node.val >= max){
            count++
            max = Math.max(max, node.val);
        }
        
       if(node && node.right) stack.push([node.right, max]);
       if(node && node.left) stack.push([node.left, max]);
    }
    
    return count;
};


/** (FAILS but good to know why): Iterative  */
var goodNodesFails = function(root) {
    
    let cur = root;
    
    let stack = [];
    stack.push(cur);
    
    let result = [];
    
    let max = -Infinity;
    while(stack.length){
        let node = stack.pop();
        if(node){
            
            if(node.val >= max){
                result.push(node.val);
                max = Math.max(max, node.val);
            }
        
            stack.push(node.right); // right goes to bottom of stack (i.e 8)
            stack.push(node.left); // left goes to top of right (i.e 10)

            /** 
             * when node is popped for left, max will change to 10 and it will fail when
             * compared against 8. So we need to have max set with node and reference that
             * i.e stack.push([node, -Infnfinity]) and stack.push([node.left, max]) etc
             */
        }
    }

    return result.length;
    
};

let tree = buildTree([3,1,4,3,null,1,5]);
console.log(goodNodes(tree)); // 4
console.log(goodNodesIterative(tree)); // 4
console.log(goodNodesFails(tree)); // 4 ( without max with stack)

tree = buildTree([3,3,null,4,2]);
console.log(goodNodes(tree)); // 3
console.log(goodNodesIterative(tree)); //3
console.log(goodNodesFails(tree)); // 4 ( without max with stack)

tree = buildTree([1]);
console.log(goodNodes(tree)); // 1
console.log(goodNodesIterative(tree)); // 1
console.log(goodNodesFails(tree)); // 1 ( without max with stack)

tree = buildTree([2,null,4,10,8,null,null,4]);
console.log(goodNodes(tree)); // 4
console.log(goodNodesIterative(tree)); // 4
console.log(goodNodesFails(tree)); // 2 ( without max with stack) <--- FAILS


/**
 * 987. Vertical Order Traversal of a Binary Tree
 * 
 * IMPORTANT : Not same as 314. Binary Tree Vertical Order Traversal  
 * but slightly different as we need also need to focus on ordering
 * the values by column, row and value by itself. 
 * 
 * Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
 * For each node at position (row, col), its left and right children will be at positions 
 * (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).
 * The vertical order traversal of a binary tree is a list of top-to-bottom orderings 
 * for each column index starting from the leftmost column and ending on the rightmost column. 
 * There may be multiple nodes in the same row and same column. In such a case, sort these nodes
 * by their values.
 * 
 * Return the vertical order traversal of the binary tree.
 * 
 * leetcode-question:987
 * leetcode:https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * ref: 314 
 * 
 * Hint:
 * - Time: Nlog(N) and Space:O(N)
 * - O(NLogN) mainlky because of the sorting. However if we use MinHeap we can avoid sorting
 * the values but on an average we will still have O(NlogN)
 * - Problem is similar to 314 however in this case we need to focus on sorting values which
 * will be stored in hashmap i.e `{colIndex: [values]}` where values should be sorted by
 * column, and then row and then values when we have it ins same col/row. 
 * - In othercases values should be sorted by column
 * 
 * 
 */

 var verticalTraversal = function(root) {
    
    let map = new Map();
    let queue = [[root, 0, 0]];
    
    /** we cant use hashMap to have col as key and node as value as we would
    need to consider sorting based on column and row. Hence the array to hold
    values and it's respective row/col. Once sorted we can use hashMap. */
    let list = []; 
    
    /** we are processing all the nodes and list has it all */
    while(queue.length){
        const nodeAndCoordinates = queue.shift();
        const [node, row, col] = nodeAndCoordinates;
        
        if(node && node.left) queue.push([node.left, row+1, col-1]);
        if(node && node.right) queue.push([node.right, row+1, col+1]);
        list.push([node.val, row, col])
    }
    
    console.log(list); // [ [ 3, 0, 0 ], [ 9, 1, -1 ], [ 20, 1, 1 ], [ 15, 2, 0 ], [ 7, 2, 2 ] ]
    
    /** now sort based on our sorting rule */
    list.sort(compare);
    
    console.log(list); // [ [ 9, 1, -1 ], [ 3, 0, 0 ], [ 15, 2, 0 ], [ 20, 1, 1 ], [ 7, 2, 2 ] ]

    
    /** now we have sorted list, lets use hashmap to process them based on col */
    for(let triplets of list){
        const [nodeVal, row, col] = triplets;
        
        if(!map.has(col)) map.set(col, []);
        map.get(col).push(nodeVal);
    }
    
    console.log(map) ; // Map(4) { -1 => [ 9 ], 0 => [ 3, 15 ], 1 => [ 20 ], 2 => [ 7 ] }
    
    return [...map.values()]
};


/** compare by col first, then row, then value */
function compare(a, b){
    /** if we have values in same col and row then we need to compare by values */
    /** same column */
    if(a[2] - b[2] === 0){
        /** same row */
        if(a[1] - b[1] === 0){
            return a[0] - b[0];
        }
    }
    
    /** otherwise we stick with column index compare */
    return a[2] - b[2];
}
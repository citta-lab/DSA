/** 
 * 
 * 314. Binary Tree Vertical Order Traversal 
 * 
 * Given the root of a binary tree, return the vertical order traversal of its nodes' values. 
 * (i.e., from top to bottom, column by column). If two nodes are in the same row and column, 
 * the order should be from left to right. 
 * 
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 * 
 * Input: root = [3,9,8,4,0,1,7]
 * Output: [[4],[9],[3,0,1],[8],[7]]
 * 
 * 
 * leetcode-question:314
 * leetcode: https://leetcode.com/problems/binary-tree-vertical-order-traversal/
 * company: FACEBOOK
 * 
 * Hint:
 * - Optimal: Time:O(N) and Space: O(N)
 * - pre-Order using queue
 * - use hash to store key:node.val which we can sort later
 * - Initialize queue with [root, 0] where 0 is column index of rootnode
 * - left node will be -1 index with respect to root and right will be +1 with respect to root
 * 
 * - Note: we could do with DFS but then we need to sort by row and col. Similar to this 
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/. 
 * 
 * Followup: What if we need to also sort by values rather than just the index ? example: if
 * there are multiple nodes in the same column and row then we need to sort by thier value.
 * then we need to solve https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * */

/** BruteForce with SORTING : Time:O(nlogN) and Space: O(N) */
var verticalOrder = function(root) {
    
    let hash = {}
    let queue = [[root, 0]];
    
    while(queue.length){
        let pair = queue.shift();
        const [ node, columnIndex ] = pair;
        
        if(node){
            if(!hash[columnIndex]) hash[columnIndex] = [];
            hash[columnIndex].push(node.val);
            
            queue.push([node.left, columnIndex-1]);
            queue.push([node.right, columnIndex+1]);
        }
    }
    
    console.log(hash); /** { '0': [ 3, 15 ], '1': [ 20 ], '2': [ 7 ], '-1': [ 9 ] } */
    
    
    let result = Object.keys(hash)
    /** just sort() will fail when we have '-1' and '-2' index */ 
    .sort((a,b) => parseInt(a) - parseInt(b))
    .map((key) => hash[key]);
    
    
    return result
    
};


/** Optimized without SORTING: Time:O(N) and Space:O(N) */
var verticalOrder = function(root) {
    
    if(!root) return []
    
    let hash = {}
    let queue = [[root, 0]];
    
    /** helpful to avoid sort use at the end*/
    let minColumn = 0;
    let maxColumn = 0;
    
    while(queue.length){
        let pair = queue.shift();
        const [ node, columnIndex ] = pair;
        
        if(node){
            if(!hash[columnIndex]) hash[columnIndex] = [];
            hash[columnIndex].push(node.val);
            
            /** keep track of min and max index values */
            minColumn = Math.min(minColumn, columnIndex);
            maxColumn = Math.max(maxColumn, columnIndex);
            
            queue.push([node.left, columnIndex-1]);
            queue.push([node.right, columnIndex+1]);
        }
    }
    
    console.log(hash); /** { '0': [ 3, 15 ], '1': [ 20 ], '2': [ 7 ], '-1': [ 9 ] } */
    
    
    /** using this to sort instead of sort function on hash */
    let result = [];
    for(let i=minColumn; i<=maxColumn; i++){
        result.push(hash[i]);
    }
    
    
    return result
    
};
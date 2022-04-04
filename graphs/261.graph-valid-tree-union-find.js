/** 
 * 261. Graph Valid Tree
 * 
 * You have a graph of n nodes labeled from 0 to n - 1. 
 * You are given an integer n and a list of edges where edges[i] = [ai, bi] 
 * indicates that there is an undirected edge between nodes ai and bi in the graph.
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 * 
 * Example:
 * Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 * Output: true
 *
 * Input: n=5, edges = [[0,1],[0,4],[1,4],[2,3]]
 * Output: false
 * 
 * Input: n=4, edges = [[0,1],[2,3]]                <--- should have n-1 edges test 
 * Output: false
 *
 *
 * leetcode-question:261
 * leetcode:https://leetcode.com/problems/graph-valid-tree/
 * 
 * 
 * Hint: 
 * - can use DFS or Union Find
 * - we should have n-1 edges ( two nodes need to make an edge)
 * 
*/

/** Time: O(N) Space: O(N) */
var validTree = function(n, edges) {
    
    /** Step 1: The graph must contain n - 1 edges.This will solve example scenario where n=2 but edges=[[0,1],[2,3]] */
    if( n-1 !== edges.length ) return false;
    
    let count = n;
    
    /** takes O(N) time and space */
    let parent = [];
    for(let i=0; i<n; i++){
        parent.push(i);
    }
    
    /** path compression so time: O(log N) */ 
    const findParent = (node, parent) => {
        if(node === parent[node]) return node;
        return parent[node] = findParent(parent[node], parent);
    }
    
    /** time: O(logN) as it depends on findParent which takes O(logN)*/
    const union = (nodeOne, nodeTwo) => {
        let parentOne = findParent(nodeOne, parent);
        let parentTwo = findParent(nodeTwo, parent);
        
        if(parentOne !== parentTwo){
            parent[parentOne] = parentTwo;
            return true;
        }
        
        return false;
    }
    
    for(let edge of edges){
        const [nodeOne, nodeTwo] = edge;
        let result = union(nodeOne, nodeTwo);
        if(!result) return false;
    }
    
    return true;
};

let n = 5;
let edges = [[0,1],[0,2],[0,3],[1,4]];
console.log(validTree(n, edges)); // true

n = 5
edges = [[0,1],[1,2],[2,3],[1,3],[1,4]];
console.log(validTree(n, edges)); // false

n = 4
edges = [[0,1],[2,3]];
console.log(validTree(n, edges)); // false

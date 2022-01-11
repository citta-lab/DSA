/** 
 * 
 * Find if Path Exists in Graph
 * 
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
 * The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes
 * a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, 
 * and no vertex has an edge to itself.You want to determine if there is a valid path that exists from vertex start to vertex end. 
 * 
 * Given edges and the integers n, start, and end, return true if there is a valid path 
 * from start to end, or false otherwise.
 * 
 * Example:
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
 * - 0 → 1 → 2
 * - 0 → 2
 * 
 * leetcode: https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/3893/
 * 
 */

/** time : O(N) and space : O(N) from parent array */
 var validPath = function(n, edges, start, end) {
    let parent = [];
    for(let i=0; i<n; i++){
        parent.push(i);
    }
    
    /** O(logN) as we are using path compression using memoization */
    let findParent = (node, parent) =>{
        if(node === parent[node]) return node;
        return parent[node] = findParent(parent[node], parent);
    }
    
    /** O(logN) as it depends on findParent  */
    let union = (nodeA, nodeB) => {
        let parentA = findParent(nodeA, parent);
        let parentB = findParent(nodeB, parent);
        if(parentA !== parentB){
            parent[parentB] = parentA;
        }
    }
    
    /** O(logN) as it is also depends on findParent */
    let isConnected = (start,end, parent) => {
        /** need to use findParent as parent might not have the root parent value for all nodes */
        return findParent(start, parent) === findParent(end, parent);
    }
    
    /** need to run on all edges as its is not adjList which are pre-processed */
    for(let edge of edges){
        const [start, end] =edge;
        union(start, end);
    }
    
    /** test data */
    console.log(parent)
    console.log(isConnected);
    
    return isConnected(start, end, parent);
};

let n = 3;
let edges = [[0,1],[1,2],[2,0]]; 
let start = 0; 
let end = 2;
console.log(validPath(n,edges,start,end)); // true

n=6;
edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
start = 0;
end = 5;
console.log(validPath(n,edges,start,end)); // false
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
 * leetcode-question:261
 * leetcode:https://leetcode.com/problems/graph-valid-tree/
 * 
 * 
 * Hint: can use DFS or Union Find
 * 
*/

/** Time: O(N+E) Space: O(N+E) */
var validTree = function(n, edges) {
    let adjList = {};
    
    for(let edge of edges){
        const [src, dst] = edge;
        if(!adjList[src]) adjList[src] = [];
        if(!adjList[dst]) adjList[dst] = [];
        
        adjList[src].push(dst);
        adjList[dst].push(src);
    }
    
    // console.log(adjList);
    let visited = new Set();
    let dfs = (src, visited, parent) => {
        
        if(visited.has(src)){
            return false;
        }
        
        visited.add(src);
        
        let children = adjList[src];
        for(let child of children || []){
            
            /** if we find parent of the child then we can skip */
            if(child === parent){
                continue;
            }
            
            let result = dfs(child, visited, src);
            if(!result) return false;
        }
        
        return true;
    }
    
    let result = dfs(0, visited, -1);
    if(!result) return false;
    
    /** we need this to address if there are two unconnected graphs are given */
    return visited.size === n;
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
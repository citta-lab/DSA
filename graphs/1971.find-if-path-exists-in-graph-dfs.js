/**
 * 1971. Find if Path Exists in Graph
 * 
 * There is a bi-directional graph with n vertices, where each vertex is 
 * labeled from 0 to n - 1 (inclusive). The edges in the graph are 
 * represented as a 2D integer array edges, where each edges[i] = [ui, vi] 
 * denotes a bi-directional edge between vertex ui and vertex vi.
 * Every vertex pair is connected by at most one edge, and no vertex has 
 * an edge to itself.
 * You want to determine if there is a valid path that exists from vertex 
 * source to vertex destination.
 * 
 * Given edges and the integers n, source, and destination, return true 
 * if there is a valid path from source to destination, or false otherwise.
 * 
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
 * - 0 → 1 → 2
 * - 0 → 2
 * 
 * leetcode:https://leetcode.com/problems/find-if-path-exists-in-graph/
 * leetcode-question:1971
 * 
 * Hint:
 * - DFS 
 * - build bi-directional adjList
 * - have visited 
 * 
 * IMP: with large data TLE ( test case 24 ) even with optimization
 */

 var validPath = function(n, edges, source, destination) {
    
    let adjList = new Map();
    for (const [src, dst] of edges) {
        if(!adjList.has(src)) adjList.set(src, []);
        if(!adjList.has(dst)) adjList.set(dst, []);
        
        adjList.get(src).push(dst);
        adjList.get(dst).push(src);
    }
    
    console.log(adjList);
    
    let visited = new Set();
    
    function dfs(adjList, source, destination, visited){
        
        if(source === destination) return true
        
        if(visited.has(source)) return false;
        visited.add(source);
        
        let children = adjList.get(source);
        for(let child of children ){
            let result = dfs(adjList, child, destination, visited);
            if(result) return true;
        }
        
        return false;
    }
    
    return dfs(adjList, source, destination, visited);
};
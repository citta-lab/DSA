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
 * other solution: https://leetcode.com/explore/learn/card/graph/620/breadth-first-search-in-graph/3894/discuss/1458961/Javascript-BFS-approach-using-queue
 * 
 */

 var validPath = function(n, edges, start, end) {
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
    let bfs = (start, end, adjList) => {
        
        let queue = [];
        queue.push(start);
       
        while(queue.length){
            let size = queue.length;
            
            for(let i=0; i<size; i++){
                
                let node = queue.shift();
                
                /** keep going until we find true or empty queue */
                if(visited.has(node)){
                    continue;
                }
                
                /** 
                this is to prevent further visit to deeper nodes once we found the end node value
                FATAL ERROR: NewSpace::Rebalance Allocation failed - JavaScript heap out of mem 
                */ 
                if(visited.has(end)) {
                    return true;
                }
                
                visited.add(node);
                
                if(node === end){
                    return true;
                }
                
                let children = adjList[node];
                for(let child of children){
                     queue.push(child);
                }
            }
        }
        
        return false;
    }
    
    // console.log(visited)
    return bfs(start, end, adjList);
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
/** 1059. All Paths from Source Lead to Destination 
 * 
 * Given the edges of a directed graph where edges[i] = [ai, bi] indicates there is 
 * an edge between nodes ai and bi, and two nodes source and destination of this graph,
 * determine whether or not all paths starting from source eventually, end at destination, 
 * that is: At least one path exists from the source node to the destination node 
 * 
 * If a path exists from the source node to a node with no outgoing edges, 
 * then that node is equal to destination. The number of possible paths from source to destination
 * is a finite number. 
 * 
 * Return true if and only if all roads from source lead to destination. 
 * 
 * Example:
 * Input: n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2
 * OutPut: false
 * 
 * Input: n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3
 * Output: false
 * 
 * Input: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
 * Output: false
 * 
 * leetcode-question:1059
 * lettcode:https://leetcode.com/problems/all-paths-from-source-lead-to-destination/
 * another solution: https://leetcode.com/problems/all-paths-from-source-lead-to-destination/discuss/1294292/Simple-JavaScript-DFS-beats-100
 * */

 var leadsToDestination = function(n, edges, source, destination) {
    let adjList = {};
    for(let edge of edges){
        const [src, dst] = edge;
        if(!adjList[src]) adjList[src]=[];
        if(!adjList[dst]) adjList[dst]=[];
        
        /** 
          an outgoing edge from destination means it has path from
          destination which disqualifies the given condition "all 
          path must go to destination". Also it could be self loop.

          see last two examples at the end
          */
        if(src === destination){
            return false;
        }
        
        adjList[src].push(dst);
    }
    
    console.log(adjList);
    
    let visited = new Set();
    
    let dfs = (src, dst, visited) => {
        /** cycle detection */
        if(visited.has(src)){
            return false;
        }
        
        if(src === dst){
            return true;
        }
        
        visited.add(src);
        
        /** if we didnt find destination and processing node which doesnt have path means we cant go to destination */
        if(!adjList[src] || adjList[src].length < 1){
            return false
        }
        
        let children = adjList[src];
        for(let child of children){
            let result = dfs(child,destination, visited);
            if(!result) return result;
        }
        
        /** backtrack the visited node so we can process next side */
        visited.delete(src);       
        return true;
    };
    
    let result = dfs(source, destination, visited);
    // console.log(result)
    if(!result) return result;
    return true;
};

let n = 3;
let edges = [[0,1],[0,2]];
let source = 0;
let destination = 2;
console.log(leadsToDestination(n, edges, source, destination)); // false

n = 4;
edges = [[0,1],[0,3],[1,2],[2,1]];
source = 0;
destination = 3;
console.log(leadsToDestination(n, edges, source, destination)); // false

/** self loop  */
n = 2;
edges = [[0,1],[1,1]];
source = 0;
destination = 1;
console.log(leadsToDestination(n, edges, source, destination)); // false

/** destination is not the end i.e 0->1->2->3->4 but src=1 and destination =3 */
n = 5;
edges = [[0,1],[1,2],[2,3],[3,4]];
source = 1;
destination = 3;
console.log(leadsToDestination(n, edges, source, destination)); // false

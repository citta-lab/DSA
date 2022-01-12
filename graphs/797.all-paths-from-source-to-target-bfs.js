/** 
 * 
 * 797. All Paths From Source to Target 
 * 
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
 * find all possible paths from node 0 to node n - 1 and return them in any order.
 * The graph is given as follows: graph[i] is a list of all nodes you can visit 
 * from node i (i.e., there is a directed edge from node i to node graph[i][j]). 
 * 
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 * 
 * leetcode-question:797
 * leetcode:https://leetcode.com/problems/all-paths-from-source-to-target/
 * 
 * DO DFS WITH BACKTRACKING ( easier )
 * 
 * */

/** Time Complexity: O(2^N * N) Space:  O(2^N * N) */
/** N nodes graph can have maxium of 2^N-1 - 1 paths and we have N nodes so
it will be 2^N-1 - 1 * N = O(2^N * N)*/
var allPathsSourceTarget = function(graph) {
    
    let queue = [];
    let path = [0];
    
    // queue.push(0); instead we are pushing paths and take the last item as node while processing 
    queue.push(path); 
    
    let target = graph.length-1;
    
    let result = [];
    
    while(queue.length){

            let nodePath = queue.shift();
            // take last element [0,1] take 1
            const node = nodePath[nodePath.length-1]; 
            
            let children = graph[node];
            for(let child of children || []){
                let tempPath = [...nodePath];
                tempPath.push(child);
                
                if(child === target){
                    result.push([...tempPath]);
                }
                
                queue.push(tempPath)
            }
    }
    
    return result;
};

let graph = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph)); // [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
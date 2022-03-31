/** 
 *
 *  547. Number of Provinces ( DFS ) 
 * 
 * also called as Friend Circle problem 
 * 
 * Given an two dimentional array of water ( 0 ) and land ( 1 ) calculate number of
 * provinces.
 * 
 * Important:
 * This is just a different variation of unidrectional component count graph problem.
 * However the given data is represnted in two dimentional array and is still a unidirectional.
 * 
 * Use:
 * We will use DFS as we can go as deep as we can with in a island and also problem is
 * not about SHORTEST path. 
 * 
 * LEET CODE QUESTIONS:
 * https://leetcode.com/problems/number-of-islands/submissions/
 * https://leetcode.com/problems/number-of-provinces/solution/ 
 * 
 * HINT: <------ IMP
 * - Dont use Matrix directly in DFS
 * - Draw the node from given matrix so we need to build adjList 
 * - Read the problem carefully, the given two dimentional array doesnt represent the node but the 
 * node's corresponding EDGES. If we overlook and implment similar logic like in island then this problem will
 * fail for example data set [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]. Hence we need to iterate over the m*n
 * matrix ( edges ) to form a graph, then apply DFS. 
 * 
 * Alternatively,
 * Union Find approach is better in this case as Union find can be applied on to edges without the graph data structure
 * conversion. https://github.com/citta-lab/DSA/blob/c3275aed69a8f41d7da09d83ace90436ba448b81/graphs/provinces-union-find.js
 * 
 */

 /** given m*n grid of water/land where 1 = land and 0 = water */
 const grid = [
     [1,0,0,1],
     [0,1,1,0],
     [0,1,1,1],
     [1,0,1,1]
    ];


var findCircleNum = function(isConnected) {
    let visited = new Set();
    let count = 0; /** province count */
    
    /** hence given co-ordinates represents node's edges, we need graph for dfs */
    const graph = buildGraph(isConnected); /** example: graph = { '0': [ 0, 1 ], '1': [ 0, 1 ], '2': [ 2 ] } */
    
    for(let node in graph){
        let result = dfs(node, graph, visited);
        if(result) count += 1;
    }

    return count;
};


function dfs(node, graph, visited){
    /** key's are stored as string vs key values are stored as number inside an array */
    const intNodeV = parseInt(node);
    if(visited.has(intNodeV)) return false;
    visited.add(intNodeV);
    
    const children = graph[node];
    for(let child of children){
         dfs(child, graph, visited); 
    }
    
    /** if all is well return true so we can count */
    return true;
}


const buildGraph = (edges, graph={}) => {
    /** loop over m*n edges */
    for(let i=0; i<edges.length; i++){
        for(let j=0; j<edges[0].length; j++){
            
            const value = edges[i][j];
            /** only calculate if it's land */
            if(value === 1 ){
                /** initialize index's as node values whenever we find land if it's not done already */
                if(!graph[i]) graph[i] = []
                if(!graph[j]) graph[j] = []

                /** (optimization) : only push j value to i, if we push i to j as well then we will have two entries  */
                if(i !== j){
                     graph[i].push(j);
                }
            }
        }
    }
    
    return graph;
}

console.log(findCircleNum(grid)); // 1 ( if we get 4 then wrong )
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3
console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]])); // 1 

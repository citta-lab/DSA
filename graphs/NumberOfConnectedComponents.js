/** Given n nodes and edges for undirected graph find the number of 
 * components and Return the number of connected components in the graph.
 * (i.e) Number of Connected Components in an Undirected Graph. 
 * 
 * Important: Dont overlook why they have given "n" nodes with edges. 
 */
var countComponents = function(n, edges) {
    
    let count = 0;
    
    /** 
     * Step 1:
     * hence we have n as node size, we can initialize the graph 
     * to n keys with [] value. So it would look like 
     * graph = { 0:[], 1: [], 2:[]} if n = 3
     * */
    const emptyGraph = buildEmptyGraph(n);

    /**
     * Step 2:
     * Follow similar or usual step where we build graph from edges
     * while taking previously built graph as input
     */
    const graph = buildGraph(edges, emptyGraph);
    
    const visited = new Set();
    for(let node in graph){
        const result = dfs(node, graph, visited);
        /** important to check for result if you use true/false instead of 1/0 as return in dfs */
        if(result) count += 1; 
    }
    
    return count;
};


const dfs = (node, graph, visited) => {
    
    /** 
     * Set has string value as keys and array of numbers as values.
     * so lets either convert it to int / number or string.
     */
    const parseNode = parseInt(node);
    
    /** hence it's undirectional we need to watch out for visited nodes */
    if(visited.has(parseNode)) return 0;
    visited.add(parseNode);
 
    /** each graph node has children nodes array, so lets process them */
    const children = graph[node];
    for(let child of children){
        dfs(child, graph, visited);
    }
    
    return 1
}

// Step 1: Empty graph of size. Hence we start with 0, i should be less than size
const buildEmptyGraph = (size, graph={}) => {
    for(let i=0; i<size; i++){
        graph[i] = [];
    }
    
    return graph;
}

// Step 2: Take empty graph and add edges
const buildGraph = (edges, graph={}) => {
    for(let i=0; i<= edges.length-1; i++){
        const [ key, value] = edges[i];
        if(!graph[key]) graph[key] = [];
        if(!graph[value]) graph[value] = [];
        
        graph[key].push(value);
        graph[value].push(key);
    }
    return graph;
}
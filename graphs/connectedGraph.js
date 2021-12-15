/** given graph find if the graph is connected ( all vertex's are connected to each other) */

 /** given data */
 const graph = {
    3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
};

const isConnected = (graph) => {
    let arr = [];
    let visited = new Set();
    dfs(0, graph, arr, visited);

    for(let i=0; i<arr.length; i++){
        if(!arr[i]){
            return false;
        }
    }

    return true;
}

const dfs = (node, graph, arr, visited) => {

    // if(visited.has(node)){
    //     continue;
    // }

    visited.add(node);
    arr[node] = true;

    let children = graph[node] || [];
    for(let child of children){
        dfs(child, graph, arr, visited)
    }
};

console.log(isConnected(graph))
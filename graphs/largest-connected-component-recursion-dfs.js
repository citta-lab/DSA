/** 
 * Given adjacencyList of undirected graph, return largest connected component size. Connected
 * components are formed by connecting one or more vertices / node 
 * 
 * iterative solution: https://github.com/citta-lab/DSA/blob/3dd7a17bb808f52c20f9df9bc40a9bdd0ac5dd68/graphs/largest-connected-component-iterative-dfs.js
 * */
let adjacencyList = {
    3: [],
    4: [6],
    6: [4,5,7,8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}

const longestConnectedComponent = (adjacencyList) => {

    let visited = new Set();
    let maxSize = 0;
    for(let node in adjacencyList){
        let size = dfsRecursion(node, adjacencyList, visited);
        maxSize = Math.max(maxSize, size);
    }

    return maxSize;
}

const dfsRecursion = (source, adjacencyList, visited) => {
    let count = 0;
    
    if(visited.has(parseInt(source))) return 0;
    visited.add(parseInt(source));

    count++ /** we are processing the node so coutning for size  */
    for(let child of adjacencyList[source]){
        count = count + dfsRecursion(child, adjacencyList, visited);
    }

    return count;
}

console.log(longestConnectedComponent(adjacencyList)); // 5
adjacencyList = { 1: [2, 3], 2: [1], 3: [1]};
console.log(longestConnectedComponent(adjacencyList)); // 3
adjacencyList = { 1: [], 2: [], 3: []};
console.log(longestConnectedComponent(adjacencyList)); // 1
adjacencyList = { 1: [2, 3], 2: [1,3], 3: [1,2]};
console.log(longestConnectedComponent(adjacencyList)); // 3
adjacencyList = { 1: [2], 2: [3], 3: [4], 4: [5], 5: [6], 6: []};
console.log(longestConnectedComponent(adjacencyList)); // 6

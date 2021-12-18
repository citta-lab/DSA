/** Given the adjacency list please return the connected components count. 
 * Connected components are nothing but nodes/vertices connected to each other.
 * 
 * Answer: 3
 * */

// given data
const adjacencyList = {
    3: [],
    4: [6],
    6: [4,5,7,8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}

const connectedComponents = (adjacencyList) => {
    let visited = new Set();
    let count = 0;
    for(let node in adjacencyList){
        let result = recursionHelper(node, adjacencyList, visited);
        if(result) count++
    }
    return count;
};

const recursionHelper = (source, adjacencyList, visited) => {
    
    let parseSource = parseInt(source);

    if(visited.has(parseSource)) return false;
    visited.add(parseSource);

    for(let child of adjacencyList[source]){
        recursionHelper(child, adjacencyList, visited);
    }

    return true;
};

console.log(connectedComponents(adjacencyList));
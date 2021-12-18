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
        /** 
         * imp: check visited so we avoid double counting. Example: { 1: [2], 2: [1] } we can see
         * 1 and 2 are connected to each other. If we dont check for visited here then BFS will 
         * return after processing { 1: [2] } and count will increse to 1. When we pick up { 2: [1] }
         * bfs will check again and returns true once processed which will increse counter to 2. So
         * by adding early check we can avoid and run bfs only once per component */
        if(!visited.has(parseInt(node))){
            let result = bfs(node, adjacencyList, visited);
            if(result) count++
        }
    }

    return count;
};

const bfs = (source, adjacencyList, visited) => {
    
    let queue = [source];
    
    while(queue.length){
        let node = queue.shift();
        
        if(visited.has(parseInt(node))){
            /** dont return false which will skip processing child nodes */
            continue;
        }
        
        visited.add(parseInt(node));

        for(let child of adjacencyList[node]){
            queue.push(child);
        }
    }

    return true;
};

console.log(connectedComponents(adjacencyList));
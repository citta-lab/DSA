/** 
 * Given adjacencyList of undirected graph, return largest connected component size. Connected
 * components are formed by connecting one or more vertices / node 
 * 
 * 
 * recursion solution: 
 * 
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
        let size = dfs(node, adjacencyList, visited);
        maxSize = Math.max(size, maxSize);
    }

    return maxSize;
}

const dfs = (source, adjacencyList, visited) => {
    let count = 0;
    
    let stack = [];
    stack.push(source);

    while(stack.length){
        let node = stack.pop();
        
        if(visited.has(parseInt(node))){
            continue;
        }

        visited.add(parseInt(node));
        count++;

        for(let child of adjacencyList[node]){
            stack.push(child);
        }
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

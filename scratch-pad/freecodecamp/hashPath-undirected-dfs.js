
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

/** Time: O(E) where E is edges between nodes. Space : O(N)  */
const undirectedPath = (edges, source, target) => {
    const adjacecyList = makeAdjacencyList(edges);

    let stack = [];
    stack.push(source);

    let visited = new Set();
    while(stack.length){
        
        let node = stack.pop();
        if(node === target){
            return true;
        }
        
        if(visited.has(node)){
            continue;
        }

        visited.add(node);
        for(let child of adjacecyList[node] || []){
            stack.push(child);
        }
    }

    return false;
};

const makeAdjacencyList = (edges, map={}) => {
    edges.forEach((pair) => {
        const [nodeA, nodeB] = pair;

        if(!map[nodeA]) map[nodeA] = [];
        if(!map[nodeB]) map[nodeB] = [];

        map[nodeA].push(nodeB);
        map[nodeB].push(nodeA);
    })

    return map;
};

console.log("------ hasPath Iterative ------")
console.log(makeAdjacencyList(edges));
console.log(undirectedPath(edges, 'j', 'm')); // true
console.log(undirectedPath(edges, 'f', 'k')); // false
console.log(undirectedPath(edges, 'h', 'k')); // false
console.log(undirectedPath(edges, 'j', 'j')); // true

const undirectedPathRec = (edges, source, target) => {
    let adjacencyList = makeAdjacencyList(edges);
    let visited = new Set();
    let result = recursionHelper(adjacencyList, source, target, visited);
    if(result) return true;
    return false;
}

const recursionHelper = (adjacecyList, source, target, visited) => {
    
    if(source === target) return true;

    if(visited.has(source)) return false;
    visited.add(source);

    for(let child of adjacecyList[source] || []){
        let result = recursionHelper(adjacecyList, child, target, visited);
        if(result) return true;
    }

    return false;
}

console.log("------ hasPath Recursion ------")
console.log(undirectedPathRec(edges, 'j', 'm')); // true
console.log(undirectedPathRec(edges, 'f', 'k')); // false
console.log(undirectedPathRec(edges, 'h', 'k')); // false
console.log(undirectedPathRec(edges, 'j', 'j')); // true
console.log(undirectedPathRec(edges, 'o', 'k')); // false

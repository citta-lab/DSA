let edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

const shortestPath = (edges, source, target) => {
    const adjacencyList = makeAdjacencyList(edges);
    let visited = new Set();
    return bfs(adjacencyList, source, target, visited);
}

let bfs = (adjacencyList, source, target, visited) => {

    let queue = [];
    queue.push(source);

    let path = 0;
    while(queue.length){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            
            if(node === target) {
                return path;
            }

            if(visited.has(node)){
                continue;
            }

            visited.add(node);
            for(let child of adjacencyList[node]){
                queue.push(child);
            }
        }

        path++
    }

    return path;

}

const makeAdjacencyList = (edges, map={}) => {
    edges.forEach((pair) => {
        const [nodeA, nodeB] = pair;
        if(!map[nodeA]) map[nodeA] = [];
        if(!map[nodeB]) map[nodeB] = [];

        map[nodeA].push(nodeB);
        map[nodeB].push(nodeA);
    });

    return map;
}

console.log(makeAdjacencyList(edges));
console.log(shortestPath(edges, 'w', 'y'));
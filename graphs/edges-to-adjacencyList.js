/** 
 * Graph Basics 101:
 * given the graph edges for undirected graph build adjecency list */
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const makeAdjacencyList = edges => {
    let map = {};
    edges.forEach((pair) => {
        const [nodeA, nodeB] = pair;
        if(!map[nodeA]){
            map[nodeA] = [];
        }

        if(!map[nodeB]){
            map[nodeB] = [];
        }

        map[nodeA].push(nodeB);
        map[nodeB].push(nodeA);
    });

    return map;
}

console.log(makeAdjacencyList(edges));
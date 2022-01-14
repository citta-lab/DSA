# Kruskal’s algorithm ( greedy )

“Kruskal’s algorithm” is an algorithm to construct a “minimum spanning tree” of a “weighted undirected graph”.

Time: O(E logE) where ElogE for popping out from queue and O(E) for building queue.
Space: O(E)

## Steps
1. Sort all the edges by their weight in Ascending Order
```js
/** ie [nodeA, nodeB, weight] */
let arr = [[2,3,1], [2,3,0], [4,2,6], [5,8,2], [2,2,2]];
let sortedArr = arr.sort((first, second) => first[2]-second[2]);
console.log(sortedArr); // [[2,3,0],[2,3,1],[5,8,2],[2,2,2],[4,2,6]];
```
2. Keep visiting set to avoid cycles 
3. Add `minium weight` edges ( hence the sorting so we pick the top ) to Minimum Spanning Tree and skip it if it's already been visited ( hence visited set ). Or use
`Union Find` isConnected to avoid adding cycles.
4. Repeat adding lowest weight edges to Minimum Spanning Tree until n-1 edges (n : size of tree ) is reached.

# Example
The distance between two nodes/edges are the weight, we sort them by ascending order and keep adding edges to the Minimum Spanning Tree from lowest weight to higest weight if those edges are not already part of the MST until we reach N-1 edges. i.e number of nodes - 1 will form total edges.

why `N-1` ? : The minimum number of edges needed to connect N nodes/vertex. If N=3 then we only 2 minimum edges needed connect.

# Algorithm 
## Data:
```js
const N = 4; // number of nodes
const edges = [[0,1,3],[0,3,1],[1,2,1],[3,1,2],[3,2,2]];
```
```js
const minSpanningTree = () => {

    /** sort to make priosity queue */
    edges.sort((a,b) => a[2] - b[2]); // [[0,3,1],[1,2,1],[3,1,2],[3,2,2],[0,1,3]]

    /** Union Find: parent array for union find */
    let parent = [];
    for(let i=0; i<N; i++){
        parent.push(i);
    };

    /** MST logic */
    let minCost = 0;
    let minEdges = N-1;
    while(edges.length && minEdges > 0){
        const [first, second, cost] = edges.shift();
        const connected = isConnected(first, second, parent); // union find method
        /** if they are not connected then we are not making cycle */
        if(!connected){
            union(first, second, parent);
            minCost += cost;
            minEdges--
        }
    }
    return minCost;

   /** Union Find: findParent method */
   const findParent = (nodeA, parent) => {
       if(nodeA === parent[nodeA]) return nodeA;
       return parent[nodeA] = findParent(parent[nodeA], parent);
   }

   /** Union Find : Union method */
   const union = (nodeA, nodeB, parent) => {
       const parentA = findParent(nodeA, parent);
       const parentB = findParent(nodeB, parent);
       if(parentA !== parentB){
           parent[parentB] = parentA;
       }
   }

   /** Union Find: isConnected method */
   const isConnected = (nodeA, nodeB, parent) => {
       return findParent(nodeA) === findParent(nodeB);
   }
}
```

[problem example](https://github.com/citta-lab/DSA/blob/78c9dedd88f423f05796c12e748058adc7a5d7ad/graphs/1584.min-cost-to-connect-all-points-MST.js)
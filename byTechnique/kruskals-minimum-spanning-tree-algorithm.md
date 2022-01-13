# Kruskal’s algorithm ( greedy )

“Kruskal’s algorithm” is an algorithm to construct a “minimum spanning tree” of a “weighted undirected graph”.

## Steps
1. Sort all the edges by their weight in Ascending Order
```js
/** ie [nodeA, nodeB, weight] */
let arr = [[2,3,1], [2,3,0], [4,2,6], [5,8,2], [2,2,2]];
let sortedArr = arr.sort((first, second) => first[2]-second[2]);
console.log(sortedArr); // [[2,3,0],[2,3,1],[5,8,2],[2,2,2],[4,2,6]];
```
2. Keep visiting set to avoid cycles 
3. Add `minium weight` edges ( hence the sorting so we pick the top ) to Minimum Spanning Tree and skip it if it's already been visited ( hence visited set ).
4. Repeat adding lowest weight edges to Minimum Spanning Tree until n-1 edges (n : size of tree ) is reached.

# Example
The distance between two nodes/edges are the weight, we sort them by ascending order and keep adding edges to the Minimum Spanning Tree from lowest weight to higest weight if those edges are not already part of the MST until we reach N-1 edges. i.e number of nodes - 1 will form total edges.

why `N-1` ? : The minimum number of edges needed to connect N nodes/vertex. If N=3 then we only 2 minimum edges needed connect.
 
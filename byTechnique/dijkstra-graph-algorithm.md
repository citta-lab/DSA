# Dijkstra Algorithm 

## Pointers:
- Apply on `Graph` problem to find the `shortest distance`.
- Greedy algorithm 
- Doesnt work on negative weights / values.
- Shouldn't have SELF loop ( not same as cyclic graph )
- Time (Brute force): O(N^2) = O(N) * O(N) where O(N) for checking on each node/vertex, next O(N) for finding minium vertex / node. 
- Space (Brute force): O(N) used in array and/or in visited array/set.
- Time (with Heap): O(N log N) = O(N) * O(log N) where O(N) for checking on each node/vertex. O(log N) for finding minium vertex/node using Heap.

- Can also be applied on DIRECTED and/or UNDIRECTED graph
- Can be used on weight / length and/or unweighted graph

## Usage:
- Finding shortest distance between source to destination 
- Finding cost between source and destination 
- Traffic from A to B
- Money conversion 

## Implementation Pointers 
### 1: Initialize Array
- Calculate the size of adjacency list (i.e `const size = adjacencyMatrix.length;`);
- Create new array and fill array with inifity value (i.e `const costArray = new Array(size).fill(Infinity);`); This is to indicate maxium value might be Infinity. 
- Update first element value to `0`. As this will be our starting point. (i.e `costArray[0] = 0`);
- Result 
```js
[ 0, 1,        2,       3] // <--  index:  vertex/node 
[ 0, Infinity, Infinity, Infinity ] // <-- vertrex/node weight/length
```

## Input 
- Adjacency List 
Example:
```js
const list = { vertex : [ [vertex, weight], [vertex, weight] ...] };
const list = { 0 : [ [1, 7], [2, 5] ...] }; 

const list = { 1: [[]]}; // node 1 doesnt have any outgoing
```
This indicates Node/Vertex 0 points to 1 with weight 7 and points to 2 with weight 5.
- Adjacency matrix 

### 2. Initialize Visited Array
- Initialize another array for keeping track of visited nodes. Size same as adjacency list.
- Fill with false value.
- Result
```js
cosnt visited = new Array(size).fill(false);
```

### 3: Loop through the array & pick min Vertex value index. 


### 4: Find minimum vertext value & index from array



### 4: Result 
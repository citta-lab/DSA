# Union Find ( Disjoint Set)
The goal of the union find algorithm is to find if all of the nodes in the graph are connected and also can be used to check if given two nodes are connected to each other. Mainly there are two optimization with union find, however we will focus on just one which is Union Find with path compression. 

## Complexity
### Union-Find
Time : O(N) where N is number of nodes. Which is mainly from O(N) from find, O(N) from union, O(N) from isConnected as all of them depends on find operation.
Space: O(N) 
### Union-Find Path Compression
Time: O(N) however our find only takes O(logN), hence the union and isConnected takes O(logN) but O(N) is manily from constructing the parent array.
Space: O(N)

## Steps
- Define parent array with node as it's own parent.
- Define findParent method which will check parent of given node recursively.
- Define union method which takes two nodes and checks their parent from findParent and if they are not same then does union on it to make them to have same parent.
- Define isConnected method to check if two nodes has same parent using findParent.

## Algorithm
### Data:
```js
const edges = [[0,1],[0,3],[1,2],[3,1],[3,2]];
const N = 4; // number of nodes
```
### Step 1: Parent Array
By default all nodes have themself as their own parent, so we build parent array of size N.
```js
const parent = [];
for(let i=0; i<N; i++){
    parent.push(i);
}
```
### Step 2: Define findParent 
The goal of this function is to find the parent of given node from parent array. If their parent are not equal then we need to recurse all the way until we go to root parent.
```js
const findParent = (node, parent) => {
    if(node === parent[node]) return node;
    return parent[node] = findParent(parent[node], parent); // memoization is path compression
}
```

### Step 3: Define Union 
Core of union find method which will check whether nodes parent's are same, if not then it does union.
```js
const union = (nodeA, nodeB, parent) => {
    const parentA = findParent(nodeA, parent);
    const parentB = findParent(nodeB, parent);
    if(parentA !== parentB){
        // do union
        parent[parentB] = parentA;
    }
}
```

### Step 4: Define isConnected 
Make use of findParent method to check if given two nodes has same parent.
```js
const isConnected = (nodeA, nodeB, parent) => {
    return findParent(nodeA, parent) === findParent(nodeB, parent);
} 
```

## When to use
- Number of provinces problem
- Graph valid tree 
- Number of connected components 
- Minimum spanning tree (Kruskals) to check if the nodes are connected (avoids cyclic edge connection)
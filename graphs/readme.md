# Graphs 

Graphs problems can be tackled with two kinds of appraoch BFS and DFS. The core business logic between them are very identical and only differs the way we extract and process the data. Example: Depth First Search (DFS) focus on traversing rhe node until it reaches the end before it picks up the next node to be processed whereas Breadth First Search (BFS) focus on traversing all the children nodes before it goes to children from next level. 

## Data
we need graph data to tranverse the graph but often the given data might not be in the format or the structure known to us. The key is to indentify the data set to figureout if it is a graph problem. Most often it will be of the format `Adjacency List` and
`Adjacency Matrix` ( of size m*n). 

Below are example,

### 1. Adjacency List:
Here data is given in the form of adjacency list i.e node and it's respective childens. It would look somethign like ,
```js
const graph = {
    i: [j, k],
    j: [i],
    k : [i, m, l],
    m: [k],
    l: [k],
    o: [n],
    n: [o],
}
```

#### 1.2.  Edges ( Undirected ):
In this case the edges are given for UNDIRECTED graph and we would need to build a adjacency list before we can apply BFS or DFS on the graph. 
```js
const edges = {
    [i, j],
    [k, i],
    [m, k],
    [k, l],
    [o, n]
}
```
as we can see this is "UNDIRECTED" graph and we will need to build graph using this edges using helper method like while making sure undirected is accounted,
```js
const buildGraph = (edges, graph={}) => {
    for(let pair of edges){
        const [ first, second] = pair;
        
        /** initialize both nodes to have adjacency list as we dont know the direction */
        if(!graph[first]) = [];
        if(!graph[second]) = [];

        /** push nodes to each other */
        graph[first].push(second);
        grapg[second].push(first);
    }

    return graph;
}
```
the above buildGraph will return graph of below strcture,
```js
 {
    i: [j, k],
    j: [i],
    k : [i, m, l],
    m: [k],
    l: [k],
    o: [n],
    n: [o],
}
```

#### 1.3. Edges ( Directed ):
In this case given edges has dependecy / direction dictated using some constraints. Example: course completion can be represented as directed graph edges. Below is the example, 
```js
const prereq = {
    [1,0],
    [2,0],
    [3,1],
    [3,2]
}
```
In this case `[first, second] = prereq;` first has dependecy on the second course. So second course needs to be completed before we can finish first.

### Adjacency Matrix (M*N)











## DFS:
Traverse all the way until we cant go any further. Hence Depth.
- Use Stack 
- Last In, First Out
- pop() and push() are your friends here

In Graph theory, the depth-first search algorithm (abbreviated as DFS) is mainly used to:
- Traverse all vertices in a “graph”;
- Traverse all paths between any two vertices in a “graph”.

Here is the stack node movement in DFS,
```js
/** given graph */
 const graph = {
     a: ['b', 'c'],
     b: ['d', 'e'],
     c: ['g'],
     g: [],
     f: [],
     e: [],
     d: ['f']
 }
```

![graph](https://github.com/citta-lab/DSA/blob/54845c5cc61f0a6d6cf241c7c8373de7e709701c/graphs/blob/stack.png)

## BFS
"“breadth-first search” is to efficiently find the shortest path between two vertices in a “graph” where all edges have equal and positive weights."

In Graph theory, the primary use cases of the “breadth-first search” (“BFS”) algorithm are:

- Traversing all vertices in the “graph”;
- Finding the shortest path between two vertices in a graph where all edges have equal and positive weights.

- Use Queue 
- First In, First Out
- shift() and push() are your friends here

Here is the queue node movement in BFS,
```js
/** given graph */
 const graph = {
     a: ['b', 'c'],
     b: ['d', 'e'],
     c: ['g'],
     g: [],
     f: [],
     e: [],
     d: ['f']
 }
```

![graph](https://github.com/citta-lab/DSA/blob/b7ee19299b98e6ba4d1d7eeb8e303fba47a15b40/graphs/blob/queue.png)


Below graph illustrates how can we visualize graphs and what would be the node traversing when we do DFS vs BFS.
```js
 /** given graph */
 const graph = {
     a: ['b', 'c'],
     b: ['d', 'e'],
     c: ['g'],
     g: [],
     f: [],
     e: [],
     d: ['f']
 }
```
![graph](https://github.com/citta-lab/DSA/blob/019ad9d17db37fc207cb0c2f38a99f87dbc637f4/graphs/blob/graph.png)

### Shortest Distance 
In this scenario we are trying to find the shortest distance from root node to targetted node (example: f). As you can see we can possiblly traverse to 'f' in three way however our goal is to find the shortest path. Hence 'BFS' gives an advantage of checking all the children at the closest level before going to next set of children in next level we can gurantee that once we find the distance to any targetted node will be the shortest ( important ). 

```js
/** Find the shortest path to node f */
const graph = {
    a: ['c', 'b'],
    b: ['d', 'e'],
    c: ['g'],
    g: [],
    f: [],
    e: ['h', 'l'],
    d: ['f'],
    x:['y'],
    l:['m', 'n'],
    h:['n'],
    m: ['f'],
    n: ['o'],
    o: ['p']
}
```

![graph](https://github.com/citta-lab/DSA/blob/019ad9d17db37fc207cb0c2f38a99f87dbc637f4/graphs/blob/distanceToTargetNode.png)


# Topological Sort 
Algorithm / technique to order nodes in DIRECTED graph such that nodes are ordered to resolve the dependencies. Time complexity for this is O(N+E) where N is the nodes and E is the edges.

## Rules for Topological Sort 
- Pick any / random unvisted node in the graph 
- Apply DFS on unvisted nodes ( use recursion & Set() for keeping tracking for visted nodes)
- At Leaf node ( when node.left and node.right is null ), during recursive callback of DFS, add the current node to topological ordering in REVERSE order. ( i.e [ _, _, _, 2, 1] ).

## Topological Sort in Real Life:
- School Class prerequisites 
- Program dependecy ( node package dependency or maven dependency)
- Event scheduling 
- Assembly instructions 



Reference:
1. (Alvin Videos)[https://www.youtube.com/watch?v=2_Uuixtc5i0]
2. (Topological Sort)[https://www.youtube.com/watch?v=eL-KzMXSXXI&t=692s]
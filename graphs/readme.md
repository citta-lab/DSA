# Graphs 

Graphs problems can be tackled with two kinds of appraoch BFS and DFS. The core business logic between them are very identical and only differs the way we extract and process the data. Example: Depth First Search (DFS) focus on traversing rhe node until it reaches the end before it picks up the next node to be processed whereas Breadth First Search (BFS) focus on traversing all the children nodes before it goes to children from next level. 

## Data
we need graph data to tranverse the graph but often the given data might not be in the format or the structure known to us. The key is to indentify the data set to figureout if it is a graph problem. Here is one example,

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

### 2.  Edges ( Undirected ):
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

### 3. Edges ( Directed ):
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











## DFS:
- Use Stack 
- Last In, First Out
- pop() and push() are your friends here

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


Reference:
1. (Alvin Videos)[https://www.youtube.com/watch?v=2_Uuixtc5i0]
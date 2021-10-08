# Graphs 

Graphs problems can be tackled with two kinds of appraoch BFS and DFS. The core business logic between them are very identical and only differs the way we extract and process the data. Example: Depth First Search (DFS) focus on traversing rhe node until it reaches the end before it picks up the next node to be processed whereas Breadth First Search (BFS) focus on traversing all the children nodes before it goes to children from next level. 

## DFS:
- Use Stack 
- Last In, First Out
- pop() and push() are your friends here

Here is the stack node movement in DFS,

![graph](https://github.com/citta-lab/DSA/blob/54845c5cc61f0a6d6cf241c7c8373de7e709701c/graphs/blob/stack.png)

## BFS
- Use Queue 
- First In, First Out
- shift() and push() are your friends here

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
# Graph Calculations 
Given graph edges we will go over different scenario how can we calculate total nodes, distance to destination, total number of paths from node etc.

# Given
## Edges
Input: n = 6, 
edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]

## Graph
       0
      / \ 
     1    2
        / | \
       3  4  5

# Answer
## Adjacency List
The given edges can be translated into Adjacency List which will help us apply DFS or BFS. The main thing to notice here is we are dealing with "UNDIRECTED" graph.
```js
let adjList = {};
    for(let edge of edges){
        const [src, dst] = edge;
        if(!adjList[src]) adjList[src] = [];
        if(!adjList[dst]) adjList[dst] = [];
        
        adjList[src].push(dst);
        adjList[dst].push(src);
    }

console.log(adjList); 
```
resulting adjList will be 
```js
{
  '0': [ 1, 2 ],
  '1': [ 0 ],
  '2': [ 0, 3, 4, 5 ],
  '3': [ 2 ],
  '4': [ 2 ],
  '5': [ 2 ]
}
```

## Total Nodes in the Graph
```js
let dfs = (src) => {

        /** start counting for the procesing node */
        let count = 1;
        
        if(visited.has(src)){
            return 0;
        }
        
        visited.add(src);

        let children = adjList[src];
        for(let child of children){            
            let result = dfs(child);
            count = count + result;
        }
        
        return count;
    }
    
    
    let visited = new Set();
    let result = dfs(0);

    console.log(result); // 6
```

## Has Path to Target
If we are asked to find wether we can find a path to given target then we could do something like,
```js
let dfs = (src, dst) => {

    if(src === dst){
        return true;
    }
            
    if(visited.has(src)){
        return false;
    }

    visited.add(src);

    let children = adjList[src];
    for(let child of children){            
        let result = dfs(child, dst);
        if(result) return true;
    }
            
    return false;
}


let visited = new Set();
let result = dfs(0, 5);
if(result) console.log(result); // true
```
if we look for (1,5) or (2,4) it should be true.

## Print Path to Target
Similar to above, in this example we would like to print the path to given target,
```js
let path = [];
let dfs = (src, dst) => {
        
    if(visited.has(src)){
        return false;
    }

    visited.add(src);
    path.push(src);

    if(src === dst){
        return true;
    }

    let children = adjList[src];
    for(let child of children){            
        let result = dfs(child, dst);
        if(result) return true;
    }
            
    /** backtrack: remove the current node from the path as its not part of the path */       
    path.pop();
            
    return false;
}


let visited = new Set();
let result = dfs(0, 5);
if(result) console.log(path); // [0,2,5]
```
if we are looking for path between (1,5) then we will have [1,0,2,5] and similary path for (3,4) would be [3,2,4].

## Total Paths Distance from Source
In this example we would need to find total path counts from given source to all of it's children, not just one.
```js 
let totalNodes = 0;
    let dfs = (src) => {
        /** start counting for the procesing node */
        let count = 1;
        
        if(visited.has(src)){
            return 0;
        }
        
        visited.add(src);
        
        let children = adjList[src];
        for(let child of children){            
            let result = dfs(child, dst);
            count = count + result;
            /** keep track of total distance calculated to every node */
            totalNodes = totalNodes + result;
        }
        
        return count;
    }
    
    
    let visited = new Set();
    let result = dfs(0);
    console.log(totalNodes); // 8
```

## Shortest Distance to Target







# Reference:
## (Shortest Paths)[https://betterprogramming.pub/5-ways-to-find-the-shortest-path-in-a-graph-88cfefd0030f]


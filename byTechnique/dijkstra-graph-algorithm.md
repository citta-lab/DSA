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

## Intuition 
![Graph](https://github.com/citta-lab/DSA/blob/dfa066caff0f5eba89e2e6c560149449fc671995/byTechnique/assests/dijkstra.png)
![Queue](https://github.com/citta-lab/DSA/blob/dfa066caff0f5eba89e2e6c560149449fc671995/byTechnique/assests/dijkstra-priority-queue.png)

## Usage:
- Finding shortest distance between source to destination (Geographic Information System (GIS), such as Google Maps, for finding shortest path from point A to point B)
- Finding cost between source and destination 
- Traffic from A to B (Traffic information systems use Dijkstra’s Algorithm for tracking destinations from a given source location)
- Money conversion 
- Router ( Open Source Path First (OSPF), an Internet-based routing protocol, uses Dijkstra’s Algorithm for finding best route from source router to other routers in the network )
- Telephone and Cellular networks for routing management
- Websites for booking flights 
- Friend suggestions on social media
- Finding a way through a maze
- Network Delay Time 

## Implementation Examples:
- http://www.csl.mtu.edu/cs2321/www/newLectures/30_More_Dijkstra.htm


## Implementation Pointers 

### 1. Understand Inputs ( types )
- Adjacency List 
Example:
```js
const list = { vertex : [ [vertex, weight], [vertex, weight] ...] };
const list = { 0 : [ [1, 7], [2, 5] ...] }; 

const list = { 1: [[]]}; // node 1 doesnt have any outgoing
```
This indicates Node/Vertex 0 points to 1 with weight 7 and points to 2 with weight 5.

- Adjacency matrix
Example:
```js
[ 
  0, 0, 7, 0
  4, 0, 2, 0
  0, 0, 0, 9
  0, 0, 0, 0
]
```
This indicates Vertex O (index 0) points to Vertex 2 (index 2) with weight 7. Vertex 1 (index 1) points to Vertex 2 (index 2) with weight 2. Vertex 2 (index 2) points to vertex 3 (index 3) with weight 9 and lastly vertex 3 doesnt point to any other vertex.


### 2: Initialize Array
- Calculate the size of adjacency list (i.e `const size = adjacencyMatrix.length;`);
- Create new array and fill array with inifity value (i.e `const costArray = new Array(size).fill(Infinity);`); This is to indicate maxium value might be Infinity. 
- Update first element value to `0`. As this will be our starting point. (i.e `costArray[0] = 0`);
- Result 
```js
const size = adjacencyMatrix.length; // edges.length ( if it is list )
const distanceArray = new Array(size).fill(Infinity); 
distanceArray[start] = 0; 

console.log(distanceArray); // [ 0, Infinity, Infinity, Infinity ] // <-- vertrex/node weight/length
```

### 3. Initialize Visited Set / Array
- Initialize another Set to keeping track of visited nodes.
- Result
```js
/** if Array */
const size = edges.length or matrix.length;
cosnt visited = new Array(size).fill(false); /** O(N) space */

/** if Set */
const visited = new Set(); /** O(N) space */
```

### 3: Loop until we visit all nodes or through the array & pick min Vertex value index. 
```js
while(visited.size !== edges.length){
    ....
    ....
}
```

### 4: Find minimum vertext value & index from array
```js
while(visited.size !== edges.length){
    /** this will fetch vertex and it's respective value from distance array.*/
    /** It will start with index 0 and built is as helper */
    const [ minVertex, minVertexDistance ] = getMinVertex(distanceArray, visited); 
    ...
    ...
}

```

### 5. Calculations
- If fetched vertex distance is Infinity ( which is default value ) then it must be isolated vertex.
- If we found the vertex occurence in Set, then we skip and go to next item in while loop
- If we didnt do above then add the vertex we found to Set (i.e `visited.add(minVertex)`);
- loop through edges to find [vertex, distance] pair then calculate what would be thew new minimum distance we can use in destination vertex ( index ). 
- If the found value is less then update the destination vertex value with min found value
```js
/** O(N) time */
while(visited.size !== edges.length){
    /** will implement helper at last */
    const [ minVertex, minVertexDistance ] = getMinVertex(distanceArray, visited); 

    /** if we find independent vertex/node then we get Infinity, so we cant do anything */
    if(minVertexDistance === Infinity){
        break;
    }

    /** if we already visited the vertex/node then we skip and go to next item in while loop */
    if(visited.has(minVertex)){
        continue;
    }

    /** now we can add vertex/node to set as we will process now */
    visited.add(minVertex);

    /** get array of [vertex, distance] pair from edges for vertex we are processing */
    let children = edges[minVertex];
    for(let [destination, destinationToDistance] of children){
        /** 
         * Calculate what would be new distance by adding current vertex distance 
         * + destination distance we got from the edges */
        let newDistance = minVertexDistance + destinationToDistance;

        /** get current destination distance from the array we initialized/updating */
        let curDestinationDistance = distanceArray[destination];

        /** our goal is to use the minimum distance */
        let min = Math.min(newDistance, curDestinationDistance);

        /** update our initialized/updating array so destination will reflect the min distance */
        distanceArray[destination] = min;
    }
    ....
    ....
}

```

### 6: Result 
Return the newly built array but replace Infinity ( if any) with -1.
```js
while(visited.size !== edges.length){
  ....
  ....
}

/** finally we compare if we have infinity to modify the result */
return distanceArray.map(x => x === Infinity ? -1 : x);
```

### 7: Helper ( Min Vertex and Value finder )
This is main helper which will find the minimum vertex value from the distanceArray and returns both vertex and it's respective value from the array.
- default vertex and distace to some out of bound value so we can return if we cant find min value.
- we loop on newly initiated array
- if we find this vertex ( which is index ) visited then we go to next in loop
- if the value associated with vertex ( idex ) is less than our default. then update default values 
- send it as min vertex, distance which we need to go next
```js
const getMinVertex = (distanceArray, visited) => {
    let curVertex = -1; // default it to -1
    let curDistance = Infinity; // default distance 

    /** our goal is to find minimum valued vertex in the array we have built so we can process it next */
    for(let i=0; i<distanceArray.length; i++){
        let vertex = i;
        let distance = distanceArray[vertex];

        /** if its already visited ( vertex / index ) then skip */
        if(visited.has(vertex)){
            continue;
        }
        
        /** if array holds value ( vertex value) less than our default, then update */
            if(distance <= curDistance){
                curDistance = distance;
                curVertex = vertex;
            }
    }

    /** return the pair */
    return [curVertex, curDistance]
}

```

Code Example:
https://github.com/citta-lab/DSA/blob/901ac898e7176dd82039c713b09c544a35ad015f/graphs/dijkstra-graph-algorithm.js 

Referece:
https://www.udacity.com/blog/2021/10/implementing-dijkstras-algorithm-in-python.html
https://www.youtube.com/watch?v=pVfj6mxhdMw

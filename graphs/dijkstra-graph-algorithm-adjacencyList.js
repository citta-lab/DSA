
/** 
 * Implement Dijkstra algorithm and impove the time complexity further. 
 * video : https://www.youtube.com/watch?v=VaFFWxcKBO4 
 * 
 * */

/** Time: O(N^2) and Space: O(N) */
const dijkstra = (adjacencyList, start) => {
    /** size for building value and visited array */
    const size = adjacencyList.length;

    /** value array which will map array index to node, and values to index value */
    const distanceArray = new Array(size).fill(Infinity);
    distanceArray[start] = 0; // OR distanceArray[0] = 0;
    
    // console.log(distanceArray);

    /** array / set to keep track of visited nodes/vertex */
    const visited = new Set();

    /** as long as we have not finished */
    while(visited.size !== size ){
        const [minVertex, minVertexDistance] = getMinDistanceVertex(distanceArray, visited);

        /** if vertex is by itself then we cant find shotest path so we just exit */
        if(minVertexDistance === Infinity){
            break;
        }

        /** if we have already visited and marked, then we move on with while loop */
        if(visited.has(minVertex)){
            continue;
        }

        /** visiting now so adding it to the set */
        visited.add(minVertex);

        let children = edges[minVertex];
        for(let childPair of children){
            let [destinationVertex, destinationDistance] = childPair; 

            let newDestinationDistance = minVertexDistance + destinationDistance;
            let curDestinationDistance = distanceArray[destinationVertex];

            let minDestinationDistance = Math.min(newDestinationDistance, curDestinationDistance);
            distanceArray[destinationVertex] = minDestinationDistance;
        }
    }

    return distanceArray.map(x => x === Infinity ? -1 : x);
}

/** find min distance/value for each vertex */
const getMinDistanceVertex = (distanceArray, visited) => {
    
    let curMinDistance = Infinity;
    let curVertex = -1;

    for(let i=0; i<distanceArray.length; i++){
        let vertex = i;
        let distance = distanceArray[i];

        if(visited.has(vertex)){
            continue;
        }

        if(distance <= curMinDistance){
            curMinDistance = distance;
            curVertex = vertex;
        }
    }

    return [curVertex, curMinDistance];
}

let edges = [
    [ [ 1, 7 ] ],
    [ [ 2, 6 ], [ 3, 20 ], [ 4, 3 ] ],
    [ [ 3, 14 ] ],
    [ [ 4, 2 ] ],
    [],
    []
  ]

console.log(dijkstra(edges, 0));

edges = [ [ [ 1, 2 ] ], [ [ 0, 1 ] ], [ [ 3, 1 ] ], [ [ 2, 2 ] ] ]
console.log(dijkstra(edges, 0));

edges = [ [], [], [], [] ]
console.log(dijkstra(edges, 0));


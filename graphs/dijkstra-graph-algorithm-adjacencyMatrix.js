
/** 
 * Implement Dijkstra algorithm and impove the time complexity further. 
 * video : https://www.youtube.com/watch?v=VaFFWxcKBO4 
 * 
 * */

/** Time: O(N^2) and Space: O(N) */
const dijkstra = (adjacencyMatrix, start) => {
    let size = adjacencyMatrix.length;

    let distanceArray = new Array(size).fill(Infinity);
    distanceArray[start] = 0;

    console.log(distanceArray);
    let visited = new Set();

    while(visited.size !== distanceArray.length){
        
        /** this will act as m in (m*n matrix) which fetches the min vertex (index) and its value */
        let [minVertex, minDistance] = getMinDistanceVertex(distanceArray, visited);

        if(minDistance === Infinity){
            break;
        }

        if(visited.has(minVertex)){
            continue;
        }

        visited.add(minVertex);
        
        /** goal is to fill the matrix with min distance/cost/path values */
        for(let i=0; i<adjacencyMatrix.length; i++){
            const value = adjacencyMatrix[minVertex][i];
            /** positive value more than 0 indicates the weight for that indexed vertex */
            if(value !== 0){
                let newDestinationDistance = minDistance + value;
                let curDestinationDistance = distanceArray[i];

                let minDestinationDistance = Math.min(newDestinationDistance, curDestinationDistance);
                distanceArray[i] = minDestinationDistance;

            }
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

let matrix = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
[ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
[ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
[ 0, 0, 7, 0, 9, 14, 0, 0, 0],
[ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
[ 0, 0, 4, 14, 10, 0, 2, 0, 0],
[ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
[ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
[ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]

console.log(dijkstra(matrix, 0)); // [ 0, 4, 12, 19, 21, 11, 9,  8, 14]


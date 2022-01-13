/** 

1584 Min Cost to Connect All Points 

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, 
where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly 
one simple path between any two points.

Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20

Hint: Kruskals method to find min spanning tree with union find for finding already connected nodes 
*/

/** Time: O(E logE) mainly from priorityqueue/sorting, Space: O(V) */
var minCostConnectPoints = function(points) {
   
    /** Step 1 [data prep] : find weight */
    let edges = [];
    for(let i=0; i<points.length; i++){
        const firstPair = points[i];
        for(let j=i+1; j<points.length; j++){
            const secondPair = points[j];
            
            const [firstPairA, firstPairB] = firstPair;
            const [secondPairA, secondPairB] = secondPair;
            
            const weight = Math.abs(firstPairA - secondPairA) +
                  Math.abs(firstPairB - secondPairB);
            
            edges.push([i, j, weight]);
        }
    }
    
    console.log(edges);
    
    
    /** Step 2 [ minHeap mock ] : sort the data by ascending order */
    edges.sort((first,second) => first[2]-second[2]);
    console.log(edges);
    
    
    /** Step 3 [union find] : to find if two edges are connected */
    
    const findParent = (node, parent) => {
        if(node === parent[node]) return node;
        return parent[node] = findParent[parent[node], parent];
    }
    
    const parent = [];
    for(let i=0; i<points.length; i++){
        parent.push(i);
    }
    
    const union = (nodeA, nodeB) => {
        const parentA = findParent(nodeA, parent);
        const parentB = findParent(nodeB, parent);
        if(parentA !== parentB){
            parent[parentB] = parentA;
        }
    }
    
    const isConnected = (nodeA, nodeB) => {
        return findParent(nodeA, parent) === findParent(nodeB, parent);
    }
    
    /** Step 4: Min Spanning Tree */
    const size = points.length; // number of edges
    let numEdges = size - 1; // min number of edges we need
    let minCostResult = 0;
    
    while(edges.length && numEdges > 0){
        const edge = edges.shift(); // pick from the top
        const [nodeOne, nodeTwo, nodeWeight] = edge;
        
        const connected = isConnected(nodeOne, nodeTwo);
        console.log(" nodeOne : "+nodeOne+ " nodeTwo : "+nodeTwo+ " connected : "+connected)
        if(!connected){
            union(nodeOne, nodeTwo);
            minCostResult += nodeWeight;
            numEdges --
        }
    }
    
    return minCostResult;
};

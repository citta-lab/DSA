/** 

1584 Min Cost to Connect All Points | Minimum Spanning Tree Algorithm is used

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, 
where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly 
one simple path between any two points.

Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20

leetcode-question:1584
leetcode:https://leetcode.com/problems/min-cost-to-connect-all-points/

Hint: Kruskals method to find min spanning tree with union find for finding already connected nodes 
*/

/** Time: O(E logE) mainly from priorityqueue/sorting, Space: O(V) */
var minCostConnectPoints = function(points) {

    /** 
    Step 1: find weight between nodes from given weight points. 
    
    Details : The problem statement says the weight between edges are 
    represented by absolute  value of  (x1-x2)+(y1-y2). Where index 
    value of these points are Nodes 
    */
    
    let list = [];
    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++) {
            let cost = Math.abs(points[i][0]-points[j][0]) 
            + Math.abs(points[i][1]-points[j][1]);
            list.push([i, j, cost]);
        }
    }
    
    /** 
    Step 2: Build priority queue with min weight at top
    
    We need to make sure the minimum cost is at the top 
    ( like priority queue). So we are sorting by ascending order 
    */
    
    list.sort((a,b) => a[2]-b[2]);
    
    /** 
    Step 3 (Part I): Union find  
    
    Build parent array which will be used in union find operation.
    */
    let parent = [];
    for(let i=0; i<points.length; i++){
        parent.push(i);
    }
    
    /** 
    Step 4: Minium Spanning Tree 
    
    continue processing the list 'queue' until it is empty and
    we have established minimum edges between all nodes nodes (i.e numEdges ).
    
    If two nodes are already connected then we shouldn't be connecting another
    node to it as it will form a cycle. Hence we check if connected and if it is
    false then only we establish connection using union and add the weight to result
    */ 
    let minCostResult = 0;
    let numEdges = points.length - 1;
    while(list.length && numEdges > 0){
        let [i, j, d] = list.shift();
        let connected = isConnected(i, j, parent);
        if (!connected) {
            union(i, j, parent)
            minCostResult += d;
            numEdges--;
        }
    }
    
    return minCostResult;
};

/** 
Step 3 (part II) : Union Find 

Use union find to check if two nodes are connected already, if they are then adding
edge between them will make a cycle. So using this in minium spanning tree check and if they are not already connected then we do the union, add distance/time to result.
*/
function findParent(node, parent) {
   if( node === parent[node]) return node;
   return parent[node] = findParent(parent[node], parent);
}

function union(nodeA, nodeB, parent) {
    let parentA = findParent(nodeA, parent);
    let parentB = findParent(nodeB, parent);
    
    if(parentA !== parentB){
        parent[parentB] = parentA;
    }
}

function isConnected (nodeA, nodeB, parent){
    return findParent(nodeA, parent) === findParent(nodeB, parent);
}
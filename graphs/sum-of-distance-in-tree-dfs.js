/**
 * Sum of Distance in Tree
 * 
 * There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
 * You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that 
 * there is an edge between nodes ai and bi in the tree.
 * Return an array answer of length n where answer[i] is the sum of the distances between 
 * the ith node in the tree and all other nodes. 
 * 
 * Example: 
 *  Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
    Output: [8,12,6,10,10,10]
    Explanation: The tree is shown above.
    We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
    equals 1 + 1 + 2 + 2 + 2 = 8.
    Hence, answer[0] = 8, and so on.
 * 
 * leetcode-question:834
 * leetcode:https://leetcode.com/problems/sum-of-distances-in-tree/
 * video:https://www.youtube.com/watch?v=dkPYrvq5EmY
 * 
 * */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var sumOfDistancesInTree = function(n, edges) {
   
    /** Step 1: Build adjacency list */
    let adjList = {};
    for(let edge of edges) {
        const [first, second] = edge;
        if(!adjList[first]) {
            adjList[first] = [];
        };
        if(!adjList[second]){
            adjList[second] = [];
        }
        
        adjList[first].push(second);
        adjList[second].push(first);
    }
    
    console.log(adjList);
    
    /** Step 2: build array to keep count of all it's children node from itself 
     and sum of node distance from root node */
    
    /** array to hold final answer for each node */
    let sumDistance = new Array(n).fill(0);
    
    /** array to hold all child nodes plus itself count */
    let count = new Array(n).fill(0);
    
    let visited = new Set();
    const postOrder = (node) => {
       
        /** hence we are processing the the current node, so counting for that */
        let nodeCounter = 1;
        
        let children = adjList[node];
        
        for(let child of children || []){
            
            /** if we already visited, we skip it and go to next */
            if(visited.has(child)){
               continue;
            }
            
            visited.add(child);
            
            /** process counting of it's children */
            let childNodeCounter = postOrder(child);
            
            /** current node count would be adding children count plus itself */
            nodeCounter = nodeCounter + childNodeCounter;
            
            /** trying to calculate total for root */
            sumDistance[0] = sumDistance[0] + childNodeCounter;
       }
       
       /** update the count array for each node so we can use it */
       count[node] = nodeCounter;
        
       /** each dfs needs to return the calculated count for next recursion dfs to pick */
       return nodeCounter;
    };
    
    /** Step 3: calculate rest of the distance for all nodes using count array and root node
    sum distance from sumDistance array */
    
    let visitedTwo = new Set();    
    const preOrder = (node) => {
        let children = adjList[node];
        for(let child of children || []){
            
            if(visitedTwo.has(child)){
                continue;
            }
            
            visitedTwo.add(child);
            /** distanceAtNode = calculatedDistanceAtParent - directChildrenCountOfChild + remainingChildrenOfParent (i.e n - childrenCount will give remaining ) */
            sumDistance[child] = sumDistance[node] - count[child] + (n - count[child]);
            preOrder(child);
        }
    }
    
    visited.add(0);
    postOrder(0);
    
    console.log(count); /** [6,1,4,1,1,1] */
    console.log(sumDistance); /** [8,0,0,0,0,0] */
    
    visitedTwo.add(0);
    preOrder(0);
    
    
    console.log(sumDistance); /** final: [8,12,6,10,10,10] */
    return sumDistance;
};

let n=6;
let edges= [[0,1],[0,2],[2,3],[2,4],[2,5]];
console.log(sumOfDistancesInTree(n, edges)); // [ 8, 12, 6, 10, 10, 10 ]

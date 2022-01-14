/** 

743. Network Delay Time

You are given a network of n nodes, labeled from 1 to n. 
You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), 
where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. 
If it is impossible for all the n nodes to receive the signal, return -1.

leetcode-question:743
leetcode:https://leetcode.com/problems/network-delay-time/
video:

Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2

Input: times = [[1,2,1],[2,1,3]], n = 2, k = 2
Output: 3

Hint:
we need to find minimum time it takes for signal to reach all nodes. So if we find the shortest path to all its ( time is the weight ) node then maximum 
time it takes to reach anynode is the best (minimum) time it needs for signal to reach all nodes.

Shortest Path Logic : BFS with Dijsktra ( as we have +ve weight )
*/

var networkDelayTime = function(times, n, k) {
    let adjList = {};
    for(let time of times){
        const [src,dst,weight] = time;
        if(!adjList[src]) adjList[src] = [];
        if(!adjList[dst]) adjList[dst] = [];
        
        adjList[src].push([dst, weight]);
    }
    
    console.log(adjList); // { '1': [], '2': [ [ 1, 1 ], [ 3, 1 ] ], '3': [ [ 4, 1 ] ], '4': [] }
    
    /** not doing forEach as we need to start from 1st index as we dont have 0th node */
    let distance = []
    for(let i=1; i<=n; i++){
        distance[i]=Infinity;
    }
    
    distance[k] = 0;
    console.log(distance); // [ <1 empty item>, Infinity, 0, Infinity, Infinity ]
    
    let visited = new Set();
    
    while(visited.size !== n){
        
        const [ minNode, minDist] = getMin(distance, visited);
        
        if(minDist === Infinity) {
            break;
        }
        
        if(visited.has(minNode)){
            continue;
        }
        
        visited.add(minNode);
        
        let children = adjList[minNode];
        for(let child of children) {
            const [ dst, dist] = child;
            const newDist = dist + minDist;
            const curDist = distance[dst];
            const min = Math.min(curDist, newDist);
            distance[dst] = min;
        }
        
    }

    /** our distance array has NaN for 0 index as we had to start from 1st index due to not
    having 0th node. Then we need to find if we have Infinity then return -1 or the max value
    we have in the shortest path. So abusing spead and Math.max to find the max value after
    using filter to remove NaN */
    
    // let result = distance.find((x, index) => x === Infinity || index === distance.length-1) <-- fails
    let result = Math.max(...(distance.filter(x => x)));
    
    return result === Infinity ? -1 : result;
};

const getMin = (distance, visited) => {
    let defNode = -1;
    let defVal = Infinity;
    
    for(let i=0; i<distance.length; i++){
        let node = i;
        const dist = distance[node];
        
        if(visited.has(node)){
            continue;
        }
        
        if(dist < defVal) {
            defVal = dist;
            defNode = node;
        }
    }
    
    return [defNode, defVal]
};

let times = [[2,1,1],[2,3,1],[3,4,1]];
let n = 4;
let k = 2;
console.log(networkDelayTime(times, n, k); //   2
            
times = [[1,2,1],[2,1,3]];
n = 2;
k = 2;
console.log(networkDelayTime(times, n, k); //   3
          

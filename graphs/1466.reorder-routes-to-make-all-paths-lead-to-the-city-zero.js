/**
 *
 * 1466. Reorder Routes to Make All Paths Lead to the City Zero
 *
 * There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities 
 * (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
 * 
 * Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
 * This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
 * Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
 * It's guaranteed that each city can reach city 0 after reorder.
 * 
 *
 * Example:
 * Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
 * Output: 3
 * Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
 *
 * leetcode-question:1466
 * leetcode:https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 *
 * Hint:
 * - Time:O(N) and Space: O(N)
 * - DFS with visited set 
 * - we need to builf from and to maps which will indicate direction from starting nodes to other
 * - we should only COUNT when direction is pointed right side ( i.e in fromMap )
 */

function createNodeDirectionMaps(connections) {
    const fromMap = new Map();
    const toMap = new Map();
    for(let edge of connections) {
        if(!fromMap.has(edge[0])) {
            fromMap.set(edge[0], [])   
        }
        fromMap.get(edge[0]).push(edge[1]);
    
        if(!toMap.has(edge[1])) {
            toMap.set(edge[1], []); 
        }
        toMap.get(edge[1]).push(edge[0]);
    }
    
    return {
        fromMap, toMap
    }
}

function dfs(n, fromMap, toMap, visited) {
    
    /** add it to visited set so we dont check this again */
    visited.add(n);
    
    let result = 0;
    
    /** we dont need to revert directions as it is in right direction */
    if(toMap.has(n)) {
        for(let node of toMap.get(n)) {
            if(!visited.has(node)) {
                result += dfs(node, fromMap, toMap, visited)
            }
            
        }
    }
    
    /** this is going right direction, which needs to be reversed so we count */
    if(fromMap.has(n)) {
        for(let node of fromMap.get(n)) {
            if(!visited.has(node)) {
                result += 1 + dfs(node, fromMap, toMap, visited)
            }            
        }
    }

    return result;
}


var minReorder = function(n, connections) {
    /** build adjList which is going outward / inward */
    const { fromMap, toMap } = createNodeDirectionMaps(connections);
    
    let visited = new Set();
    return dfs(0, fromMap, toMap, visited) 
};
  

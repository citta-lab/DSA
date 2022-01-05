/**
 * Evaluate Division
 *  
 * You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
 * Each Ai or Bi is a string that represents a single variable.You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query 
 * where you must find the answer for Cj / Dj = ?. Return the answers to all queries. If a single answer cannot be determined, return -1.0. 
 * Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction. 
 * 
 * leetcode:https://leetcode.com/problems/evaluate-division/
 * leetcode-question:399
 * 
 * 
 * Input:
 * equations = [["a","b"],["b","c"]], 
 * values = [2.0,3.0], 
 * queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * 
 * */

 var calcEquation = function(equations, values, queries) {
    
    let adjList = {};
    let index = 0;
    
    /** build adjList with { src: [[chd1, value], [chd2, value]]} */ 
    for( let equation of equations){
        const [divident, divisor] = equation;
        if(!adjList[divident]) adjList[divident] = [];
        if(!adjList[divisor]) adjList[divisor] = [];
        
        adjList[divident].push([divisor, values[index]]);
        adjList[divisor].push([divident, 1/values[index]]);
        
        index++
    }
   
    console.log(adjList);  
    
    /** Apply DFS with product as accumulator which can be used to multiple ex: a/b*b/c = 2*3 => a/c */
    let dfs = (src, dst, adjList, visited, product) => {
        
        /** if we dont have src or dst in the adjList */
        if(!adjList[src] || !adjList[dst]){
            return -1;
        }
        
        /** if we found the match then then we return 1. But product is initialized to 1 anyway. Example: if we are looking for c and if our src becomes c then c/c = 1 */
        if(src === dst){
            return product;
        }
        
        /** let us process the current src */
        visited.add(src);
        
        let children = adjList[src];
        for(let child of children){
            /** extract the array from list of arrays */
            let [nextNode, value] = child;
            
            /** if we have already visited then we skip */
            if(visited.has(nextNode)){
                continue;
            }
            
            /** find value for dst, but send the current path value */
            let childValue = dfs(nextNode, dst, adjList, visited, product * value);
            
            if(childValue) return childValue;
            
        }
        
        return false;
    }
    
    let result = [];
    for(let query of queries){
        const [ src, dst] = query;
        let visited = new Set();
        let value = dfs(src, dst, adjList, visited, 1);
        
        /** this will handle when src === dst or src/dst !== -1 */
        if(value){
            result.push(value);
        }else{
            result.push(-1);
        }
    }
    
    return result;
    
};


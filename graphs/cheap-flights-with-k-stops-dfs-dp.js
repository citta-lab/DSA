/** There are n cities connected by some number of flights. You are given an array flights where
 *  flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city to 
 * i with cost pricei. 
 * 
 * You are also given three integers src, dst, and k, return the cheapest 
 * price from src to dst with at most k stops. If there is no such route, return -1. 
 * 
 * leetcode:https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * leetcode-question:787
 * 
 * Hint: DFS with memoization 
 * - Can also be done using Dijkstra's algorithm as this is meant for shortest path but having K stops
 * adds more complexity
 * - Bellam-Ford is better
 * */

 var findCheapestPrice = function(n, flights, src, dst, k) {
    
    let adjMatrix = new Array(n).fill(0).map(row => new Array(n).fill(0));
    
    // console.log(adjMatrix) /** [[ 0,0,0 ],[0,0,0],[0,0,0]]*/
    
    /** mapping flight data to adjecency matrix */
    for(let flight of flights){
        const [ src, dest, price] = flight;
        adjMatrix[flight[0]][flight[1]] = flight[2];
    }
    
    // console.log(adjMatrix); /** [ [ 0,100,500], [0,0,100], [0,0,0] ] */
 
    
    let dfs = (src, dst, stops, adjMatrix, size, memo) => {
        
        /** if we are at destination then we reached the final goal so return */
        if(src === dst){
            return 0;
        }
        
        /** we need to make sure we only do less than k stops */
        if(stops < 0) {
            return Infinity;
        }
        
        /** hence its a matrix we will keep checking all 4 ways so memoizing it */
        let hash = `${src}-${stops}`;
        if(memo[hash]){
            return memo[hash];
        }
        
        /** false condition */
        let shortestDistanceCal = Infinity;
        for(let i=0; i<n; i++){
            let price = adjMatrix[src][i];
            
            if(price > 0){
                let result = dfs(i, dst, stops-1, adjMatrix, size, memo);
                shortestDistanceCal = Math.min(shortestDistanceCal, result+price)
            }
        }
        
        memo[hash] = shortestDistanceCal;
        return shortestDistanceCal;
    }
    
    let memo = {};
    let shortest = dfs(src, dst, k, adjMatrix, n, memo);
    return shortest >= Infinity ? -1 : shortest;
    
};

let n = 3
let flights = [[0,1,100],[1,2,100],[0,2,500]]
let src = 0
let dst = 2
let k = 1
console.log(findCheapestPrice(n, flights, src, dst, k)); //200
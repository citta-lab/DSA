/** 
 * 
 *  787. Cheapest Flights Within K Stops | Cheap Flights 
 * 
 * There are n cities connected by some number of flights. You are given an array flights where
 *  flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi
 *  with cost pricei. 
 * 
 * You are also given three integers src, dst, and k, return the cheapest 
 * price from src to dst with at most k stops. If there is no such route, return -1. 
 * 
 * leetcode:https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * leetcode-question:787
 * 
 * code-workflow (DFS): https://github.com/citta-lab/DSA/blob/c23bdbbe16687507b4762c7696efa0e2f92f446f/graphs/blob/cheapFlightsDFS.png
 * 
 * Hint: DFS with memoization 
 * - Apply DFS on adjacency matrix, we can calculate children of node by looping through cities and then
 * mapping with the src. like [src][0], [src][1], [src][2] where 0,1,2 are from n.
 * - add memo to memoize as we will keep visiting same cell multiple times in DFS
 * - Can also be done using "Dijkstra's algorithm" as this is meant for shortest path but having K stops
 * adds more complexity
 *
 *
 * - Bellam-Ford is better ( Time: O(E*k) )
 * -- we will need prices array and tempPrices array which will be used in every stop 
 * -- we update the original prices array after every stop from tempArray. By doing so we can avoid 
 * updating the original prices array directly with min value by bypassing the K stops.
 * */


/** Time:O(E*k) where k is number of stops, Space:O(E) */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;
    
    console.log(prices); // [ 0, Infinity, Infinity, Infinity ]
    
    /** step 1: run only until we meet k + 1 stops */ 
    for(let stop=0; stop < k + 1; stop++){
        
        /** step 2: copy prices helps in determining cost involved in reaching dst by STOP by STOP */ 
        let tempPrices = [...prices];
        
        for(let flight of flights){
            const [src, dst, price] = flight;
            
            
            if(prices[src] === Infinity){
                continue;
            }
            
            let newPrice = price + prices[src];
            
            /** step 3: check with tempPrice as we are interested checking the price with in the STOP loop */
            if(newPrice < tempPrices[dst]){
                tempPrices[dst] = newPrice;
            }
        }
        
        /** step 4: update original prices at end of each stop */
        prices = tempPrices;
    }
    
    return prices[dst] === Infinity ? -1: prices[dst]
    
};


/****************** OR *******************/


 /** DFS with memoization */
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

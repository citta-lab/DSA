/** 
 * 332. Reconstruct Itinerary
 * 
 * You are given a list of airline tickets where tickets[i] = [fromi, toi] represent 
 * the departure and the arrival airports of one flight. Reconstruct the itinerary 
 * in order and return it. 
 * 
 * All of the tickets belong to a man who departs from "JFK", thus, the itinerary must
 * begin with "JFK". If there are multiple valid itineraries, you should return the 
 * itinerary that has the smallest lexical order when read as a single string. 
 * 
 * For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"]. 
 * You may assume all tickets form at least one valid itinerary. 
 * You must use all the tickets once and only once. 
 * 
 * leetcode-question:332
 * leetcode:https://leetcode.com/problems/reconstruct-itinerary/
 * video:https://www.youtube.com/watch?v=ZyB_gQ8vqGA
 * 
 * Hint: 
 * - Directed graph, so we only need src->dest mapping not dest->src.
 * - Sorting given edges first will help in traversing DFS in lexical order. 
 * - 'JFK' is by default airport and will be starting airport
 * - edges (tickets) length + 1 should be equal to our resut itenary to say we completed the travel.
 * - need backtracking if we endup with airport doesnt have connections but we yet to explore more destinations
 * from the adjList. Example:
 *  a <--->c
 *  |
 *  v 
 *  b
 * If we go from a to b first then we can't come back as b doesnt have edge pointing to a. So we will 
 * undo the process by putting b back and go to c. Once c is done we will come back to b.
 * */


 /** time: O(V + E^2) space: O (E) */
 var findItinerary = function(tickets) {
    
    let adjList ={};
    
    /** Step 1: by sorting here we dont have to sort at the end as the answer needs lexical order */
    tickets.sort();
    
    /** Step 2: Hence its directed graph, we need to build src->dest mapping */
    for(let pair of tickets){
        const [start, dest] = pair;
        if(!adjList[start]){
            adjList[start]=[];
        }
        
        adjList[start].push(dest)
    }
    
    // console.log(adjList)
    
    /** Step 3: By default we are given atleast one valid path, JFK being the default starting point */
    let resultArr = ['JFK'];
    
    /** Step 4: DFS with start being JFK, Hence we sorted the tickets before building adjList our DFS 
    will pick alphateically sorted destinations */
    const dfs = (start) =>{
        
        /** if tickets pair + 1 is equal to our result then we completed the work */
        if(resultArr.length === tickets.length+1){
            return true;
        }
        
        /** if we dont have airport listed then we exit */
        if(!adjList[start]){
            return false;
        }
        
        /** deep copy to avoid array reference hence not used [...adjList] */
        const copyAdjList = JSON.parse(JSON.stringify(adjList));

        
        let children = copyAdjList[start];
        /** we need index so remove/add destination airport based on calculation */
        for(let i=0; i<children.length; i++){
            
            let index = i;
            let child = children[i];
            
            /** we remove airport from destination list, add it to our result. This is valid only if we find 
            complete path, if we dont then we need to insert back */
            adjList[start].splice(index,1);
            resultArr.push(child);
            
            let result = dfs(child);
            /** if true then we found complete path so we are done i.e first true condition */
            if(result) return true; 
            
            /** back tracking */
            // https://stackabuse.com/javascript-how-to-insert-elements-into-a-specific-index-of-an-array/
            adjList[start].splice(index, 0, child);
            resultArr.pop();
        }
        
        return false;
    }
    
    let result = dfs('JFK');
    if(result) return resultArr;
    
    return resultArr;
};

let tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets)); // [ 'JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO' ]

tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
console.log(findItinerary(tickets)); // [ 'JFK', 'MUC', 'LHR', 'SFO', 'SJC' ]

/** this will break if we dont do backtracking */
/** adjList = { JFK: [ 'KUL', 'NRT' ], KUL: [], NRT: [ 'JFK' ] } by looking at it when we go from JFK to 
 * KUL first we cant come back and cant go to NRT. So we need to undo going to KUL and go to NRT then revist
 * KUL */
tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
console.log(findItinerary(tickets)); // ["JFK","NRT","JFK","KUL"]   


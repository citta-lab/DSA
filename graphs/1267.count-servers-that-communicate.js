/**
 * 1267. Count Servers that Communicate
 * 
 * You are given a map of a server center, represented as a m * n integer
 * matrix grid, where 1 means that on that cell there is a server and 0 means
 * that it is no server. Two servers are said to communicate if they are on 
 * the same row or on the same column.
 * 
 * Return the number of servers that communicate with any other server.
 * 
 * Examples:
 * Input: grid = [[1,0],[0,1]]
 * Output: 0
 * 
 * Input: grid = [[1,0],[1,1]]
 * Output: 3
 * 
 * Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
 * Output: 4
 * 
 * leetcode:https://leetcode.com/problems/count-servers-that-communicate/
 * leetcode-question:1267
 * 
 * Hint:
 * - Time:O(M*N) and Space:(M*N)
 * - we can already tell DFS is perfect solution
 * - KEY is we need to keep looking all the row cell ( cant retuen if we find 0)
 * - KEY is we also need to keep looking all col cell
 * - if we find server (1) then we count 
 * - DFS will have one for loop for ROW, one for COL ( rather doing 4 way recursion )
 * - use visited, cell==1 before calling DFS parent 
 * - use visited, cell===1 before counting and calling recursion DFS
 */

 var countServers = function(grid) {
    let count = 0;
    let visited = new Set();
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            
            /** only start lookup from 'a' server */
            let isOne = grid[i][j];
            
            /** only lookup if we haven't already ( helps in recursion ) */
            let hash = `${i}-${j}`
            let isVisited = visited.has(hash);
            
            if(isOne && !isVisited){
                visited.add(hash);
                let result = dfs(grid, i, j, visited);
                if(result > 1) count += result
            }
        }
    }
    
    return count
    
};

function dfs(grid, row, col, visited) {
        
        /** start the count */
        let canCommunicate = 1;
        
        /** will look up all row cells keeping column constant */
        for(let i=0; i<grid.length; i++){
            let isOne = grid[i][col];
            
            let hash = `${i}-${col}`
            let isVisited = visited.has(hash);
            
            if(isOne && !isVisited){
                visited.add(hash)
                canCommunicate += dfs(grid, i, col, visited);
            }
        }
    
        /** will lookup all column keeping row constant */
        for(let j=0; j<grid[0].length; j++){
            let isOne = grid[row][j];
            
            let hash = `${row}-${j}`
            let isVisited = visited.has(hash);
            
            if(isOne && !isVisited){
                visited.add(hash)
                canCommunicate += dfs(grid, row, j, visited);
            }
        }
        
        return canCommunicate
    }
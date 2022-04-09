/**
 * 827. Making A Large Island
 * 
 * You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
 * Return the size of the largest island in grid after applying this operation.
 * An island is a 4-directionally connected group of 1s.
 * 
 * Input: grid = [[1,0],[0,1]]
 * Output: 3
 * 
 * Input: grid = [[1,1],[1,0]]
 * Output: 4
 * 
 * Input: grid = [[1,1],[1,1]]
 * Output: 4
 * 
 * Input: grid = [[0,0],[0,1]]
 * Output: 2
 * 
 * leetcode-question:827
 * leetcode:https://leetcode.com/problems/making-a-large-island/
 * 
 * Hint:
 * - Bruteforce ( fails at 37th test )
 * - Time:O(n*m) and Space:O(n*m)
 * - DFS with visited ( same DFS as we would use for finding the max island size)
 * - Before calling DFS.
 * -- check if cell value is 0, if yes then change it to 1 and call dfs
 * ( as we can atmost change once)
 * -- do the Math.max on result and current result
 * -- backtrack by reverting cell to 0 as it will give wrong answer
 */

 /** Bruteforce (fails at 37th test ) */
 var largestIsland = function(grid) {
    let visited = new Set();
    
    let res = -Infinity;
    let zeroFound = false;                             /** if didnt find zero then need to find grid size*/
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            
            /** pick cell with 0 so we can make it to 1 ( at most we can change once ) */
            if(grid[i][j] === 0){
                
                zeroFound = true;                    /** we found zero so we need return res */
                grid[i][j] = 1;                         /** make it to one 1 */
                let curRes = dfs(i, j, grid, visited);
                res = Math.max(res, curRes);            /** keep max island we found */
                grid[i][j] = 0;                         /** backtrack */
            }
        }
    }
    
    return zeroFound ? res : grid.length * grid[0].length; 
};

/** this is normal DFS which we can use to find the size of an island */
function dfs(row, col, matrix, visited){
    
    let count = 1;
    
    let rowInBound = row >= 0 && row < matrix.length;
    let colInBound = col >= 0 && col < matrix[0].length;
    if(!rowInBound || !colInBound) return 0;
    
    if(matrix[row][col] === 0) return 0;
    
    /** this needs to happen after above check or will fail when matrix is [[0,0][0,1]] */
    let hash = `${row}-${col}`;
    if(visited.has(hash)) return 0;
    visited.add(hash);
    
    count += dfs(row+1, col, matrix, visited);
    count += dfs(row-1, col, matrix, visited);
    count += dfs(row, col+1, matrix, visited);
    count += dfs(row, col-1, matrix, visited);
    
    return count
}
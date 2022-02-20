/** 
 * 
 * 200. Number of Islands
 * 
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
 * return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * leetcode-question:200
 * leetcode:https://leetcode.com/problems/number-of-islands/
 * BLIND: 43 (43/75)
 * 
 * */

/** time :O(M*N) and space: O(M*N) */
 var numIslands = function(grid) {
    let count = 0;
    let visited = new Set();
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === '1'){
                let result = DFS(grid, i, j, visited);
                if(result) count++   
            }
        }
    }
    
    return count
};

function DFS(grid, row, col, visited){
    
    let rowInBound = row >= 0 && row < grid.length;
    let colInBound = col >=0 && col < grid[0].length; 
    
    if(!rowInBound || !colInBound){
        return false;
    }
    
    if(grid[row][col] === "0"){
        return false;
    }
    
    let hash = `${row}-${col}`;
    if(visited.has(hash)) return false;
    visited.add(hash);
    
    DFS(grid, row+1, col, visited)
    DFS(grid, row-1, col, visited)
    DFS(grid, row, col+1, visited)
    DFS(grid, row, col-1, visited)
    
    return true
}
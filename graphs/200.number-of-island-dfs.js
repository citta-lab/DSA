/** Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
 * return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * leetcode-question:200
 * leetcode:https://leetcode.com/problems/number-of-islands/
 * 
 * */

var numIslands = function(grid) {

    let dfs = (row, col, grid, visited) => {
        
        let inBoundRow = row >= 0 && row < grid.length;
        let inBoundCol = col >= 0 && col < grid[0].length; 
        
        if(!inBoundRow || !inBoundCol){
            return false;
        }
        
        if(grid[row][col] === '0'){
            return false;
        }
        
        let hash = `${row}-${col}`;
        if(visited.has(hash)) return false;
        visited.add(hash);
        
        dfs(row-1, col, grid, visited);
        dfs(row+1, col, grid, visited);
        dfs(row, col-1, grid, visited);
        dfs(row, col+1, grid, visited);
        
        return true;
    }

    let count = 0;
    let visited = new Set();
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === '1'){
                let result = dfs(i, j, grid, visited);
                if(result) count++;
            }
        }
    }
    
    return count
};
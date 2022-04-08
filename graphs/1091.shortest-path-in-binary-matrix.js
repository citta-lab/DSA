/**
 * 1091. Shortest Path in Binary Matrix
 *
 * Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. 
 * If there is no clear path, return -1. A clear path in a binary matrix is a path from the top-left 
 * cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that: 
 * - All the visited cells of the path are 0.
 * - All the adjacent cells of the path are 8-directionally connected 
 * (i.e., they are different and they share an edge or a corner).
 * - The length of a clear path is the number of visited cells of this path.
 *
 * Input: grid = [[0,1],[1,0]]
 * Output: 2
 *
 * Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
 * Output: -1
 *
 * leetcode-question:1091
 * leetcode:https://leetcode.com/problems/shortest-path-in-binary-matrix/
 *
 *
 * Hint:
 * - Time:O(N*N) and Space:(N*N)
 * - Shortest Path, so BFS with LEVEL ORDER dont do DFS
 * - queue can start with first row and col like `queue[[0,0]]`
 * - we need VISITED set for not visiting the same cell
 * - we need to CHECK if first and last cell is accessible so we can traverse at the start
 * -- ie grid[0][0] !== 0 || grid[grid.length-1][grid[0].length-1] !== 0 return -1
 * - we need 8 directions 
 */

var shortestPathBinaryMatrix = function(grid) {
   
    let rowEnd = grid.length; 
    let colEnd = grid[0].length; 
    let directions = [[0,1],[0,-1],[1,0],[-1,0],[1,-1],[-1,1],[-1,-1],[1,1]]; 
    
    /** if our start and end is not accessible then we cant do anything */
    if(grid[0][0] !== 0 || grid[rowEnd-1][colEnd-1] !== 0) return -1
    
    let visited = new Set();
    let hash = `0-0`;
    visited.add(hash);
    
    let queue = [[0,0]];
    let count = 0;
    
    while(queue.length){
        
        let size = queue.length;
        
        for(let i=0; i<size; i++){
            let coOrdinates = queue.shift();
            
            const [row, col] = coOrdinates;
            
            /** true base condition to return when bottom corner is reached*/
            if(row === rowEnd-1 && col === colEnd-1){
                return count + 1;
            }
            
            /** lets check for all directions */
            for(let dir=0; dir<directions.length; dir++){
                
                let [dirRow, dirCol] = directions[dir];
                
                /** prep for next co-ordinates */
                let nextRow = dirRow + row;
                let nextCol = dirCol + col;
                
                /** check if we have not already visited */
                let hash = `${nextRow}-${nextCol}`;
                let notVisited = !visited.has(hash);
                
                /** check if we are not crossing boundry with new directions */
                let nextRowInBound = nextRow >= 0 && nextRow < rowEnd;
                let nextColInBound = nextCol >= 0 && nextCol < colEnd;
                
                /** if everything is check, then add next cell to queue and update visited */
                if(nextRowInBound && nextColInBound 
                   && notVisited && grid[nextRow][nextCol] === 0){
                    queue.push([nextRow, nextCol]);
                    visited.add(hash);
                }
            }
            
        }
        
        count++
    }
    
    return -1
};
 
 

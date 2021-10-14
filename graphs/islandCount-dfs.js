/** Given an two dimentional array of water ( w ) and land ( l ) calculate number of
 * island.
 * 
 * Important:
 * This is just a different variation of unidrectional component count graph problem.
 * However the given data is represnted in two dimentional array and is still a unidirectional.
 * 
 * Use:
 * We will use DFS as we can go as deep as we can with in a island and also problem is
 * not about SHORTEST path. 
 * 
 * LEET CODE QUESTIONS:
 * https://leetcode.com/problems/number-of-islands/submissions/
 * https://leetcode.com/problems/number-of-provinces/solution/ fails when input is [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]] why ?
 */

 /** given m*n grid of water/land */
 const grid = [
     ['w', 'l', 'w', 'w', 'w'],
     ['w', 'l', 'w', 'w', 'w'],
     ['w', 'w', 'w', 'l', 'w'],
     ['w', 'w', 'l', 'l', 'w'],
     ['l', 'w', 'w', 'l', 'l'],
     ['l', 'l', 'w', 'w', 'w'],
 ];

 const island = (grid) => {
     let islandCount = 0;
     let visited = new Set(); // O(1) time & O(n) space
     /** have to loop through each boc and send it to dfs */
     for(let i=0; i<grid.length; i++){  // O(n*m) time and space
         for(let j = 0; j<grid[0].length; j++){
             /** making dfs return true/false helps in counting here */
            let result = dfs(i, j, grid, visited);
            if(result) islandCount += 1;
         }
     }

     return islandCount;
 }

 // O(n*m) time and space
 const dfs = (row, col, array, visited) => {

    /** 
     * Step 1: ( has to be first check )
     * Make sure when we recursing the dfs function we dont
     * go beyond the array row/col elements. 
     */
    const rowInBound = 0 <= row && row < array.length;
    const colInBound = 0 <= col && col < array[0].length;
    if(!rowInBound || !colInBound) return false;

    /**
     * Step 2:
     * We only need to worry if it's land, so check for water
     * and if it's water then return false, pick up next from 
     * main loop.
     */
    if(array[row][col] === 'w') return false;

    /**
     * Step 3:
     * Need to make sure we are not traversing the visted node.
     * Also we need to keep track of position rather than a value,
     * hence hashing to create unique string off of indexes. 
     */
     const hash = `${row}-${col}`;
     if(visited.has(hash)) return false;
     visited.add(hash); // if not visited mark it now, then process

     dfs(row+1, col, array, visited); // going down
     dfs(row-1, col, array, visited); // going up
     dfs(row, col+1, array, visited); // going right
     dfs(row, col-1, array, visited); // going left

     /** if nothing failed then return true */
     return true;
 }

console.log(island(grid));

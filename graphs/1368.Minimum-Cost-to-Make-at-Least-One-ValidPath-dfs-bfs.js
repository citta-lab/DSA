/** 
 * Given an m x n grid. Each cell of the grid has a sign pointing to the next cell 
 * you should visit if you are currently in this cell. 
 * 
 * The sign of grid[i][j] can be:
 * 1 which means go to the cell to the right. (i.e go from grid[i][j] to grid[i][j + 1]) 
 * 2 which means go to the cell to the left. (i.e go from grid[i][j] to grid[i][j - 1])
 * 3 which means go to the lower cell. (i.e go from grid[i][j] to grid[i + 1][j])
 * 4 which means go to the upper cell. (i.e go from grid[i][j] to grid[i - 1][j])
 * 
 * Notice that there could be some signs on the cells of the grid that point outside the grid. 
 * You will initially start at the upper left cell (0, 0). 
 * A valid path in the grid is a path that starts from the upper left cell (0, 0) 
 * and ends at the bottom-right cell (m - 1, n - 1) following the signs on the grid. 
 * The valid path does not have to be the shortest.
 * 
 * You can modify the sign on a cell with cost = 1. You can modify the sign on a cell one time only. 
 * Return the minimum cost to make the grid have at least one valid path. 
 * 
 * Example:
 * Input: grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
 * Output: 3
 * 
 * Example:
 * Input: grid = [[1,1,3],[3,2,2],[1,1,4]]
 * Output: 0
 * Explanation: You can follow the path from (0, 0) to (2, 2).
 * 
 * leetcode-question:1368
 * leetcode:https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * videos:https://www.youtube.com/watch?v=GsiufseelNQ
 * 
 * Hint:
 * Use DFS to find if we have valid path so minCost is 0
 * Use BFS ( queue ) to traverse on the nodes from DFS to find if we can reach end with min change
 * 
 * 
 * */

/** Time: O(NM) Space: O(NM) */
var minCost = function(grid) {
    
    /** problem statement indicates we need to make miminum change to make 
    it to end of the matrix. Problem can already have valid path so no change
    needed, if we dont have valid path then we need to make change */
    
    let bfsQueue = [];
    
    /** This can be visited set with hash like `${row}-${col}` but not tested  */
    let minCost = new Array(grid.length).fill(Infinity)
    .map(x => new Array(grid[0].length).fill(Infinity));
    
    /** 
      Step 1: find if we have valid path, 
      if yes then cost will be zero 
    */
    let cost = 0; /** will be zero as long as we find path without change */
    let dfs = (row, col) => {
        
        const inBoundRow = row >= 0 && row < grid.length;
        const inBoundCol = col >= 0 && col < grid[0].length;
        
        if(!inBoundRow || !inBoundCol){
            return;
        }
        
        /** we have already found the cost so we dont need 
        to do it again (also acts as visited Set */
        if(minCost[row][col] !== Infinity){
            return;
        }
        
        /** we didnt change direction, so cost is 0.
        Bfs call will change the cost */
        minCost[row][col] = cost;
        
        /** we will add these 0 cost co-oridantes in queue, 
        so we can run BFS to find min cost/change needed to
        reach the bottom down */
        bfsQueue.push([row, col]);
        
        /** 
           Given in Problem Statement:
           1: go right ( so increment col+1 )
           2: go left ( so decrement col-1 )
           3: go down ( so increment row+1 )
           4: go up (so decrement row-1)
         */
        const nextDirection = grid[row][col];
        
        /** we only need to one, but that should depend on nextDirection */
        if(nextDirection === 1) dfs(row, col+1); // left
        if(nextDirection === 2) dfs(row, col-1); // right
        if(nextDirection === 3) dfs(row+1, col); // down
        if(nextDirection === 4) dfs(row-1, col); // up
    };
    
    dfs(0,0); /** we need to start from top and go all the way right down */
    
    /** if we have valid path by now, we would have found the min cost */
    let lastRow = grid.length-1;
    let lastCol = grid[0].length-1;
    if(minCost[lastRow][lastCol] !== Infinity){
        return minCost[lastRow][lastCol]
    }
    
    while(bfsQueue.length){
        
        let size = bfsQueue.length;
        cost++;
        
        for(let i=0; i<size; i++){
            let node = bfsQueue.shift();
            let [row, col] = node;
            dfs(row+1, col);
            dfs(row-1, col);
            dfs(row, col+1);
            dfs(row, col-1);
        }
    }
    
    console.log(minCost)
    return minCost[lastRow][lastCol]
};


let grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]];
console.log(minCost(grid)); // 3

grid = [[1,1,3],[3,2,2],[1,1,4]];
console.log(minCost(grid)); // 0 <-- given path is already valid and can reach end without any change.

grid = [[1,2],[4,3]];
console.log(minCost(grid)); // 1
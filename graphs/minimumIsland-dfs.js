/** given two dimentional array return the minimum size of an island. Given grid of land and water with m*n matrix */


 /** given m*n grid of water/land */
 const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w'],
];

const minSizeIslandCounter = (grid) => {
    let minSizeIsland = Infinity;
    let visited = new Set(); // O(1) time & O(n) space
    /** have to loop through each boc and send it to dfs */
    for(let i=0; i<grid.length; i++){  // O(n*m) time and space
        for(let j = 0; j<grid[0].length; j++){
            /** making dfs return true/false helps in counting here */
           let result = dfs(i, j, grid, visited);
           if(result) minSizeIsland = Math.min(minSizeIsland, result);
        }
    }

    return minSizeIsland;
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
   if(!rowInBound || !colInBound) return 0;

   /**
    * Step 2:
    * We only need to worry if it's land, so check for water
    * and if it's water then return false, pick up next from 
    * main loop.
    */
   if(array[row][col] === 'w') return 0;

   /**
    * Step 3:
    * Need to make sure we are not traversing the visted node.
    * Also we need to keep track of position rather than a value,
    * hence hashing to create unique string off of indexes. 
    */
    const hash = `${row}-${col}`;
    if(visited.has(hash)) return 0;
    visited.add(hash); // if not visited mark it now, then process

    /**
     * Step 4:
     * Hence dfs for one component revoles around this main dfs context
     * we can create a size and initlaize it to 1 as we are in one of the
     * node, then in every dfs call update.
     */
    let size = 1;
    size = size + dfs(row+1, col, array, visited); // going down
    size = size + dfs(row-1, col, array, visited); // going up
    size = size + dfs(row, col+1, array, visited); // going right
    size = size + dfs(row, col-1, array, visited); // going left

    /** if nothing failed then return true */
    return size;
}

console.log(minSizeIslandCounter(grid));
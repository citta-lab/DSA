let grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w'],
];

const minIsland = (grid) => {
    let visited = new Set();
    let minSize = Infinity;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            let size = dfs(i, j, grid, visited);
            if(size > 0){
                minSize = Math.min(minSize, size);
            }
        }
    }

    return minSize === Infinity ? 0 : minSize;
}

const dfs = (row, col, grid, visited) => {

    let size = 0;

    let inBoundRow = row >= 0 && row < grid.length; 
    let inBoundCol = col >= 0 && col < grid[0].length; 
    if(!inBoundCol || !inBoundRow){
        return 0;
    }

    let value = grid[row][col];
    if(value === 'w'){
        return 0;
    }

    let hash = `${row}-${col}`;
    if(visited.has(hash)){
        return 0;
    }
    visited.add(hash);
    size++; 
    
    size = size + dfs(row-1, col, grid, visited);
    size = size + dfs(row+1, col, grid, visited);
    size = size + dfs(row, col-1, grid, visited);
    size = size + dfs(row, col+1, grid, visited);

   // console.log(size)
    return size;
}

console.log(minIsland(grid));
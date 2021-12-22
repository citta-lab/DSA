let grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w'],
];

const islandCount = grid => {
    let visited = new Set();
    let count = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            let result = dfs(i, j, grid, visited);
            if(result) count++
        }
    }

    return count;
}

let dfs = (row, col, grid, visited) => {
    
    let inBoundRow = row >= 0 && row < grid.length; 
    let inBoundCol = col >= 0 && col < grid[0].length;

    if(!inBoundCol || !inBoundRow){
        return false;
    }

    let value = grid[row][col];
    if(value === 'w'){
        return false;
    }

    let hash = `${row}-${col}`;
    if(visited.has(hash)){
        return false;
    }
    visited.add(hash);

    dfs(row-1, col, grid, visited);
    dfs(row+1, col, grid, visited);
    dfs(row, col-1, grid, visited);
    dfs(row, col+1, grid, visited);

    return true;
}

console.log(islandCount(grid));
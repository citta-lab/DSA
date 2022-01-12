/** 
 * 
 * 1091. Shortest Path in Binary Matrix 
 * 
 * Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. 
 * If there is no clear path, return -1. A clear path in a binary matrix is a path from the top-left cell 
 * (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that: 
 * - All the visited cells of the path are 0. 
 * - All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
 * 
 * The length of a clear path is the number of visited cells of this path.
 * 
 * Example:
 * Input: grid = [[0,1],[1,0]]
 * Output: 2
 * 
 * leetcode-question:1091
 * leetcode:https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * another solution:https://leetcode.com/problems/shortest-path-in-binary-matrix/discuss/731983/JavaScript-Classic-BFS-with-tracking-visited-nodes-(with-comments)
 * 
 * HINT: BFS as it is mentioned SHORTEST PATH ( use QUEUE )
 * */

/** time: O(N) space: O(N) */
var shortestPathBinaryMatrix = function(grid) {
    
    /** base condition */
    if(grid.length === 0){
        return -1;
    }
    
    /** if our first cell is not empty then we cant even go anywhere */
    if(grid[0][0] === 1){
        return -1;
    }
    
    /** row,col = 0,0 hence it will be first cell */
    let queue = [[0,0]]; 
    
    /** updating to mark as it is visited and also using this as distance cal*/
    grid[0][0] = 1; 
    
    while(queue.length){
        
        let node = queue.shift();
        const [row, col] = node;
        
        /** base condition: when we reach the last cell */
        let distance = grid[row][col];
        if(row === grid.length-1 && col === grid[0].length-1) {
            return distance;
        }
        
        /** get 8 directions but make sure they are valid and cell has 0 before */
        let children = getChildren(row, col, grid);
        
        /** loop through the row,col for all 8 direction and add it to queue */
        for(let child of children){
            const [childRow, childCol] = child;
            queue.push([childRow, childCol]);
            
            /** update the current cell with distance + 1 */
            grid[childRow][childCol] = distance + 1;
        }
    }
    
    return -1;
};

const DIR = [
        /** right, left, up, down */
        [1,0], [-1,0], [0,1], [0,-1], 
        /** all corner moves */
        [1,1], [-1,1], [-1,-1], [1,-1]
    ]; 

const getChildren = (row, col, grid) => {
    let result = [];
    
    for(let i=0; i<DIR.length; i++){
        
        let newRow = row + DIR[i][0];
        let newCol = col + DIR[i][1];
        
        let inBoundRow = newRow >= 0 && newRow < grid.length; 
        let inBoundCol = newCol >= 0 && newCol < grid[0].length;
        
        if(!inBoundRow || !inBoundCol){
            continue;
        }
        
        /** make sure we have clear path and not visisted ( updated with distance) 
        or is a wall (i.e 1) */
        let clearPath = 0;
        if(grid[newRow][newCol] !== clearPath){
            continue;
        }
        
        result.push([newRow, newCol]);
    }
    
    return result;
}

let grid = [[0,1],[1,0]];
console.log(shortestPathBinaryMatrix(grid)); //2

grid = [[0,0,0],[1,1,0],[1,1,0]];
console.log(shortestPathBinaryMatrix(grid)); //4

grid = [[1,0,0],[1,1,0],[1,1,0]]
console.log(shortestPathBinaryMatrix(grid)); //-1
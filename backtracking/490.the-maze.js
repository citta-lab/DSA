/**
 * 490. The Maze 
 *
 * There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1). 
 * The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. 
 * When the ball stops, it could choose the next direction.
 * 
 * Given the m x n maze, the ball's start position and the destination, 
 * where start = [startrow, startcol] and destination = [destinationrow, destinationcol], 
 * return true if the ball can stop at the destination, otherwise return false.
 * 
 * You may assume that the borders of the maze are all walls (see examples).
 *
 * Input: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]
 * Output: true
 *
 * Input: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]
 * Output: false <--- IMPORTANT 
 *
 * leetcode-question:490
 * leetcode:https://leetcode.com/problems/the-maze/
 *
 * /
 // refer : https://leetcode.com/problems/the-maze/discuss/1976450/Java%3A-DFS-2ms-93.6

/** this fails while destination is not surrounded by walls, so refer link */
var hasPath = function(maze, start, destination) {
    let visited = new Set();
    return dfs(0, 4, maze, destination, visited);
};

function dfs(row, col, maze, destination, visited){
    
    let rowInBound = row >= 0 && row < maze.length;
    let colInBound = col >= 0 && col < maze[0].length;
    
    if(!rowInBound || !colInBound) return false
    
    if(maze[row][col] === 1) return false;
    
    let hash = `${row}-${col}`;
    if(visited.has(hash)) return false;
    visited.add(hash);
    
    if(row === destination[0] && col === destination[1]) return true
    
    if(dfs(row+1, col, maze, destination, visited)) return true
    if(dfs(row-1, col, maze, destination, visited)) return true
    if(dfs(row, col+1, maze, destination, visited)) return true
    if(dfs(row, col-1, maze, destination, visited)) return true
    
    
   return false;
}

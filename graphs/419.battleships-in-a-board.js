/**
 * 419. Battleships in a Board
 * 
 * Given an m x n matrix board where each cell is a battleship 'X' or empty '.', 
 * return the number of the battleships on board. Battleships can only be placed horizontally
 *  or vertically on board. In other words, they can only be made of the shape 1 x k 
 * (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. 
 * 
 * At least one horizontal or vertical cell separates between two battleships 
 * (i.e., there are no adjacent battleships).
 * 
 * Example:
 * Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
 * Output: 2
 * 
 * leetcode-question:419
 * leetcode:https://leetcode.com/problems/battleships-in-a-board/
 * 
 * Hint
 * - BruteForce = Time:O(M*N) and Space:O(M*N)
 * - we would need to ignore if we find battleship next to each other.
 * - DFS with visited set and counter
 * - Need to check if value is `X` and not in visited set before calling DFS
 * 
 * - BruteForce Improved = Time:(M*N) and Space:O(M*N)
 * - In Place Update ( not use visited set )
 * - DFS with counter and will call DFS if value is X
 * - In DFS, we will update board[row][col] = '.' before processing
 * 
 * - Optimaized :: Time:(M*N) and Space:O(1)
 * - we will loop through the matrix but we skip counting if we find BATTLESHIP
 * in row or col based on the instructions 
 */


/***********************************************************************
 * 
 *  BruteForce (visited set):: Time:O(M*N) and Space:(M*N) 
 * 
 * ********************************************************************/

var countBattleships = function(board) {
    let count = 0;
    let visited = new Set();
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            /** start if we have found the battel ship */
            if(board[i][j] === 'X' && !visited.has(`${i}-${j}`)){
                count++
                dfs(board, i, j, visited);
            }
        }
    }
    
    return count;
};

function dfs(board, row, col, visited){
    
    let inBoundRow = row >= 0 && row < board.length;
    let inBoundCol = col >= 0 && col < board[0].length; 
    
    if(!inBoundRow || !inBoundCol){
        return 
    }
    
    if(board[row][col] !== 'X'){
        return 
    }
    
    let hash = `${row}-${col}`;
    if(visited.has(hash)) return 
    visited.add(hash);
    
    board[row][col] = '.';
    dfs(board, row+1, col, visited);
    dfs(board, row-1, col, visited);
    dfs(board, row, col+1, visited);
    dfs(board, row, col-1, visited);
}



/***********************************************************************
 * 
 *  BruteForce (without visited set):: Time:O(M*N) and Space:(M*N) 
 * 
 * ********************************************************************/
 var countBattleships = function(board) {
    let count = 0;
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            /** start if we have found the battel ship */
            if(board[i][j] === 'X'){
                count++
                dfs(board, i, j);
            }
        }
    }
    
    return count;
};

function dfs(board, row, col){
    
    let inBoundRow = row >= 0 && row < board.length;
    let inBoundCol = col >= 0 && col < board[0].length; 
    
    if(!inBoundRow || !inBoundCol){
        return 
    }
    
    if(board[row][col] !== 'X'){
        return 
    }
    
    board[row][col] = '.';
    dfs(board, row+1, col);
    dfs(board, row-1, col);
    dfs(board, row, col+1);
    dfs(board, row, col-1);
}


/***********************************************************************
 * 
 *  Optimal :: Time:O(M*N) and Space:(1) 
 * 
 * ********************************************************************/
var countBattleships = function(board) {
    let count = 0;
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            /** if empty cells then we move on */
            if(board[i][j] === '.') continue;
            
            /** if we find adjacent battleship then we continue until last one */
            if( i > 0 && board[i-1][j] === 'X') continue;
            if( j > 0 && board[i][j-1] === 'X') continue;
            
            count++
        }
    }
    
    return count
};
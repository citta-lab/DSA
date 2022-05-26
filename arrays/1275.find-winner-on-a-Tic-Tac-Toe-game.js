/**
 * 1275. Find Winner on a Tic Tac Toe Game
 * 
 * Tic Tac Toe
 * 
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
 * Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that 
 * the ith move will be played on grid[rowi][coli]. return the winner of the game
 * if it exists (A or B). In case the game ends in a draw return "Draw". 
 * If there are still movements to play return "Pending".
 * 
 * You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), 
 * the grid is initially empty, and A will play first.
 * 
 * leetcode-question:1275
 * leetcode:https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
 * 
 * Hint:
 * - Bruteforce: Time:O(n*m) and Space:O(n*m)
 * - build n*n array 
 * - loop through move and make changes to board based on A or B turn 
 * - if i%2 === 0  then A turn, i%2 !== 0 then B turn
 * - after every turn we need to check if we won
 * - antodiagonal condition is if(row+col === n-1){....}
 * - diagonal condition is if(row===col){....}
 * 
 * - Optimal: Time:O(n^2) and Space:O(n)
 *
 */

 var tictactoe = function(moves) {
    
    let n = 3;
    
    let board = new Array(n).fill(null)
    .map((row) => new Array(n).fill(null));
    
    console.log(board); // [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

    for(let i=0; i<moves.length; i++){
        
        let move = moves[i];
        let row = move[0];
        let col = move[1];
        
        if(i%2 === 0){
            /** if even, then we will make 'A's move i.e X */
            board[row][col] = 'X';
            let result = didWeWin(board, row, col, 'X');
            if(result) return 'A';
        }else{
            /** if odd, then we will make 'B's move i.e O */
            board[row][col] = 'O';
            let result = didWeWin(board, row, col, 'O');
            if(result) return 'B';
        }
    }
    
    return moves.length === n*n ? 'Draw' : 'Pending';
};


function didWeWin(board, row, col, player){
    
    let didPlayerWin = true;
    /** check row's if we have all values as player */
    for(let i=0; i<board.length; i++){
        if(board[row][i] !== player){
            didPlayerWin = false;
        }
    }
    
    if(didPlayerWin) return true;
    
    didPlayerWin = true;
    /** check col's if we have all col cells has same player val */
    for(let i=0; i<board[0].length; i++){
        if(board[i][col] !== player){
            didPlayerWin = false;
        }
    }
    
    if(didPlayerWin) return true;
    
    /** check diagonal if we have same cell values */
    if(row === col){
        let didPlayerWin = true;
        for(let i=0; i<board.length; i++){
            if(board[i][i] !== player){
                didPlayerWin = false
            }
        }
        
        if(didPlayerWin) return true;
    }
    
    
    
    /** check anti-daigonal */
    if(row+col === board.length-1){
        let didPlayerWin = true;
        for(let i=0; i<board.length; i++){
            if(board[i][board.length-1-i] !== player){
                didPlayerWin = false;
           }
        }       
        
        if(didPlayerWin) return true;
    }
    
    //no one won
    return false;
}
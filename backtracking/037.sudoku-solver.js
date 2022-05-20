/**
 * 37. Sudoku Solver
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 *
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 *
 * The '.' character indicates empty cells.
 *
 * leetcode-question:37
 * leetcode: https://leetcode.com/problems/sudoku-solver/
 *
 * Hint:
 * - Backtracking 
 * - Time: O(1) and Space:O(1) as board is of fixed size 9*9
 * - Operation Time Cost per row is 9! and we have 9 additional column so in total (9!)^9
 * - we need to use nested for loop and start checking below if the cell is EMPTY
 * - first, check if entire ROW alrerady has the num we are going to assign 
 * - second, check if the entire COLUMN already has the num we are trying to assign 
 * - third, check if 3*3 board has the num we are trying to assign 
 * - if we do find num exist in these condition, we need to BACKTRACK by emptying the cell to '.'
 */

var solveSudoku = function(board) {
    if(!board || !board.length) return;
    solve(board);
};

function solve(board){
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            /** lets make sure cell is empty before we start */
            if(board[i][j] === '.'){
                /** try placing a num from 1 to 9 in the board */
                for(let char=1; char<=9; char++){
                    
                    /** converting it to string for comparision */
                    let num = char + '';
                    
                    let isValid = validate(board, i, j, num);
                    
                    if(isValid){
                        /** place num as row, col and 3*3 board doesnt have it already */
                        board[i][j] = num;
                        
                        /** call recurive */
                        let result = solve(board);
                        if(result) return true;
                        
                        /** we couldn't fit the picked num, so we backtrack */
                        board[i][j] = '.';
                    }
                }
                
                return false;
            }
        }
    }
    
    return true
}


function validate(board, row, col, num){
    for(let i=0; i<9; i++){
        
        /** make sure row doesnt have this 'num' already */
        if(board[i][col] !== '.' && board[i][col] === num) return false;
        
        /** make sure col doesnt have this 'num' already */
        if(board[row][i] !== '.' && board[row][i] === num) return false;
        
        /** make sure 3*3 sub matrix doesnt have this already */
        if(
            board[ 3* Math.floor(row/3) + Math.floor(i/3)] [ 3 * Math.floor(col/3) + i % 3] !== '.' 
            && 
            board[ 3* Math.floor(row/3) + Math.floor(i/3)] [3 * Math.floor(col/3) + i % 3] === num
        
        ) return false
    }
    
    return true
}
 

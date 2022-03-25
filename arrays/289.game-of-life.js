/** 289. Game of Life 
 * 
 * According to Wikipedia's article: "The Game of Life, also known simply as Life, 
 * is a cellular automaton devised by the British mathematician John Horton Conway 
 * in 1970."
 * 
 * leetcode-question:289
 * leetcode:https://leetcode.com/problems/game-of-life/
 * video:https://www.youtube.com/watch?v=fei4bJQdBUQ
 * 
 * Hint:
 * - Time:O(N*M) and Space:O(N*M)
 * - [1] live if neibhours count is less than 2 or 3 else DIE 
 * - [0] live if neibhours count is 3 else DIE
 * 
 */

 var gameOfLife = function(board) {
    
    if(board.length === 0){
        return board;
    }

    
    let r = 0;
    let c = 0; 
    for(r = 0; r < board.length; r++){
        for(c = 0; c < board[0].length; c++){
            
            /** Step 1: score determines how many alive neibhors we have */
            var score = checkNeighbors(r, c, board);
            
            /** Step 2: current cell is alive */
            if(board[r][c] === 1){
                /** but cell cannot be alive as it doesnt follow the rule */
                if(score < 2 || score > 3){
                    board[r][c] = -0.5; // <-- marking it dead
                }
            }
            
            /** Step 3: current cell is dead */
            else if(board[r][c] === 0){
                /** dead cell can be alive if it has 3 alive neibhors */
                if(score === 3){
                    board[r][c] = 0.5; // <-- marking it alive 
                }
            }
        }
    }
    
    /** if -0.5 we convert to 0 using ciel which makes it dead, 0.5 will be replaced with 1 makes it alive */
    for(r = 0; r < board.length; r++){
        for(c = 0; c < board[0].length; c++){
            board[r][c] = Math.ceil(board[r][c]);
        }
    }
};


function checkNeighbors (row, col, board){
      var score = -board[row][col];
      var r, c;
      for(r = row - 1; r <= row + 1; r++){
          for(c = col - 1; c <= col + 1; c++){
              if(typeof board[r] !== "undefined" && typeof board[r][c] !== "undefined"){
                score += Math.abs(Math.floor(board[r][c]));
              }
          }
      }
      return score;
    };
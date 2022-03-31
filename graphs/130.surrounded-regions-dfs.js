/** 

   130. Surrounded Regions
   
   Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
   A region is captured by flipping all 'O's into 'X's in that surrounded region.
   
   Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
   Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
   
   Input: board = [["X"]]
   Output: [["X"]]
   
   leetcode-question:130
   leetcode:https://leetcode.com/problems/surrounded-regions/
   video:https://www.youtube.com/watch?v=9z2BunfoZ5Y
   
   Hint:
   - Time:O(n*m) and Space:(n*m)
   - DFS but with reverse Thingking
   - Instead of doing DFS on all cells we can apply DFS from boarder cells. 
   -- during this we can use DFS to change the boarder 'O' into temp 'T' 
   -- in next step we can use double forloop and update all 'O' to 'W' as it should be inside (not boarder)
   -- use another forloops to change 'T' back to 'O'
   */

/** Time:O(N*M) and Space:O(N*M) */
var solve = function(board) {
    
    /** Step 1: (DFS) capture boarder 'O' and change it to 'T' */
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            /** valid border condition */
            let rowBorder = (i === 0 || i === board.length-1);
            let colBorder = (j === 0 || j === board[0].length-1);
            
            /** valid boarder and cell value is 'O' */
            if(rowBorder || colBorder && board[i][j] === 'O'){
                dfs(i, j, board)
            }
            
        }
    }
    
    /** Step 2: change 'O' to 'X' as it is surrounded by X's ( boarder O's are T now anyway ) */
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            let cellValue = board[i][j];
            if(cellValue === 'O'){
                board[i][j] = 'X'
            }
        }
    }
    
     /** Step 3: Now change temp 'T' back to 'O' as it is the border */
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            let cellValue = board[i][j];
            if(cellValue === 'T'){
                board[i][j] = 'O'
            }
        }
    }
    
    /** DFS used for updating boarder 'O's to 'T's */
    function dfs(row, col, matrix){
        
        let rowInBound = row >= 0 && row < board.length;
        let colInBound = col >= 0 && col < board[0].length;
        
        if(!rowInBound || !colInBound){
            return 
        }
        
        if(matrix[row][col] !== 'O'){
            return 
        }
        
        matrix[row][col] = 'T'
        
        dfs(row, col+1, board)
        dfs(row, col-1, board)
        dfs(row+1, col, board)
        dfs(row-1, col, board)
        
        return 
    }
    
    console.log(board)
};

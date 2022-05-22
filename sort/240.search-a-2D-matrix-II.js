/**
 * 240. Search a 2D Matrix II
 * 
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
 * - Integers in each row are sorted in ascending from left to right.
 * - Integers in each column are sorted in ascending from top to bottom.
 * 
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * Output: true
 * 
 * leetcode:https://leetcode.com/problems/search-a-2d-matrix-ii/
 * leetcode-question:240
 * ref:https://leetcode.com/problems/search-a-2d-matrix-ii/discuss/934056/Binary-search-in-a-2D-matrix-with-explanation.
 * 
 * Hint:
 * - Binary Search 
 * - Time:O(logN!) Space: O(1)
 * - DOESNT work 127/129 for large data (TLE)
 * 
 * - [Optimal] : Search Space Reduction 
 * - Time: O(N+M) and Space:O(1)
 * - Start search from bottom row, left most col
 * - Row values increses from Left to Right 
 * - Col values increased from top to down. 
 */


/*************************************************
 * 
 * Optimal Space Reduction Search. Time:O(N+M)
 * 
 * Note: thing to remember is values are increasing 
 * from left to right in row. top to down in col.
 * 
 *************************************************/
 var searchMatrix = function(matrix, target) {
    
    let row = matrix.length - 1;
    let col = 0; 
    
    while(row >= 0 && col < matrix[0].length){
        
        let cellValue = matrix[row][col];
        
        if(cellValue < target){
            /** if tager is greater, then we need to move col */
            col ++
        } else if (cellValue > target){
            /** we need to move row lower */
            row --
        }
        
        if(cellValue === target) return true
    }
    
    return false;
};



/*************************************************
 * 
 * Binary Search. Time:O(logN!)
 * 
 *************************************************/
 var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length) return false;
   
   const rows = matrix.length;
   const cols = matrix[0].length;
   
   function hasTarget(startRow, endRow, startCol, endCol) {
       // recursion base case
       if(startRow > endRow || startCol > endCol) return false;
       
       // find middle of the matrix
       const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
       const middleCol = Math.floor((endCol - startCol) / 2) + startCol;
       
       // if we found the target we solve the problem, so return true  
       if(matrix[middleRow][middleCol] === target) return true;
       
       // it is the "devide" step, basically, we define the recurrence relation for the recursion function.
       if (matrix[middleRow][middleCol] < target) {
           // let m - is our middle point.
           // if m less than the target than all points before m also less tha target (marked by x)
           // so we only need look through cells marked by 1 and 2
           // x x x 2 2
           // x x x 2 2
           // x x m 2 2
           // 1 1 1 1 1
           // 1 1 1 1 1
           return hasTarget(middleRow + 1, endRow, startCol, endCol) ||
                  hasTarget(startRow, middleRow, middleCol + 1, endCol);
       } else {
           // let m - is our middle point.
           // if m more than the target than all points after m also bigger than the target (marked by x)
           // so we only need look through cells marked by 1 and 2
           // 1 1 2 2 2
           // 1 1 2 2 2
           // 1 1 m x x
           // 1 1 x x x
           // 1 1 x x x
           return hasTarget(startRow, endRow, startCol, middleCol - 1) ||
                  hasTarget(startRow, middleRow - 1, middleCol, endCol);
       }
   }
   
   return hasTarget(0, rows - 1, 0, cols - 1);
}


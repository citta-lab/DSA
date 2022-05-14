/**
 * 
 * 73. Set Matrix Zeroes
 * 
 * Question: Set Zero if the row or column has zero. Do it in place.
 * Example: matrix below should result in answer shown.
 * [[1,1,0],
 * [1,1,1]]    
 * should result in 
 * [[0,0,0],
 * [1,1,0]] 
 * as first row and last column has zero defined.
 * 
 * leetcode-question :73
 * leetcode:https://leetcode.com/problems/set-matrix-zeroes/
 * BLIND: 21 (21/75)
 * 
 * HINT:  
 * Step 1: Loop through each element and build row and column array to determine which
 * row and/or column has zero. Mark that as 1.
 * Step 2: Loop through the matrix again, find the matching from previously found
 * row and/or column. Once we find element for matching row or column then set those
 * values to zero.
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /********************************************************************** 
  * 
  * Most optimal : Time:O(m*n) and Space:O(1)
  * 
  * ********************************************************************/
 var setZeroes = function(matrix) {
    
    /** prepapration
       - consider first row and first col as our indicator
       and update the col or row cell to zero if we find
       - have rowZero variable for matrix[0][0] as it is overlaping
     */
    
    let rowZero = false;
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] === 0){
                
                /** only update the first row elements to zero */
                matrix[0][j] = 0;
                
                /** only update the column eleements to zero after
                first cell*/
                if(i > 0) {
                    matrix[i][0] = 0;
                }else{
                    rowZero = true;
                }
            }
        }
    }
    
    /** 
        Update 1: 
        update row/col elements based on first row, first col
        - while traversing elements we will check if corresponding
        first row or col is zero. If yes then we update the
        element to zero
    */
    
    for(let i=1; i<matrix.length; i++){
        for(let j=1; j<matrix[0].length; j++){
            if(matrix[0][j] === 0 || matrix[i][0] === 0){
                matrix[i][j] = 0
            }
        }
    }
    
    /***
       Update 2:
       Check if first row/cell is zero. If yes then we will 
       update all the row cell in first column to be zero
      */
    if(matrix[0][0] === 0){
        for(let i=0; i<matrix.length; i++){
            matrix[i][0] = 0;
        }
    }
       
    
    /** Update 3:
       If our rowZero boolean is true then we must update
       all the column elements of first row to zero
       */
    if(rowZero){
        for(let j=0; j<matrix[0].length; j++){
            matrix[0][j] = 0;
        }
    }  
};




/********************************************************************** 
  * 
  * Second Optimal :: Time: O(n*m) Space: O(n+m) as we are only 
  * using a row and column 1-d array
  * 
  * ********************************************************************/

 var setZeroes = function(matrix) {

    var col = [];
    var row = [];

    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        // preparing seperate arrays to hold zero's column and rows in seperate arrays
        if(matrix[i][j] === 0){
          row[i] = 1;
          col[j] = 1;
        }
      }
    }

    console.log(" row of zeros : "+row+ " col of zeros : "+col);

    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        /**
         * check if the row and column matches with the previously prepared array
         * if yes then filp it to zero for that row or column.
         */
        if(row[i] === 1 || col[j] === 1){
          matrix[i][j] = 0;
        }
      }
    }

    console.log(matrix)
};


/********************************************************************** 
  * 
  * Third Optimal (Same Complexity but DFS way) ::
  * Time: O(n*m) Space: O(n+m) 
  * 
  * ********************************************************************/

var setZeroes = function(matrix) {
    let visited = new Set();
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] === 0){
                DFS(matrix, i, j, visited)
            } 
        }
    }
    
    return matrix;
};

function DFS(matrix, row, col, visited){
    
    let rowInBound = row >= 0 && row < matrix.length;
    let colInBound = col >= 0 && col <matrix[0].length;
    
    if(!rowInBound || !colInBound){
        return 
    }
    
    /** if the value we are trying to process is not 0 then return */
    if(matrix[row][col] === 1){
        return
    }
    
    let hash = `${row}-${col}`
    if(visited.has(hash)) return
    visited.add(hash);
    
    /** 
      instead of havinf DFS run on all 4 directions we would 
      only need to run DFS on row or column wise 
      
      row wise : keep col the same, run i=0 until matrix.length 
      col wise : keep row the same, run j=0 until matrix[0].length
      
      */
    
    for(let i=0; i < matrix.length; i++){
        if(matrix[i][col] != 0){
            hash = `${i}-${col}`
            visited.add(hash);
            matrix[i][col] = 0;
        }
    }
    
    for(let j=0; j < matrix[0].length; j++){
        if(matrix[row][j] != 0){
            hash = `${row}-${j}`
            visited.add(hash);
            matrix[row][j] = 0;
        }
    }
    
    return
}


let matrix = [
  [1,1,1],
  [1,0,1],
  [1,0,1]
]

let matrixTwo = [
  [1,1,0],
  [1,1,1]
]

let matrixThree = 
[
[0,1,2,0],
[3,4,5,2],
[1,3,1,5]
]
setZeroes(matrixThree)
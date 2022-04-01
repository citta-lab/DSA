/** 

54. Spiral Matrix

Spiral Matrix or Spiral Two Dimentional Array or Spiral Array 
Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Input: matrix = [[7],[9],[6]]
Output: [7,9,6]

leetcode:https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array/1168/
leetcode-question:54
leetcode:https://leetcode.com/problems/spiral-matrix/

Hint:
- Make sure to use while(rowStart <= rowEnd && colStart <= colEnd) to call in loop
- use break condition in between if(rowStart > rowEnd || colStart > colEnd) break
*/

var spiralOrder = function(matrix) {
    
    let rowStart = 0;
    let rowEnd = matrix.length-1;
    
    let colStart = 0;
    let colEnd = matrix[0].length-1; 
    
    let result = new Array();
    
    while(rowStart <= rowEnd && colStart <= colEnd){
        
        /** go from left to right, so only increase column index */
        for(let i=colStart; i<=colEnd; i++){
            result.push(matrix[rowStart][i]);
        }
        rowStart ++;  // <-- moves the pointer one down so we skip already added item
        
        /** go from top right to top right bottom, so only increase col */
        for(let i=rowStart; i<=rowEnd; i++){
            result.push(matrix[i][colEnd]);
        }
        colEnd--;
        
        /** if rows !== cols then we cross boundry, so need to check */
        if(rowStart > rowEnd || colStart > colEnd) break;
        
        /** go from right bottom to left bottom */
        for(let i=colEnd; i >= colStart; i--){
            result.push(matrix[rowEnd][i]);
        }
        rowEnd --;
        
        /** go from left bottom to left top */
        for(let i=rowEnd; i>= rowStart; i--){
            result.push(matrix[i][colStart]);
        }
        colStart++; // <-- helps move the pointer inside 
    }
    
    return result;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

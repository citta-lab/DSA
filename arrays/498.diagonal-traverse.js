/** 498. Diagonal Traverse 
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]

leetcode:https://leetcode.com/problems/diagonal-traverse/
leetcode-question:498

Hint: 
- Rather than thinking about changing the row and col indexes to direct the flow, we can simply reverse adding the
items to result array. Example: `result.unshift(mat[i][j])` whenever we have row,col combinations like 
`[0,0], [0,2], [1,1], [2,0]` etc. similarly `result.push(mat[i][j]` whenever we have odd combination like `[0,1], [1,0], [2,1]`.
*/

var findDiagonalOrder = function(mat) {
    
    /** example: [[1,2,3],[4,5,6],[7,8,9]] */ 
    
    let rows = mat.length;  // 3
    let cols = mat[0].length; // 3
    
    /** building one dimentional array which will have rows+cols size */
    let result = new Array(rows+cols - 1).fill(null).map(() => []);    // 5 
    
    console.log(result); // [ [], [], [], [], [] ]
    
    /** main goal here is reverse the direction of adding items to
    result array if the row+col is EVEN. This applies combination of
    row+col so both horizontally and vertically are handled */
    
    for(let row = 0; row < rows; row ++){
        for(let col =0; col <cols; col++){
            
            let position = row + col;
            let value = mat[row][col];
            
            /** if it is EVEN like [row=0, col=0], [row=0, col=2], or [row=2, col=0] */
            if(position % 2 === 0){
                result[row+col].unshift(value);   //  result updated by this code => [ [ 1 ], [], [ 7, 5, 3 ], [], [ 9 ] ]
            }else{
                result[row+col].push(value);      //  result updated by this code => [ [], [ 2, 4 ], [], [ 6, 8 ], [] ]
            }
        }
    }
    
    console.log(result); // [ [ 1 ], [ 2, 4 ], [ 7, 5, 3 ], [ 6, 8 ], [ 9 ] ]
    return result.flat()
    
};

let mat = [[1,2,3],[4,5,6],[7,8,9]]
console.log(findDiagonalOrder(mat));

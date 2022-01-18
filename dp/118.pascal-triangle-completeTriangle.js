/** 
 * 118. Pascal's Triangle 
 * 
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above 
 * it as shown:  *       
 *       1
 *     1   1
 *   1   2   1
 * 1   3   3    1
 * 
 * leetcode-question:118
 * leetcode:https://leetcode.com/problems/pascals-triangle/
 * 
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * Topic: DP
 * 
 * */

 /** Time: O(N^2) due to two for loop & Space: O(N^2)  */
 var generate = function(numRows) {
 
    let triangle = [];
    triangle.push([1]); // first element of first row 
    
     /** for numRows > 1 we start with row=1 as we handled the first row */
    for(let row=1; row<numRows; row++){
        let curRow = [];
        curRow.push(1); /** first element of each row is 1 */
        
        let prevRow = triangle[row-1]; /** find previous row so we can add the prev row col values */
        for(let col=1; col<prevRow.length; col++){
            let prevValue = prevRow[col-1]+prevRow[col];
            curRow.push(prevValue);
        }
        
        curRow.push(1); /** last element of each row is 1 */
        triangle.push(curRow);
    }
     
     return triangle;
 }

 console.log(generate(3));//[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ]
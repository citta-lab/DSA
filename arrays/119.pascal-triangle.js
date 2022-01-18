/** 
 * 199 Pascal Triangle 
 * 
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's 
 * triangle. In Pascal's triangle, each number is the sum of the two numbers directly 
 * above it.
 *       1
 *     1   1
 *   1   2   1
 * 1   3   3    1
 * 
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * 
 * leetcode-question:https://leetcode.com/problems/pascals-triangle-ii/
 * leetcode:199
 * 
 * Topic: Recursion & Array
 * 
 * */

 var getRow = function(rowIndex) {
    let row = [1]; // [1] will be starting cell for all recursion call.
    
    if (rowIndex == 0) return row;  
    if (rowIndex == 1) return [1,1];
    
    prevRow = getRow(rowIndex-1); // for rowIndex = 2 we will get [1,1] as prevRow
    
    for( let i=0; i< prevRow.length-1; i++) {
        row.push(prevRow[i] + prevRow[i+1]); // for rowIndex =2 we will take row=[1] and push [1+1] so it will be [1,2]
    }
    row.push(1); // for rowIndex=2, we will push end 1 so it will be [1,2,1]
    //console.log(row);
    return row;
};

console.log(getRow(2)); //[ 1, 2, 1 ]
console.log(getRow(3)); //[ 1, 3, 3, 1 ]
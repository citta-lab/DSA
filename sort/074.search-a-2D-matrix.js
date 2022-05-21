/**
 * 74. Search a 2D Matrix
 * 
 * Write an efficient algorithm that searches for a value 
 * target in an m x n integer matrix matrix. This matrix has the following 
 * properties:
 * 
 * - Integers in each row are sorted from left to right.
 * - The first integer of each row is greater than the last integer 
 * of the previous row.
 * 
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 * 
 * leetcode: https://leetcode.com/problems/search-a-2d-matrix/
 * leetcode-question:74
 * 
 * Hint:
 * - Time:O(log(m*n)) and Space:O(1)
 * - Array is sorted in m*n i.e BINARY SEARCH 
 * - we know how to do binary search on 1D array, so if we can visualize 
 * as 1D then we will have our answer.
 * - `midNum = matrix[idx/num of rows][idx%num of rows]` will find the 
 * corresponding value from m*n matrix
 */

 var searchMatrix = function(matrix, target) {
    
    if(!matrix.length) return false;
    
    /** treating m*n as 1D array */
    let m = matrix.length;
    let n = matrix[0].length; 
    
    /** binary search prep */
    let left = 0;
    let right = m * n - 1;  
    
    while(left <= right){
        let midIdx = Math.floor((left + right) / 2);
        
        /** way to map 1D array midIdx to n*m array */
        let midNum = matrix[ Math.floor(midIdx/n)][midIdx % n];
        
        if(midNum === target) return true;
        
        if(target < midNum){
            right = midIdx - 1;
        }else{
            left = midIdx + 1;
        }
    }
    
    // we might not have target in array
    return false;
};
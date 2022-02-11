/** 
 * 
 * 48. Rotate Image 
 * 
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees 
 * (clockwise). You have to rotate the image in-place, which means you have to modify the 
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. 
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 * 
 * leetcode:https://leetcode.com/problems/rotate-image/
 * lettcode-question:48
 * video:https://www.youtube.com/watch?v=fMSJSS7eO1w
 * 
 * BLIND: 12 (12/75)
 * 
 * Hint:
 * - we need to move all elements one shift to have 90 degree rotation
 * - we need to treat inner matrix as sub problem
 * - we could rotate from top left to top right, top right to bottom right etc but 
 * it may require temp variable to store each value.
 * - instead of clock wise, we can keep top left value in temp and roate rest in counter
 * wise which will help us not worry about temp variable.
 * - once outer loop is done, we move into inner matrix
 * */

 var rotate = function(matrix) {
    let l = 0; // column start
    let r = matrix.length-1; // column end
    
    while(l<r){
        let numElements = r - l;
        /** for loop is to move pointers to one at a time from left most */
        for(let i=0; i<numElements; i++){
            
            let top = l; // row start 
            let bottom = r; // row end 

            /** we will hold [top][l] value in temp and rotate counter clockwise
            which will save us not worry about having to keep temp for all elements
            if we had rotated in clocjwise way */

            /** store the top left value in temp and go counter clockwise */
            let temp = matrix[top][l+i];
        
            /** move bottom left to top left */
            matrix[top][l+i] = matrix[bottom-i][l];
            
            /** move bottom right to bottom left */
            matrix[bottom-i][l] = matrix[bottom][r-i];
            
            /** move top right to bottom right */
            matrix[bottom][r-i] = matrix[top+i][r];
            
            /** move TEMP to top right */
            matrix[top+i][r] = temp;
        }
        
        /** now do inner matrix */
        l++
        r--
    }
};
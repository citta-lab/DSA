/**
 * 6. Zigzag Conversion
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given 
 * a number of rows:
 * 
 * string convert(string s, int numRows);
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * leetcode:https://leetcode.com/problems/zigzag-conversion/
 * leetcode-question:6
 * 
 * Hint:
 * Time:O(N) and Space:O(1)
 */

 var convert = function(s, numRows) {
    
    if(numRows-1 === 0) return s;
    
    let matrix = new Array(numRows).fill(''); // ['','','']
    
    let index = 0; // index of matrix 
    let increment = true;
    
    for(let i=0; i<s.length; i++){
        let char = s[i];
        matrix[index] += char;
        
        if(index === numRows-1) increment = false;
        if(index === 0) increment = true;
        
        increment ? index ++ : index --
    }
    
    return matrix.join('')
};

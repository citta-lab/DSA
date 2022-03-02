/** 67. Add Binary 
 * 
 * Given two binary strings a and b, return their sum as a binary string. 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * leetcode-question:67
 * leetcode:https://leetcode.com/problems/add-binary/
 * video: https://www.youtube.com/watch?v=keuWJ47xG8g
 * 
 * 
 * */

 var addBinary = function(a, b) {
    
    /** though we need to add from left to right, we cant add in the code
    same way. So we reverse it and go from right to left. Example: 11 + 1 */
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
  
    let carry = 0;
    let result = '';
    
    /** we want to cover all the digits so we loop for max length string */
    let maxSizeBetweenTwo = Math.max(a.length, b.length);
    
    for(let i= 0; i < maxSizeBetweenTwo; i++){
        /** if one of them short we default it to 0 */
        let charFromA = a[i] || 0; 
        let charFromB = b[i] || 0;
        
        /** convert it to int */
        let numAtA = Number(charFromA);
        let numAtB = Number(charFromB);
        
        /** add all of the digits plus carry if any */
        let total = numAtA + numAtB + carry; 
        
        /** % will result in 1 if 1, 3, 5, 7 etc or 0 if 2,4,6 */
        let charToAdd = (total % 2).toString();
        
        /** add it to result, now check if we have remainder using */
        result = charToAdd + result; // <-- becuase we reversed it 
        carry = Math.floor(total / 2);
    }
    
    /** if any carry left we add it. example: 111 + 110 = 1100 */
    if(carry){
        result = '1' + result;
    }
    
    return result;
};

let a = "1010"
let b = "1011"
console.log(addBinary(a,b)); // 10101

a = "111"
b = "110"
console.log(addBinary(a,b)); // 1101

a = "1"
b = "0"
console.log(addBinary(a,b)); // 1
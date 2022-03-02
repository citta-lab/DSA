/** 
 * 8. String to Integer (atoi) 
 * 
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer 
 * (similar to C/C++'s atoi function). 
 * 
 * - Read in and ignore any leading whitespace.
 * - Check if the next character (if not already at the end of the string) is '-' or '+'.
 * - Read in next the characters until the next non-digit character or the end of the input is reached
 * - Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
 * - If the integer is out of the 32-bit signed integer range [-231, 231 - 1],
 *  then clamp the integer so that it remains in the range
 * 
 * leetcode-question:8
 * leetcode:https://leetcode.com/problems/string-to-integer-atoi/
 * ref:https://github.com/BakeItTillYouMakeIt/LeetCodeJS/blob/master/Javascript/008_stringToInteger.js
 * 
 * Hint:
 * - use str.trim() to remove white space 
 * - Have helper isNotNumeric to check if the given char is number string or alphabets
 * -- const isNotNumeric (char) => char < '0' || char > '9'; will return true for alphabets
 * - check if first index and second index char is isNotNumeric (i.e -abc or +abc) then return 0
 * - check if first index char is === -ve or +ve 
 * -- if yes then when we loop str we should do from index 1
 * -- if -ve then have boolean indicator so we can return result -ve
 * - loop through the str for each char and check for isNotNumeric so we can do break
 * - hold digit value by doing str[index].chatCodeAt(0) - '0'.charCodeAt(0).
 * - update result = result * 10 + digit 
 * - check for out of bound by comparing Math.pow(2,31) - 1 and Math.pow(2,31)
 * - return result ( if we have negavtive boolen true then return -result)
 * */

 var myAtoi = function(s) {
    
    if(!s || !s.length) return 0;
    
    let result = 0;
    
    /** 1. ignore white space */
    let str = s.trim();
    
    /** handle if str is '-a' or '+a' or '+abc' */
    if(isNotNumeric(str[0]) && isNotNumeric[str[1]]) return 0;
    
    /** 2. handle -ve and +ve values */
    let negativeSymbol = false;
    let startIndex = 0;
    
    if(str[0] === '-' || str[0] === '+'){
        startIndex ++
    }
    
    if(str[0] === '-'){
        negativeSymbol = true;
    }
    
    /** 3. loop through chars and handle alphabets and number */
    for(let i=startIndex; i<str.length; i++){
        
        let char = str[i];
        
        /** if char is alphabet (ex: a,b,c..) then we exit */
        if(isNotNumeric(char)) break;
        
        /** use this instead of parseInt */
        let digitValue = char.charCodeAt(0) - '0'.charCodeAt(0);
        result = result * 10 + digitValue;
    }
    
    if(negativeSymbol) result = -result;
    
    /** 4. handle out of bound */
    if(result >= Math.pow(2,31)-1) return Math.pow(2,31)-1
    if(result <= -Math.pow(2,31)) return -Math.pow(2,31);
    
    return result
    
};


/** 
we need to check if less than 0 || greater then 9, below is why
example 
 - Alphabets:     'p' > '9' => true  || 'p' < '0' => false. 
 - Number String: '4' > '9' => false || '4' < '0' => false.
 
Test:
 - Having this < '0' || > '9' will handle "4193 with words"
 */
function isNotNumeric(char){
    return char < '0' || char > '9'
}
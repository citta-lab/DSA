/**
 * 7. Reverse Integer
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer 
 * range [-231, 231 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Input: x = 123
 * Output: 321
 * 
 * Input: x = -123
 * Output: -321
 * 
 * leetcode:https://leetcode.com/problems/reverse-integer/
 * leetcode-question:7
 */

 function reverse(x) {
  
    /** checking if we are dealing with postive or negative number */
      
    const isNegative = x < 0;
    x = Math.abs(x);
    
    let ret = 0;
    while (x > 0) {              // example: 123
      const num = x % 10;        //3, 2,1
      x = Math.floor(x / 10);    //12, 1, 1
      ret *= 10;                 //0 , 30, 320
      ret += num;                // 3, 32, 321
    }

    if (ret > Math.pow(2,31)) return 0;
    return isNegative ? ret * -1 : ret;
  };
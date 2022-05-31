/**
 * 29. Divide Two Integers
 * 
 * Given two integers dividend and divisor, divide two integers without using multiplication, 
 * division, and mod operator.
 * 
 * The integer division should truncate toward zero, which means losing its fractional part. 
 * For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 * Return the quotient after dividing dividend by divisor.
 * 
 * Note: Assume we are dealing with an environment that could only store integers within 
 * the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient 
 * is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly 
 * less than -231, then return -231.
 * 
 * Example:
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * 
 * Input: dividend = -7, divisor = -3
 * Output: 2
 * 
 * leetcode:https://leetcode.com/problems/divide-two-integers/
 * leetcode-question:29
 * 
 * Hint:
 * Bruteforce: Time : O(N) and Space:O(1)
 * - Fails when number is of size 2147483648
 * - check if both dividend and divisor is neagative ( keep negative count )
 * - convert them to +ve so we can add negative at the end
 * - dividend - divisor and keep the count 
 * 
 * Optimal: 
 * - keep doubling the divisor which will reduce the time by half
 * - then we need to start from first on remainder by keep doubling the divisor 
 */


 /********************************************************
  * 
  * Optimal - Time:O(logN * logN) and Space:O(1)
  * 
  * ******************************************************/
var divide = function(dividend, divisor) {
    
    /** boundry condition */ 
    if (dividend == -2147483648 && divisor == -1) {
        return 2147483647;
    }
    
    /** lets handle both negative or single negative scenario */
    let negativeCount = 0;
    if(dividend < 0){
        negativeCount ++
        dividend = -dividend
    }
    
    if(divisor < 0){
        negativeCount ++
        divisor = -divisor
    }
    
    
    let count = 0;
    
    /** THIS BLOCK CHANGES BETWEEN BRUTFORCE and HERE */
    while(dividend >= divisor){
        
        let powOfTwo = 1;
        let temp = divisor;
        
        while(temp > 0 && temp + temp < dividend ){
            temp += temp;
            powOfTwo += powOfTwo;
        }
        
        count += powOfTwo;
        dividend -= temp
    }
    
    if(negativeCount === 1) return -count
    
    return count
};

 /********************************************************
  * 
  * Bruteforce - Time:O(N) and Space:O(1)
  * 
  * ******************************************************/
 var divide = function(dividend, divisor) {
    
    
    /** if both dividend and divisor both are negative then result is +ve */
    let negativeCount = 0;
    
    if(dividend < 0){
        negativeCount ++
        dividend = -dividend;
    }
    
    if(divisor < 0){
        negativeCount ++
        divisor = -divisor
    }
    
    /** handle all positve numbers */
    
    let count = 0;
    while(dividend - divisor >= 0){
        dividend = dividend - divisor;
        count++
    }
    
    if(negativeCount === 1) count = -count;
    
    return count
};
/** 
 * 
 * 50. Pow(x, n) 
 * 
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn). 
 * 
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * 
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 * 
 * leetcode-question:
 * leetcode:
 * 
 * Hint: ( use second appraoch as optimization )
 * Use Recursion to imporve Time to LogN 
 * */

/** Time: O(N) and Space: O(1) */
var myPow = function(x, n) {
    
    if(n === 0) return 1;
    
    if(n === 1) return x;
    
    if(x < 2) return x;
    
    /** if we are given 2^-2 then it can be written as 1 / 2^2 */
    if(n < 0) {
        x = 1/x;      /** making it as 1/2 */
        n = n * -1;   /** hence n was -ve, we will make it +ve as we inversed */
    }
    
    let result = 1;
    for(let i=0; i<n; i++){
        result = result * x;
    }
    
    return result;
    
};

let x = 2.00000;
let n = -2;
console.log(myPow(x,n)); // 0.25

/** Recursion */
/** Time: O(log N) and Space: O(log N) from recursion */
var myPow = function(x, n) {
    /** handle if the -ve power so we need to do 1/x and remove the -ve from n */
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    return pow(x, n);
    
    function pow(x, n) {
        if (n == 0) {
            return 1.0;
        }
        
        /** 
        for 2^4 if we know 2^2 value then we can simply multiple the result.
        for 2^5 if we know 2^2 value then we can multiple the result twice and then
        then x to make it for odd number ( i.e even + even + odd )
        */
        const half = pow(x, parseInt(n / 2));
        
        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
};

let x = 2.00000;
let n = -2;
console.log(myPow(x,n)); // 0.25

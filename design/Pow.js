/** 
 * 
 * 50. Pow(x, n) 
 * 
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * 
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * 
 * Input: x = 2.10000, n = 3
 * Output: 9.26100
 * 
 * leetcode-question:https://leetcode.com/problems/powx-n/
 * leetcode:050
 */

/** Bruteforce: O(N) and Space:O(1) */
var myPow = function(x, n) {
    
    /** scenario I: if n is -ve */
    let N = n;
    if(n < 0){
        x = 1/x; /** n is negative so we make 1/x */
        N = -N   /** we addressed n being negative so flipping it back */
    }
    
    /** scenario II: if n is +ve */
    let ans = 1;
    for(let i=0; i<N; i++){
        ans = ans * x;
    }
    
    return ans;
};

/** Optimal : O(logN) and Space:O(logN) */
var myPow = function(x, n) {
    
    /** scenario I: if n is -ve */
    let N = n;
    if(n < 0){
        x = 1/x; /** n is negative so we make 1/x */
        N = -N   /** we addressed n being negative so flipping it back */
    }
    
    /** now we can make sure of finding the value for half and based on
    even or odd power we multiply */
    return myPowHelper(x, N)
};

function myPowHelper(x, N){
    if(N === 0) return 1.0
    
    /** find value for half of N */
    let half = myPowHelper(x, Math.floor(N/2));
    
    /** if x^4 or x^8 etc then n is even and x^5 is odd */
    if(N%2 === 0){
        return half * half;
    }else{
        return half * half * x
    }
}
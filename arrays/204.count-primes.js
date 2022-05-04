/**
 *
 * 204. Count Primes
 *
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 * 
 * Input: n = 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 *
 * leetcode-question:204
 * leetcode:https://leetcode.com/problems/count-primes/
 *
 * Hint:
 * - Time:(sqrt(N) loglogN ) Space:O(N)
 * - Sieve of Eratosthenes
 * - Using array to mark the number's multiplers and it's additon is not prime
 * -- i.e if num = 2 then 2*2 = 4, 4+2 = 6, 6+2 = 8, 8+2= 10 etc are not prime 
 * -- keeping count of not marked numbers as prime ( i.e 2, 3, 5, 7 ... )
 */

 var countPrimes = function(n) {
    
    /** 0 and 1 are not prime so we ignore */
    if (n <= 2) return 0;
    
    /** total number of numbers left to CALCULATE if has prime or not */
    let count = n-2; 
    
    /** array to hold boolean value, defaulted to true ( by default we assume all are prime ) */
    const isPrime = new Array(n).fill(true);
    
    /** instead of checking all numbers, we cut it half and in next cycle we can mark multiple of this (half)
    as not prime */
    const rootN = Math.floor(Math.sqrt(n));
    
    console.log(" n : "+n+ " rootN : "+rootN);  //n : 10 rootN : 3
    
    for (let i=2; i<=rootN; i++)
        if (isPrime[i])
            for (let j=i*i; j<n; j+=i)
                /** mark multiples of j as not prime i.e 2,4,6,8,10 etc */ 
                if (isPrime[j]) {
                    isPrime[j] = false;
                    count--;
                }
    
    return count;
};
 
 

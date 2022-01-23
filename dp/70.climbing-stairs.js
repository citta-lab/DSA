/** 
 * 
 * 70. Climbing Stairs
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you 
 * climb to the top? 
 * 
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * leetcode-question:70
 * leetcode:https://leetcode.com/problems/climbing-stairs/
 * 
 * Topic: DP
 * 
 * */

/** time: O(n) and space:O(1) similar to fib idea of fib(n-1) + fib(n-2) */
var climbStairs = function(n) {
    /**
     1,2,3,4,5 stairs if n=5
     1: 1 i.e ways
     2: 1+1, 2 i.e 2 ways 
     3: 1+1+1, 2+1, 3 i.e 3 ways 
     4: 1+1+1+1, 1+1+2, 2+2, 1+1+2, 1+2+1 i.e 5 ways
     
     pattern:
     to find 3rd stairs combinations we can do first + second 
     to find 4th staies combinations we can do second + third 
     and continues ...
     */
    
     /* base case I */
    if(n===1) return 1; /** there is only one way we can climb 1 stair */
    
     /** base case II */
    if(n===2) return 2; /** we could do 1+1 or 2 so 2 ways */
    
    let first = 1;
    let second = 2; 
    for(let i=3; i<=n; i++){
        let next = first + second;
        
        /** update the pointers to previous 2 positions */
        first = second;
        second = next;
    }
    
    return second;
};
/** 
 * 
 * 322. Coin Change 
 * 
 * You are given an integer array coins representing coins of different denominations 
 * and an integer amount representing a total amount of money. Return the fewest number 
 * of coins that you need to make up that amount. If that amount of money cannot be made
 * up by any combination of the coins, return -1.
 * 
 * You may assume that you have an infinite number of each kind of coin.
 * 
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * leetcode-question:322
 * leetcode:https://leetcode.com/problems/coin-change/
 * 
 * BLIND:65(65/75)
 * 
 * Hint:
 * - BurteForce with Optimization: ( DFS with Memoization )
 * - Time: O(M*N) where M is the amount we need to make up and N is number of coins
 * - Space: O(M) where M is the height it will create to make M amount
 * - we start with amount and use number of coins choices to divded the problem to 
 * smaller amount until we reach 0. 
 * 
 * - Optimized : ( DP )
 * - Time: O(M*N) and Space:O(M) used in dp array
 * - Initialize dp array of size 'amount+1' amd fill with max amount 'Infinity'.
 * - dp array index represents the amount and it's value will indicate the number
 * of coins we used to make up that amount.
 * - Initialize dp[0] = 0 as we can only make up amount 0 with 0.
 * - Loop on dp array from index 1 and loop for each coin ( two for loops )
 * - **IMP** if we find -ve combination we need to ignore. 
 * -- ie if(i-coin < 0) continue
 * - calculate coins needed to make up the amount 
 * -- `dp[i] = Math.min(dp[i], dp[i-coin]+1)`
 * - return dp[dp.length-1] i.e coin combination for given amount
 * */

/** Time:O(M*N) and Space:O(M) where M is amount and N is coins*/
var coinChange = function(coins, amount) {
    
    /** 
    - dp index will represents amount hence our array size
    is of amount + 1. as we will use dp[0] as base. 
    - we need to set maximum value as default in dp
    table as we are looking for min possible combination.
    */
    let dp = new Array(amount+1).fill(Infinity);
    
    /** we cant make 0 with any coin so defaults to 0 */
    dp[0] = 0;
    
    for(let i=1; i<dp.length; i++){
                
        /** 
        possible coins we can use to make respective
        amount (i.e index represents amount at that 
        position) 
        */
        for(let coin of coins){
            
            /** should always be +ve combination */
            if(i-coin < 0){
                continue;
            }
            
            dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }
    
    console.log(dp); // [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3 ]

    return dp[dp.length-1] === Infinity ? -1 : dp[dp.length-1] 
};
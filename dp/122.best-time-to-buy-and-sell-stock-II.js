/** 122. Best Time to Buy and Sell Stock II 
 * 
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of 
 * the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve. 
 * 
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * 
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * 
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * 
 * leetcode-question:122
 * leetcode:https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 
 * Hint:
 * - Bruteforce: Two forloops by finding all profit for each element from first loop
 * -- Time: O(n^2) and Space: O(n)
 * - Optimized: O(n) 
 * -- If we create a chart then the max profit will be achieved in two ways
 * -- (i) finding min buy and max sell price 
 * -- (ii) OR buy finding cumulative of profit from start to end
 * 
 * 
 * 
 * */

/** Time: O(n) and Space:O(1) */
var maxProfit = function(prices) {
    let maxProfit = 0;
    /** starting at 1 so we can check with i-1 for diff */
    for(let i=1; i<prices.length; i++){
        /** IMP: update profit only when we have +ve diff by selling */
        if(prices[i] > prices[i-1]){
            let diff = prices[i] - prices[i-1];
            maxProfit = maxProfit + diff
        }
    }
    
    return maxProfit
};

/** BRUTEFORCE = Time: O(n^n) and Space: O(n) */
var maxProfit = function(prices) {
    return calProfit(prices, 0);
};

function calProfit(prices, start){
    
    if(start >= prices.length) return 0;
    
    let maxProfit = 0;
    for(let i=start; i<prices.length; i++){

        let curProfit = 0;
        for(let j= i+1; j < prices.length; j++){
            
            let buy = prices[i];
            let sell = prices[j];
            if(sell > buy){
                /** we need to calculate the rest of the buy/sell as sub problem */
                let profit = sell - buy + calProfit(prices, j+1);
                curProfit = Math.max(curProfit, profit)
            }
        }
        
        maxProfit = Math.max(maxProfit, curProfit)
    }
    
    return maxProfit
}
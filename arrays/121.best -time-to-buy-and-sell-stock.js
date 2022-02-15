/** 

  121. Best Time to Buy and Sell Stock
  
  You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by 
  choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit 
  you can achieve from this transaction. If you cannot achieve any profit, return 0.
  
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
  
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and the max profit = 0.
  
  leetcode-question:121
  leetcode:https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  
  BLIND: 30 (30/75)
  
  Hint
  - we can do this in O(n2) with two for loops 
  - we can do this in O(N) as well by having to keep minPrice in every pass
  
  */

/** Time: O(N) and Space: O(1) */
var maxProfit = function(prices) {
   let minPrice = Infinity;
   let profit = 0;
    
   for(let i=0; i<prices.length; i++){
       let price = prices[i];
       
       /** if we find price to be less than minPrice, then dont need to calculate profit and we can move on */
       if(price < minPrice){
           minPrice = price;
           continue;
       }
       
       if(price - minPrice > profit){
           profit = price - minPrice;
       }
   }
    
   return profit
};

/**
 *
 * 670. Maximum Swap
 *
 * You are given an integer num. You can swap two digits at most once to get the maximum valued number.
 * Return the maximum valued number you can get.
 *
 * Input: num = 2736
 * Output: 7236
 *
 * Input: num = 9973
 * Output: 9973
 *
 * leetcode-question:670
 * leetcode:https://leetcode.com/problems/maximum-swap/
 *
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - Traverse from back so we can find flick the max number to be swapped with first position
 * - Consider situation if the given number itself is max, then we shouldn't swap
 * - Have maxIdx and maxNum to keep track of max value and postion from Right to Left
 * - Have leftIdx, rightIdx position for swapping. Check example like 2974 
 * - we update leftIdx to current index and rightIdx to maxIdx if we ever find num < maxNum
 *
 *
 *
 */

var maximumSwap = function(num) {
    
    let numString = num.toString().split('');
  
    /** only update it if we find from right to left */
    let maxNum = -1;
    let maxIdx = -1;
    
    /** used to determine if we have the best number already */
    let leftIdx = -1;
    let rightIdx = -1;
    
    for(let i= numString.length-1; i>=0 ; i--){
        let num = parseInt(numString[i]);
        
        if(num > maxNum){
            maxNum = num;
            maxIdx = i;
        }
        
        /** 
         example: '2974' we come all the way until 9 and at 2 we will fall into 
         this else condition. So left will get 2's index i.e 0 and right will
         get 9's index i.e 1
         */
        else if(num < maxNum){
            leftIdx = i;
            rightIdx = maxIdx
        }
    }
    
    /** given num must be the biggest */
    if(leftIdx === -1) return num;
    
    /** if we didnt do early return then we updated leftIdx and rightIdx. Which needs swap */
    [numString[leftIdx], numString[rightIdx]] = [numString[rightIdx], numString[leftIdx]]
    
    return parseInt(numString.join(''))
    
};

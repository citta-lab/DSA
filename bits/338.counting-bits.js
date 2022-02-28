/** 
 * 
 * 338. Counting Bits  ( same as one in DP folder )
 * 
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
 * ans[i] is the number of 1's in the binary representation of i.
 * 
 * Input: n = 2
 * Output: [0,1,1] 
 * 
 * Input: n = 5
 * Output: [0,1,1,2,1,2]
 * 
 * leetcode-question:338
 * leetcode:https://leetcode.com/problems/counting-bits/
 * video:https://www.youtube.com/watch?v=RyBM56RIWrM
 * BLIND: 67
 * 
 * Hint
 * - BruteForce: 
 * - Time: O(nlogn) and Space:O(n)
 * - Using modulo opeatror (%) and (/) to shift the bits (takes logN time)
 * - Will apply for all n numbers ( time: nlogn)
 * 
 * - DP
 * - Time: O(n) and Space:O(n)
 * - Using the fact that the bits are binary in nature (i.e 2)
 * - Making use of offset (i.e 1,2,4,8,16,32) to calculate and reuse previous
 * calculations. i.e dp[n-offset]
 * 
 * - These are bits for numbers 
 * 0 -> 0000 [ no significat bit. i.e left most 1]
 * 1 -> 0001 [ 1st position is significant bit]
 * 2 -> 0010 [ 2nd position is significatn bit]
 * 3 -> 0011 [ 2nd position is significatn bit]
 * 4 -> 0100 [ 4th position is significatn bit ( as its binary we dont have 3 position)]
 * 5 -> 0101 [ 4th position is significatn bit]
 * 6 -> 0110 [ 4th position is significatn bit]
 * 7 -> 0111 [ 4th position is significatn bit]
 * 8 -> 1000 [ 8th position is significatn bit ( as its binary next significant bit
 * after 4 is 8 )]
 * 
 * [Reference Diagram](https://github.com/citta-lab/DSA/blob/main/a-assets/counting-bits.jpeg)
 */

/** Time: O(n) and Space:O(n) */
var countBits = function(n) {
    
    /** n+1 because that is asked in question */
    let dp = new Array(n+1).fill(0);
    
    /** this will be 1,2,4,8,16 i.e multiple of 2's */
    let offset = 1;
    
    /** i=1 becasue 0's bit is 0000 and is our base */
    for(let i=1; i<n+1; i++){
        
        /** 
        check if we need to use new offset for given
        number or use the same. i.e 1,2,4,8 etc */
        if(offset*2 === i){
            offset = i;
        }
        
        /** check the diagram, it is nothing but dp[n-1] or
        dp[n-2] or dp[n-4] etc for the range */
        dp[i] = 1 + dp[i - offset]
    }
    
    return dp
};
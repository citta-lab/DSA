/** 
 * 
 * 191. Number of 1 Bits 
 * 
 * Write a function that takes an unsigned integer and returns the number of '1' bits 
 * it has (also known as the Hamming weight). 
 * 
 * Input: n = 00000000000000000000000000001011
 * Output: 3
 * 
 * Input: n = 00000000000000000000000010000000
 * Output: 1
 * 
 * leetcode-question:191
 * leetcode:https://leetcode.com/problems/number-of-1-bits/
 * BLIND: 41 (41/75)
 * 
 * Topic: MASK  SHIFT  HAMMING HAMMINGWEIGHT
 * */


 /** Time:O(32) => O(1) and Space: O(1) */
 var hammingWeight = function(n) {
    let count = 0;
    let mask = 1;
    
    for(let i=0; i<32; i++){
        if((n & mask) === 1){
           count++ 
        }
        
        /** instead of moving mask to left, we move number to right */
        n = n >> 1
    }
    
    return count
};

/**  Time Exceeded Limit >> Using mod % */
var hammingWeight = function(n) {
    let count = 0;
    while(n){
        let ans = n % 2; /** either result in 1 or 0 */
        if(ans){
            count ++
        }
        
        /** shift bit to right so we mod again */
        n = n >> 1
    }
    
    return count
};


 /** Another appraoch  */
 var hammingWeight = function(n) {
    
    let count = 0; /** number of 1's */
    let mask = 1;  /** will use this to do & */
    
    for(let i=0; i<32; i++){
        /** if adding 1 to given number results 1
        then we count otherwise we move 1's position
        of mask and calculate again
        
        ex: n = 01011 & mask = 1
        round 1: it will be 01011 + 10000 = which result in
        1 which is not 0 ( 0 & 1 = 1). so we count and move mask from
        1 to 01
        round 2: it will be 01011 + 01000 which will result in 0
        as (1+1 = 0). so we dont count but move the mask from 01 to 001.
        round 3: it will be 01011 + 00100 which will be 1. count 1 and move
        mask i.e 001 -> 0001
        round 4: it will be 01011 + 00010 which will be 1+1 result in 0 etc
        */
        if((n & mask) !== 0){
            count ++
        }
        
        mask <<= 1;
    }
    return count
};
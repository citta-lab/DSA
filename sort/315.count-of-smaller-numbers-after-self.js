/**
 * 315. Count of Smaller Numbers After Self
 *
 * You are given an integer array nums and you have to return a new counts array. 
 * The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
 * 
 *
 * Input: nums = [5,2,6,1]
 * Output: [2,1,1,0]
 *
 * Input: nums = [-1]
 * Output: [0]
 *
 * leetcode-question:315
 * leetcode: https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 *
 * Hint:
 * - Bruteforce: Two for loops
 * - Time:O(N^2) and Space:O(N)
 * - TLE
 *
 */

/****************************************************************************
 *
 * Bruteforce: Time:O(N^2) and Space:O(N)
 *
 ***************************************************************************/
/** Time:O(n^2) and Space:O(N) */
var countSmaller = function(nums) {
    
    let counts = new Array(nums.length).fill(0);
    
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] < num){
                counts[i]++
            }
        }
    }
    
    console.log(counts)
    return counts;
};



/** 
 *
 * 315. Count of Smaller Numbers After Self
 *
 * You are given an integer array nums and you have to return a new counts array.
 * The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
 * 
 * Input: nums = [5,2,6,1]
 * Output: [2,1,1,0]
 *
 * leetcode-question:315
 * leetcode:https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 *
 *
 * Hint:
 * - Bruteforce:: Time:O(n^2) Space:O(n)
 * - Optimal Approach can be done with Merge Sort or Binary Index Tree. Time:O(N log M)
 */

/** Time:O(N^2) and Space:O(N) */
var countSmaller = function(nums) {
    let result = [];
    for(let i=0; i<nums.length; i++){
        let count = 0;
        let currentNum = nums[i];
        for(let j=i+1; j<nums.length; j++){
            let nextNum = nums[j];
            if(currentNum > nextNum){
                count++
            }
        }
        
        result[i] = count;
    }
    
    return result
};
 

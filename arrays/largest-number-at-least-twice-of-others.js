/** Largest Number At Least Twice of Others 
 * 
 * You are given an integer array nums where the largest integer is unique.
 * Determine whether the largest element in the array is at least twice as much as every 
 * other number in the array. 
 * 
 * If it is, return the index of the largest element, or return -1 otherwise.
 * 
 * Input: nums = [3,6,1,0]
 * Output: 1 (index)
 * 
 * Input: nums = [1,2,3,4]
 * Output: -1
 * 
 * Input: nums = [1]
 * Output: 0
 * Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.
 * 
 * leetcode:https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/
 * leetcode-question:
 * 
 * Question to ask
 * - will i have -ve numbers ? ( then below logic fails )
 * - if i have just one number then what will be the max ? itself ? 
 * - we need to return index, so we cant sort ?
 */

 /** Time: O(N) and Space: O(1) */
 var dominantIndex = function(nums) {
    
    let slowMax = -1;
    
    let fastMax = -1;
    let fastMaxIndex = -1;
    
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        
        /** update fastMax only if num > fastMax */
        if(num > fastMax){
            slowMax = fastMax;
            fastMax = num;
            fastMaxIndex = i;
        } else if(num > slowMax){
            /** else will keep track of possible 
            second max number found after finding
            fastMax. Example: [0,0,3,2] */ 
            
            slowMax = num;
        }
    }
    
    return fastMax >= slowMax * 2 ? fastMaxIndex : -1
};

let nums = [3,6,1,0]
comsole.log(dominantIndex(nums));

nums = [0,0,3,2]
comsole.log(dominantIndex(nums));

nums = [1]
comsole.log(dominantIndex(nums));
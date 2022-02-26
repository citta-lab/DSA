/** 
 * 
 * 268. Missing Number 
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array. 
 * 
 * Input: nums = [3,0,1]
 * Output: 2
 * 
 * Input: nums = [0,1]
 * Output: 2
 * 
 * n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
 * 2 is the missing number in the range since it does not appear in nums.
 * 
 * leetcode-question:268
 * leetcode:https://leetcode.com/problems/missing-number/
 * BLIND:60 (60/75)
 * 
 * Hint:
 * - Second Best:
 * - Time: O(n) and Space:O(n)
 * - will use SET to store all the numbers
 * - will calculate last number as length of numbers + 1 ( assuming number range from 0 ...)
 * - will loop though the range from 0 to last number and if anything missing we send
 * 
 * - Best:
 * - Time: O(n) and space: O(1)
 * - find expected sum i.e (nums.length * nums.length+1)/2
 * - find sum of all nums. i.e nums.reduce((pre,ac) => pre+ac, 0)
 * - missing number is expected-sum 
 * */

/** Time: O(n) Space:O(n) */
var missingNumber = function(nums) {
    let set = new Set(nums);
    
    /** the reason we do this because if we dont have any missing
    number ex:0,1,2 then we need to return 3 as answer */
    
    let lastNum = nums.length + 1;
    
    for(let i=0; i<lastNum; i++){
        if(!set.has(i)){
            return i
        }
    }
};

/** Time:O(n) and Space:O(1) */
var missingNumber = function(nums) {
    
    /** 
    example: if nums = [0,1,2,3] then len = 4 and len+1 = 5.
    so it will be 4*5 = 20 / 2 => 10. 
    sum = 6. So missing number is 10-6 = 4 */
    
    let expectedSum = nums.length * (nums.length + 1)  / 2;
    
    let sum = nums.reduce((pre,cur) => pre + cur, 0);
    return expectedSum - sum;
};
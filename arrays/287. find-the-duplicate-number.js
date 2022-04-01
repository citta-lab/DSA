/** 
 *
 * 287. Find the Duplicate Number
 *
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 *
 *
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 * 
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * 
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 * leetcode-question:287
 * leetcode:https://leetcode.com/problems/find-the-duplicate-number/
 * video:https://www.youtube.com/watch?v=wjYnzkAhcNk 
 * ref: https://leetcode.com/problems/find-the-duplicate-number/discuss/510442/JavaScript-Solution-Floyd's-Cycle-Finding-Algorithm-(Tortoise-and-Hare)
 *
 *
 * Hint:
 * - Optimal is using Floyd Cycle Detection 
 * - treat values in array as positions, so we can connect them like linkedList
 * - we need to move fast twice as fast as slow in first run until we find SLOW === FAST
 * - do second run where newSlow = nums[newSlow] and fast = nums[fast]
 * return newSlow
 */

/********************************************************
 *
 *.   BruteForce: 
 *.   Time:O(N) Space:O(N)
 *
 * *****************************************************/

/** [With Extra Space] => Time:O(N) and Space:O(N) */
var findDuplicateOne = function(nums) {
    
    let unique = new Set();
    
    for(let num of nums){
        if(unique.has(num)) return num
        unique.add(num)
    }
};

/********************************************************
 *
 *.   BruteForce: 
 *.   Time:O(NlogN) Space:O(1)
 *
 * *****************************************************/

/** [With More Time and No Space] => Time:O(NlogN) and Space:O(1) */
var findDuplicateTwo = function(nums) {
    
    nums.sort((a,b) => a-b)
    
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return nums[i]
        }
    }
};

/********************************************************
 *
 *.   BruteForce: 
 *.   Time:O(N^2) Space:O(1)
 *
 * *****************************************************/

/** [With Extra Time and No Space] => Time:O(N^2) and Space:O(1) */
var findDuplicateThree = function(nums) {
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                return nums[i]
            }
        }
    }
};

/********************************************************
 *
 *.   Optimal: Floyd 
 *.   Time:O(N) Space:O(1)
 *
 * *****************************************************/

/** Floyd Duplicate Detection Method => Time:O(N) and Space:O(1) */
var findDuplicate = function(nums) {
    
    /** treat values as indexes*/
    let slow = nums[0]
    let fast = nums[slow];
    
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    /** by this point we have slow === fast */
    
    /** run second time so we meet the fast */
    let newSlow = 0;
    while(newSlow !== fast){
        newSlow = nums[newSlow];
        fast = nums[fast]
    }
    
    return newSlow
};


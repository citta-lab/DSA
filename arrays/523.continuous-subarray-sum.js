/**
 *
 * 523. Continuous Subarray Sum
 * 
 * Given an integer array nums and an integer k, return true if nums has a continuous subarray of size 
 * at least two whose elements sum up to a multiple of k, or false otherwise. 
 * An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 *
 * Input: nums = [23,2,4,6,7], k = 6
 * Output: true
 *
 * Input: nums = [23,2,6,4,7], k = 6
 * Output: true
 * 
 * Input: nums = [1,2,3], k = 5
 * Output: true
 *
 * Input: nums = [5,0,0,0], k = 3
 * Output: true
 *
 * leetcode-question: 523
 * leetcode: https://github.com/citta-lab/DSA/new/main/arrays
 * video: https://www.youtube.com/watch?v=OKcrLfR-8mE
 *
 * Hint:
 * - BruteForce: Time:O(N^2)
 * - Calculate sum by doing n^2 operations and then keep count of num of nums used
 * - Then check if the sum in hashmap is divisible by k ( sum % k ) and count of num is more than 2
 * 
 * Optimal: Time:O(n) and Space:O(n)
 * - Same idea as above but we can store remaider and index of num in hashmap
 * - This hashmap will tell us if it has already seen the same remainder before. If yes then
 * it means if has found the sum + previous-remainder where sum is divisible by k.
 * -- ex: [23,2,4,6,7], k = 6 we do 23%6 = 5 and reaminder will store { 5: 0 } and we move
 * on at 2 it will be 5 (previous sum reaminder) + 2 % 6 = 1 so now {5:0, 1:1}. At 4 we will
 * do 1 (previous remainder sum) + 4 % 6 = 5. Now we found the match in remainder. This indicates
 * we added numbers to our previous sum such that it was divisble by k.
 * - we need to check `remaidner[sum] >= -1` as we initalized remaidner with { 0: -1 } to handle
 * edge cases such that forst number itself is 6 or multiple of 6
 */

/** time:O(N) and Space:O(N) */
var checkSubarraySum = function(nums, k) {
    
    let sum =0;
    
    /** which will hold the remainder after sum%k and index for the num which made sum */
    let remainder = {}
    
    /** initialized to -1 so we can handle situation when first number is divisible 6 but
    we need atleast two numbers for the result */
    remainder[0] = -1
    
    for(let i=0; i<nums.length; i++){
        
        sum += nums[i];
        
        /** finding remainder */
        if(k != 0) sum = sum % k ;
        
        /** check if the remainder is present in hashmap */
        if(remainder[sum] >= -1){
            /** check if the size is atleast TWO */
            let idx = remainder[sum];
            if(i - idx > 1){
                return true
            }
        }else{
            remainder[sum] = i;
        }
    }
    
    return false
};
 
 

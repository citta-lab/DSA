/** 

   560. Subarray Sum Equals K
   
   Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
   
    Input: nums = [1,1,1], k = 2
    Output: 2
    
    Input: nums = [1,2,3], k = 3
    Output: 2
    
    leetcode-question:560
    leetcode:
    company:FACEBOOK
    
    Hint:
    - Bruteforce: Time:O(N^2) and Space:O(1) <-- might have TLE 
    - will use TWO forloop but both will start from 0 i.e i=0 and j=i
    - with in inner forloop we calcualte sum += sum + nums[j]
    - if we find sum === K then count is increased 
    
    
    */

/** Bruteforce: time:O(N^2) and Space:O(1) */
var subarraySum = function(nums, k) {
    
    let count = 0;
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum += nums[j];
            if(sum === k){
                count++
            }
        }
    }
    
    return count
};


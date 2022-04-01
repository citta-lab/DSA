/**
  
   454. 4Sum II
   
   Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

    0 <= i, j, k, l < n
    nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
    
    Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
    Output: 2
    
    leetcode-question:452
    leetcode:https://leetcode.com/problems/4sum-ii/
    
    Hint:
    - Optimal: Time:O(n^2) and Space:O(n^2)
    - use dict and add combinations of nums between first two arrsy and keep count
    -- i.e sum: count
    - find combination of two number sum between last two arrays but add -ve to it
    i.e we have +ve value now but doing -ve we are looking for previous -ve value which
    may exists in the map. If so they we can say we found the combination which makes ZERO
    */

var fourSumCount = function(nums1, nums2, nums3, nums4) {
    
    /** breaking the problem into two n^2 problem */
    
    let firstTwoSum = new Map()
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            
            let sum = nums1[i] + nums2[j];
            
            if(!firstTwoSum[sum]) firstTwoSum[sum] = 0;
            firstTwoSum[sum] += 1
        }
    }
    
    console.log(firstTwoSum);
    
    let count = 0;
    for(let i=0; i<nums3.length; i++){
        for(let j=0; j<nums4.length; j++){
            
            let negativeSum = -(nums3[i] + nums4[j]);
            if(!firstTwoSum[negativeSum]) firstTwoSum[negativeSum] = 0;
            
            count += firstTwoSum[negativeSum]
        }
    }
    
    console.log(firstTwoSum);
    
    return count
};

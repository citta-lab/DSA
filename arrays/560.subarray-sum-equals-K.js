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

/** Time:O(N) and Space:O(N) */
/**
 * Hint:
 * - Prefix Lookup: we will take each number and subtract by k (i.e num[i] - k )
 * and check if we have this "prefix" in Map. If yes then increase the COUNT.
 * -- i.e preFix = num[i] - k;
 * - Sum: this will be cumulative SUM += num[i] which will find and add it to 
 * same Map. 
 * - Important: Prefix is used to do Map lookup and increase the count. Sum is
 * calculated and added to the Map.
 *
 * - [Base Case]: If we build prefix sum which will match the 'K' then when we do
 * prefixSum - k we will get 0 which is valid. However our map might not have 
 * accounted for ZERO. So we will default map with `{0:1}`
 */

 var subarraySum = function(nums, k) {
    let count = 0;
    let sum =0;
    
    /** map to keep hold of prefixSum : count */
    let map = new Map();
    /** base condition to start with so when we have prefixSum - k = 0 we
    would want to count. example: 3-3 = 0 then we can map.get(0) + 1 */
    map.set(0, 1);  /** it will be {0:1, 1:1, 2:1} etc */  
    
    for(let i=0; i<nums.length; i++){
        
        let num = nums[i];
        sum += num;
        
        if(map.has(sum-k)){
            count += map.get(sum-k);
        }
        
        if(!map.has(sum)) map.set(sum, 0);
        map.set(sum, map.get(sum) + 1);
    }
    
    return count
};


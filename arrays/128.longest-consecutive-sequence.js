/** 
 * 
 * 128. Longest Consecutive Sequence  
 * 
 * Given an unsorted array of integers nums, return the length of the 
 * longest consecutive elements sequence.
 * 
 * You must write an algorithm that runs in O(n) time. 
 * 
 * 
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * 
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * 
 * leetcode-question:128
 * leetcode:https://leetcode.com/problems/longest-consecutive-sequence/
 * video:https://www.youtube.com/results?search_query=longest+consecutive+sequence+neetcode
 * 
 * BLIND: 33 (33/75)
 * 
 * 
 * Hint:
 * - Do in O(n)
 * */

/** BRUTE FORCE with O(nlogN) */
/** <Not Optimal> time: O(nlogn) and space:O(n) */
var longestConsecutive = function(nums) {
    nums.sort((a,b) => a - b)
    
    let maxLength = 1;
    let curLength = 1;
    
    for(let i=1; i<nums.length; i++){
        
        let first = nums[i-1];
        let second = nums[i];
        
        /** if we find same number then they are not sequenitial */
        if(second === first){
            continue
        }
        
        /** if the diff is 1 it is sequential, so we count */
        if(second - first === 1){
            curLength += 1;
        }else{
            maxLength = Math.max(curLength, maxLength);
            curLength = 1;   
        }
    }
    
    /** return whatever is the max count */
    return Math.max(maxLength, curLength)
};


/** OPTIMAL */

/** time: O(n) and space:O(n) */
var longestConsecutive = function(nums) {
    
    /** 
        Step 1:
        building set of these numbers will help us get num and
        it's previous or next num in constant time.
    */
    
    let numSet = new Set();
    for(let num of nums){
        numSet.add(num);
    }
    
    /** 
      Step 2:
      ranges are continous numbers and left side of any START
      of the range is always null. This is the key to count for 
      ranges.
      
      i.e  <- 1,2,3,4     <-100   <-200 
      */
      let maxLength = 0;
    
      for(let num of nums){
          
          /** given num's left side is null then this might be start of new range*/
          if(!numSet.has(num-1)){
              let curLength = 1;
              while(numSet.has(num+1)){
                  curLength += 1;
                  num += 1;
              }
              
              maxLength = Math.max(maxLength, curLength)
          }
      }
    
    return maxLength
};
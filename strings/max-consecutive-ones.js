/** 

   Max Consecutive Ones
   
   Given a binary array nums, return the maximum number of consecutive 1's in the array.
   
   Input: nums = [1,1,0,1,1,1]
   Output: 3
   Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
   
   Input: nums = [1,0,1,1,0,1]
   Output: 2
   
   */

  var findMaxConsecutiveOnes = function(nums) {
    
    /** if we have just one elemet and is 1 then we simply return the size as 1 */
    if(nums.length === 1 && nums[0] === 1) return 1;
    
    let left =0;
    let right = 0;
    
    /** possible 1's at present */
    let max = 0;
    
    /** we process until the end but left <= right is important as our left and right will be pointing
    to same index at some point */
   
    while(left <= right && right < nums.length){
        if(nums[left] === 1 && nums[right] === 1){
            max = Math.max(max, right-left+1);
            right++;
            continue;
        }
        
        /** we might have found number other than 1 at RIGHT, so moving both left and right to next index */
        left = right + 1;
        right++
    }
    
    return max
};


let nums = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(nums)) // 3

nums = [1,0,1,1,0,1]
console.log(findMaxConsecutiveOnes(nums)) // 2

nums = [1,1]
console.log(findMaxConsecutiveOnes(nums)) // 2

nums = [0,1]
console.log(findMaxConsecutiveOnes(nums)) // 1

nums = [1,0]
console.log(findMaxConsecutiveOnes(nums)) // 1

nums = [1]
console.log(findMaxConsecutiveOnes(nums)) // 1

nums = [0]
console.log(findMaxConsecutiveOnes(nums)) // 0








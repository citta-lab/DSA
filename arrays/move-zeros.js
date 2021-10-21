/**
 * Given an integer array nums, 
 * move all 0's to the end of it while maintaining the relative order of the non-zero elements. 
 * Note that you must do this in-place without making a copy of the array.
 */

// O(n) time and O(1) space 
var moveZeroes = function(nums) {
    
    let left = 0;
    let current = 0;
    while(current < nums.length) {
        /** dont check if nums[left] is zero, which will result in failure when nums is [1,0,1] */
        if(nums[current] !=0 ){
            /** inline swap */
            [nums[left], nums[current]] = [nums[current], nums[left]];
            /** only increase when we swap so left is always behind current */
            left++
        }
        
        current++
    }
    console.log(nums)
};

console.log(' APPRAOCH I: moveZeroes ')
console.log(moveZeroes([0,1,0,3,12])); // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0,1])); // [1,0]
console.log(moveZeroes([1,0,1])); // [1,1,0]
console.log(moveZeroes([1,0])); // [1,0]

/** O(n) time and O(1) space ( same as above ) */
var moveZeroesII = function(nums) {
    
    let left = 0;
    let current = 0;
    while(current < nums.length) {
        /** if not zero then override left index whether it's value is 0 or non-zero */
        if(nums[current] !=0 ){
            nums[left] = nums[current];
            left++
        }
        
        current++
    }
    
    /** 
     * by the end of first while  [0,1,0,3,12] will become [ 1, 3, 12, 3, 12 ] but left
     * reflects the position after 12. so we can increase left until nums size and replace
     * current value with 0
     * */
    while(left < nums.length){
        nums[left] = 0;
        left++
    }

    console.log(nums)
};

console.log(' APPRAOCH II: moveZeroes ')
console.log(moveZeroesII([0,1,0,3,12])); // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroesII([0,1])); // [1,0]
console.log(moveZeroesII([1,0,1])); // [1,1,0]
console.log(moveZeroesII([1,0])); // [1,0]
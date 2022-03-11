/** 
* 31. Next Permutation
* 
* A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
* For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
*
* The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, 
* if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation 
* of that array is the permutation that follows it in the sorted container.
* If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
*
* For example, the next permutation of arr = [1,2,3] is [1,3,2].
* Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
* While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
*
* Input: nums = [3,2,1]
* Output: [1,2,3]
*
* Input: nums = [1,1,5]
* Output: [1,5,1]
*
* leetcode-question:31
* leetcode:https://leetcode.com/problems/next-permutation/
*
*
* Hint:
* Time:O(N) and Space:O(1)
* - hence it needs to be in lexical order, first element should be lesser than rest of the elements
* - traverse from back to find the anamoly where i < i-1 value
* - when found we need to swap the i'th value with next higest value to i (i.e if i is 3 then next value is
* 4, if 4 is not there then 5 ). So easy way is to treaverse from end again
* - swap when found
* - reverse the array from i+1 position 
*
*/

var nextPermutation = function(nums) {
    /** step 1: (good condition ) compare from right end if we have all values sorted ascending */
    let i = nums.length-2;
    while(i >= 0 && nums[i] >= nums[i+1]){
        i--
    }
    
    /** step 2: we found lower value than it's i+1. So we swap with next lowest value
    in right side and reverse rest of the array on right side */
    
    if(i >= 0 ){
        // we need to find next higest to i'th value from right so it will be next higest 
        let j = nums.length-1;
        while(nums[j] <= nums[i]){
            j--
        }
        swap(i, j, nums);
    }
    
    // reverse from i+1th postion all the way until end
    reverse(i+1, nums.length-1, nums)
    
};

function swap(left, right, array){
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;
}

function reverse(start, end, array){
    while(start < end){
        swap(start, end, array);
        start ++
        end --
    }
}

/** 
 * 912. Sort an Array
 *
 * Given an array of integers nums, sort the array in ascending order.
 *
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 *
 * leetcode:
 * leetcode-question:912
 *
 *
 * Hint:
 * - Bruteforce: Bubble sort ( with space reduction ) [ TLE ] 
 * - Time:O(N^2) and Space:O(1)
 * - we swap on every element using while loop and for loop
 * 
 * - Better: Merge sort 
 * - Time:O(nlogN) and Space:O(N)
 * - idea is to divide the array into 1 element and compare 
 * - meergeSort will be helper method
 * - main fucntion can find mid, then slice left and right, call the same main
 * method until we cant divide any further then pass it to mergeSort 
 */

/**************************************************************************
 * 
 * Merge Sort: Time:O(nLogN)
 *
 **************************************************************************/

var sortArray = function(nums) {
    
    if(nums.length <= 1) return nums;
    
    let mid = Math.floor((0+nums.length) / 2);
    
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    
    return mergeSort(sortArray(left), sortArray(right));
};

/** Time:O(nLogN) in best/worst case, Space:O(N) */
function mergeSort(left, right){
    
    let result = [];
    
    /** we will keep removing left or right until one of them is empty */
    while(left.length && right.length){
        
        if(left[0] <= right[0]){
            let leftFirst = left.shift();
            result.push(leftFirst)
        }else{
            let rightFirst = right.shift();
            result.push(rightFirst)
        }
    }
    
    return [...result, ...left, ...right]
}





/**************************************************************************
 * 
 * Bubble Sort => Time:O(N^2) and Space:O(1)
 *
 **************************************************************************/

var sortArray = function(nums) {
    let index = 0;
    let size = nums.length;
    
    while(index < nums.length){
        
        /** we do O(N) for every index from while loop */
        for(let i=0; i<size-1; i++){
            if(nums[i] > nums[i+1]){
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            }
        }
        
        index++
        size --
    }
    
    return nums
};

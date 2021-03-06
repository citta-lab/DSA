/**
 *
 *
 * 215. Kth Largest Element in an Array
 *
 *
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 *
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * 
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 * 
 * Input: nums = [3,1,2,4], k = 2  <-- needs  [nums[curPointer], nums[i]] = [nums[i], nums[curPointer]];
 * Output: 3
 * 
 * leetcode-question: 215
 * leetcode:https://leetcode.com/problems/kth-largest-element-in-an-array/
 * video: https://www.youtube.com/watch?v=XEmy13g1Qxc
 *
 * Hint:
 * Bruteforce: Time:O(nLogn) and Space:O(1)
 * QuickSelect: Time:O(N) on an average but O(n^2) in worst 
 * QuickSort : Time:O(NlogN) on an average
 * - we will use QuickSelect 
 * - Need to find random index as pivot and we compare the values from left 
 * - we can pick "right" most index as pivot and curPointer as left 
 */

/** time:O(N) and Space:O(1) */
var findKthLargest = function(nums, k) {

    /** 
     * Example:
     * lets take an example while writing  
     * nums= [3,2,1,5,6,4] k = 2
     * */
    
    /** idea here is that we can find k'th max by looking at size-k 'th value in sorted array */
    let target = nums.length - k;           /** ex: points at 6 */
    let left = 0;
    let right = nums.length-1;      
    
    function quickSelect(left, right){
        
        /** pick random pivot, but we pick right as pivot */
        let pivot = nums[right];            /** ex: 4 */
        
        /** pointer which we will move along (initialized to left) */
        let curPointer = left;
        
        for(let i=left; i<right; i++){
            if(nums[i] <= pivot){
                /** swapping */
                [nums[curPointer], nums[i]] = [nums[i], nums[curPointer]];
                curPointer += 1
            }
        }

        /** ex: by end of this nums = [3,2,1,5,6,4] where curPointer be at 5 */
        
        /** now we swap between the pivot we picked, which is right most and
        the place we stopped i.e curPointer. This will prove everything on left
        of curPointer is smaller and eveyrthing on right of curPointer is larger
        than the pivot.*/
        
        [nums[curPointer], nums[right]] = [nums[right], nums[curPointer]];

        /** ex: by end of this nums = [3,2,1,4,6,5] where curPointer be at 4, target at 6 */
        
        /** conditions to move the pointer */
        if(curPointer > target){
            return quickSelect(left, curPointer-1);
        }else if(curPointer < target){
            /** ex: [6,5] will be called next where target is at 6 */
            return quickSelect(curPointer+1, right);
        }else {
            console.log(nums)
            return nums[curPointer];
        }
    }
    
    return quickSelect(left, right)
    
};

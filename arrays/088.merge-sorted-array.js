/** 
 * 
 * 88. Merge Sorted Array 
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 * and two integers m and n, representing the number of elements in nums1 and nums2 
 * respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. 
 * 
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * 
 * leetcode-question:88
 * leetcode:https://leetcode.com/problems/merge-sorted-array/
 * 
 * Hint:
 * - Time:O(N+M) and Space:O(1)
 * - Three Pointers from End to Start 
 * - Two Pointers for tracking nums in nums1 and nums2
 * - Third pointer to track tail end of nums1 so we can add higer value
 * 
 * - BruteForce
 * - Merge and Sort i.e Time:O(n+m log(n+m)) 
 * 
 * */

 /** Time:O(N+M) and Space:O(1) */
 var merge = function(nums1, m, nums2, n) {
    
    let pointerOne = m-1;
    let pointerTwo = n-1;
    
    /** for loop to start adding at tail of nums1 i.e [1,2,3,0,0,0] */
    for(let i=m+n-1; i>=0; i--){
        
        if(pointerTwo < 0) {
            break;
        }
        
        /**  Checking and adding values from TAIL end 
            - pointers are pointing to actual values 
            - move value from tail end of nums1 i.e replace 0 
            - add value from tail end of nums1 i.e replace 0
            - */
        
        if(pointerOne >= 0 && nums1[pointerOne] > nums2[pointerTwo]){
            nums1[i] = nums1[pointerOne];
            pointerOne --
        } else{
            nums1[i] = nums2[pointerTwo];
            pointerTwo --
        }
    }
    
};
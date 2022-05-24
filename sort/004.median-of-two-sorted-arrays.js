/**
 * 4. Median of Two Sorted Arrays
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return 
 * the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * Example:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * 
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * 
 * leetcode-question:4
 * leetcode:https://leetcode.com/problems/median-of-two-sorted-arrays/
 * video: https://www.youtube.com/watch?v=LPFhl65R7ww
 * 
 * Hint:
 * - Time:O(log(min(m,n))) Space:O(1)
 * - Binary search 
 * - Focus on smaller array, we will need to find leftMax, rightMin for
 * both the arrays. 
 */


/**
 * Process Highlight : 
 * Hence we know both arrays are sorted, our goal is to find the 
 * mid point as if they are sorted in ascending and merged. we can
 * do this by finding the partition where all the values less than
 * of array X and array Y will be onb left and higer values will be
 * on the right.
 *      In such cases, we can pick the median by returning lowerLeft
 * value of array (if odd numbers) or adding two values adjacent to 
 * parition and divide by 2. 
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    // step 1: make sure we have small array as first arugment 
    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1);
    }
    
    // smaller array X and larger array Y
    let x = nums1.length;
    let y = nums2.length; 
    
    let low = 0;
    let high = x; 
    
    // focusing only on smaller array
    while(low <= high){
        
        // two steps to find partition in small and large array
        const partitionX = Math.floor((low+high)/2);
        const partitionY = Math.floor((x+y+1)/2) - partitionX; 
        
        // left side max ( as its ascending ) of X and Y array
        let leftXMax = partitionX === 0 ? -Infinity : nums1[partitionX-1];
        let leftYMax = partitionY === 0 ? -Infinity : nums2[partitionY-1];
        
        // right side min ( as its ascending ) of X and Y array
        let rightXMin = partitionX === nums1.length ? Infinity : nums1[partitionX];
        let rightYMin = partitionY === nums2.length ? Infinity : nums2[partitionY];
        
        /**
         * cross comapre to make sure the we can do binary search
         * i.e we can only do binary search if we have made the
         * partition at right place. So the check would be 
         * (i) leftXMax <= rightYMin <-- indicates they are ascending
         * (ii) leftYMax <= rightXMin <-- indicates they are ascending
         */
        if(leftXMax <= rightYMin && leftYMax <= rightXMin ){
            
            /** we are in correct range, so find median */
            const lowMaxX = Math.max(leftXMax, leftYMax);
            
            if((x+y) % 2 === 1) return lowMaxX; 
            return ((lowMaxX + Math.min(rightXMin, rightYMin)) / 2)
            
        } else if(leftXMax < rightYMin){
            /** we need to move right */
            low = partitionX + 1;
        }else{
            /** we need to move left */
            high = partitionX - 1;
        }
    }  
};
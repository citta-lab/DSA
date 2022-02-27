/** 
 * 
 * 295. Find Median from Data Stream  
 * 
 * The median is the middle value in an ordered integer list. If the size of the list 
 * is even, there is no middle value and the median is the mean of the two middle values. 
 * 
 * - For example, for arr = [2,3,4], the median is 3.
 * - For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
 * 
 * Input : ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 * [[], [1], [2], [], [3], []]
 * Output : [null, null, null, 1.5, null, 2.0]
 * 
 * leetcode-question:295
 * leetcode:https://leetcode.com/problems/find-median-from-data-stream/
 * video:https://www.youtube.com/watch?v=itmhHWaHupI
 * BLIND: 63 (63/75)
 * 
 * Hint
 * - BruteForce:
 * - Time: O(N) becasue O(logn) - binary search + O(n) - splice. Space: O(n)
 * - Need to have iterative binary search for adding number. So it will be sorted 
 * while adding
 * - Median function can be applied directly as array is sorted
 * 
 * - Optimal:
 * - Time: O(logn) Space: O(n)
 * - Will use two priority queue to hold min and max values
 * */







/***** USING BINARY SEARCH *********** */
var MedianFinder = function() {
    this.arr = [];
};

MedianFinder.prototype.addNum = function(num) {
    
    /** if this is the first element */
    if(this.arr.length === 0) {
        this.arr.push(num);
    }else {
        /** if arr has nums then we need to insert at right position */
        let numPosition = binarySearch(num, this.arr, 0, this.arr.length);
        /** arr.splice(starting_position, position_placement_from_start, value) */
        this.arr.splice(numPosition, 0, num);
    }
    
    function binarySearch(num, arr, left, right) {
        
        while(left < right){
            
            let mid = Math.floor((left+right)/2);
            
            if(num > arr[mid]){
                left = mid+1
            } else{
                right = mid
            }
        }
        
        return left
    }
};

MedianFinder.prototype.findMedian = function() {
    
    let mid = Math.floor(this.arr.length/2);
    
       /** 
        median when we have even number vs odd number 
        - Even Number ex: arr = [1,3,4,5], median = 3+4/2 = 3.5
        - Odd Number ex: arr = [1,3,4], median = 3
        */
    
    return (this.arr.length % 2 === 0)
        ? ((this.arr[mid-1] + this.arr[mid])/2)
        : this.arr[mid];
};

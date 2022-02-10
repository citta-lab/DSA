
/** 
 * 704. Binary Search
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity. 
 * 
 * leetcode-problem:704
 * leetcode : https://leetcode.com/problems/binary-search/
 * 
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
 };
 
 const binarySearch = (nums, target, left, right) => {
     
     if(left > right) return -1;
     
     let mid = Math.floor((left+right) / 2); 
     
     if(nums[mid] === target) return mid; 
     
     if(target < nums[mid]) return binarySearch(nums, target, left, mid-1);
     if(target > nums[mid]) return binarySearch(nums, target, mid+1, right);
 };


 const binarySearchIterative = (nums, target) => {
    
    let left = 0; 
    let right = nums.length - 1;
    /** if we dont use <= it will fail for array with one element */
    while(left <= right){
        
        //let mid = Math.floor(left+ (right - left / 2)); <-- if larger number
        // https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html
        let mid = Math.floor((left+right) / 2);
        
        if(nums[mid] === target) return mid;
        
        if(target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;   
}



let arr = [-1,0,3,5,9,12];
console.log(search(arr, 9)); // 4
console.log(binarySearchIterative ( arr, 9));  // 4

arr = [-1,0,3,5,9,12];
console.log(search(arr, 2)); // -1
console.log(binarySearchIterative(arr, 2));  // -1

arr = [2];
console.log(search(arr, 2)); // 0
console.log(binarySearchIterative(arr, 2)); // 0

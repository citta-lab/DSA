/**
 * 540. Single Element in a Sorted Array
 * 
 * You are given a sorted array consisting of only integers where every element 
 * appears exactly twice, except for one element which appears exactly once.
 * Return the single element that appears only once.
 * Your solution must run in O(log n) time and O(1) space.
 * 
 * Input: nums = [1,1,2,3,3,4,4,8,8]
 * Output: 2
 * 
 * Input: nums = [3,3,7,7,10,11,11]
 * Output: 10
 * 
 * leetcode:https://leetcode.com/problems/single-element-in-a-sorted-array/
 * leetcode-question:540
 * 
 * Hint:
 * BruteForceI: Time:O(N) and Space:(N)
 * - map to hold the key and it's count 
 * - map.entries() will return pair so we can check if value === 1 return key
 * 
 * BruteForceII ( Two Pointer) : Time:(N) and Space:O(1)
 * - will have left = 0 and right = left + 1
 * - while right < nums.length-1 ( so we dont cross )
 * - if(nums[left] !== nums[right]) we return nums[left];
 * 
 * Binary Searcg:: Time:O(logN) and Space:O(1)
 */

/*******************************************************************
 * 
 * BruteForce : Time: O(N) and Space:O(N
 * 
 *******************************************************************/
/** Time: O(N) and Space:O(N) */
var singleNonDuplicate = function(nums) {
    let map = new Map();
    for(let num of nums){
        if(!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num)+1);
    }
    
    for(let pair of map.entries()){
        const [key, value] = pair;
        if(value === 1) return key;
    }
};


/*******************************************************************
 * 
 * BruteForce (Two Pointer): Time: O(N) and Space:O(1)
 * 
 *******************************************************************/
var singleNonDuplicate = function(nums) {
    
    if(nums.length == 1) return nums[0]
    
    let left = 0;
    let right = left+1;
    
    while(right < nums.length - 1){
        if(nums[left] !== nums[right]){
            return nums[left];
        }
        
        left = right + 1;
        right = left + 1;
    }
    
    return nums[nums.length-1];
};


/*******************************************************************
 * 
 * Binary Search : Time: O(logN) and Space:O(1)
 * 
 *******************************************************************/
var singleNonDuplicate = function(nums) {
    
    if(nums.length === 1) return nums[0];
    
    let left = 0;
    let right = nums.length-1;
    
    /** ex: [1,1,2,2,3,4,4] */
    function binarySearch (left, right){
        
        /** step 1: mid = 3, */
        let mid = Math.floor((left + right) / 2);
        
        /** we need to look mid's partner both in left and right so we can find the pair */
        
        /** left side from mid */
        if(nums[mid] === nums[mid-1]){
            
            /** based on mid we stir right side of mid or left. ex: step 2:: 3%2 = 1, so next we do BS(4, 6)*/
            return mid % 2 ? binarySearch(mid+1, right) : binarySearch(left, mid);
        }
        
        /** right side from mid */
        if(nums[mid] === nums[mid+1]){
            /** ex: step 3 :: 5%2 = 1, so next BS(4, 4) which is 3 num */
            return mid % 2 ? binarySearch(left, mid-1) : binarySearch(mid, right);
        }
        
        return nums[mid];
    }
    
    return binarySearch(left, right)
    
};

/** 

167. Two Sum II - Input Array Is Sorted 

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] 
and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

leetcode-question:167
leetcode:https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

HINT: use TWO POINTER ( one from left and one from right (end) )

*/

/** Time: O(N) and Space:O(1) */
var twoSum = function(numbers, target) {
    
    /** 
       - numbers are sorted in ascending order
       - so higest at right, lowest at left.
       - we can move pointers inward and calculate the sum, then compare with target
       - if sum is less than target, then we must increase LEFT
       - if sum is more than target, then we must decrease RIGHT
    */
    
    let left = 0;
    let right = numbers.length-1; 
    
    let indexArr = [];
    
    while(left < right){
        let sum = numbers[left] + numbers[right];
        
        if(sum === target){
            indexArr.push(left+1);
            indexArr.push(right+1);
            return indexArr;
        }else if( sum < target){
            left++
        }else if( sum > target){
            right--
        }
    }
    
    /** default if we didn't find or return already */
    return [-1, -1]
};

let numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers, target); // [1,2]
            
numbers = numbers = [-1,0], target = -1
console.log(twoSum(numbers, target); // [1,2]
            
numbers = numbers = [0, 0, 3, 4], target = 0
console.log(twoSum(numbers, target); // [1,2]

/** 
 * 15. 3Sum 
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. 
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * 
 * Input: nums = []
 * Output: []
 * 
 * leetcode:
 * leetcode-question:15
 * video:
 * 
 * BLIND: 5 ( 5/75)
 * 
 * HINT:
 *  - we cannot have same element in same position inside our result array. 
 *  - bruteforce O(n^3) can be done but we will have duplicate in same position
 *  - Breaking the problem into subproblem. i.e for every element we will have two-sum running. 
 *  - Two-SUM needs sorted array
 *  - if we find two same elements in sorted array we skip it both in outerloop and inner tow-sum 
 */

/** time: O(n^2) i.e O(nlogN) from sort + O(n^2) from while loops  */ 
var threeSum = function(nums) {
    
    let result = [];
    
    /** step 1: sorting will help us apply TWO SUM II solution */
    nums.sort((a,b) => a-b);

    for(let i=0; i< nums.length; i++){
        
        /** we will find other two combination with respect to first one */
        let first = nums[i];
        
        /** step 2: not considering any duplicates if we have in sorted nums */
        if(i > 0 && first === nums[i-1]){
            continue;
        }
        
        let left = i + 1; 
        let right = nums.length-1; 
        let target = 0; // given in problem statement 
        
        while(left < right) {
            
            let sum = first + nums[left] + nums[right];
            
            if( sum < target ){
                left += 1
            } else if ( sum > target ){
                right -= 1
            } else if ( sum === target ){
                result.push([first, nums[left], nums[right]]);
                left += 1
                right -= 1
                
                /** handling same duplicate position element scenario we did earlier */
                while(nums[left] === nums[left-1] && left < right ){
                    left += 1
                }
            }
            
        }
    }

    return result;
};

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]

nums = [0]
console.log(threeSum(nums)) // []

nums = []
console.log(threeSum(nums)) // []

nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
console.log(threeSum(nums)) // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]



/** 
 * 
 * 53. Maximum Subarray
 * 
 * Given an array find the sub array which will form maxium sum. Example if the given array is like 
 * [ 2,3,-9, 4,5,8,-3] then the subarray which can make the maxium sum would be [ 4, 5, 8] = 17.
 * 
 * Always start with brute force approach 
 * 
 * leetcode-question:53
 * leetcode:https://leetcode.com/problems/maximum-subarray/
 *
 * BLIND: 14 (14/75)
 *
 * Hint
 * - we can do with O(n^2) bu keeping max and update max if running sum is more than max
 * - we can do in O(n) if we update SUM only if SUM is more than current NUM. i.e SUM = Math.max(SUM, NUM) and Max = Math.max(Max, SUM)
 */

// Time: O(N)
 var maxSubArray = function(nums) {
    
    let maxArray = nums[0];
    let currentArray = nums[0];
    
    for(let i=1; i<= nums.length-1; i++){
        let num = nums[i];
        currentArray = Math.max(num, currentArray+num);
        maxArray = Math.max(maxArray, currentArray)
    }
    
    return maxArray
    
};        

//O(n^2) time 
function maxSubArraySumI(array) {	
	let maxSum = -Infinity;
	for(let i=0; i< array.length; i++){
		let sum = 0
		for(let j=i; j<array.length; j++){
			sum = sum +array[j];
			if(sum > maxSum) maxSum = sum;
		}
	}	
	return maxSum;
}

console.log(maxSubArraySum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))// 19
console.log(maxSubArraySum([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])) // -1
console.log(maxSubArraySum([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6])) // 22

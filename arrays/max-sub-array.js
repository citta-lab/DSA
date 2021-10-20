
/** Given an array find the sub array which will form maxium sum. Example if the given array is like 
 * [ 2,3,-9, 4,5,8,-3] then the subarray which can make the maxium sum would be [ 4, 5, 8] = 17.
 * 
 * Always start with brute force approach 
 */
//O(n^2) time 
function maxSubArraySum(array) {	
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
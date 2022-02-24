/** 
 * 
 * 213. House Robber II 
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain 
 * amount of money stashed. All houses at this place are arranged in a circle. That means the first
 *  house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected,
 *  and it will automatically contact the police if two adjacent houses were broken into on 
 * the same night. 
 * 
 * Input: nums = [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) 
 * and then rob house 3 (money = 2), because they are adjacent houses.
 * 
 * Input: nums = [1,2,3,1]
 * Output: 4
 * 
 * leetcode-question:213
 * leetcode:https://leetcode.com/problems/house-robber-ii/ 
 * 
 * */

/** Time: O(N) and Space:O(1) */
 var rob = function(nums) {
    
    if(nums.length === 0) return 0
    
    if(nums.length === 1) return nums[0]
    
    let firstUntilNminusOne = robbery(nums, 0, nums.length-2);
    let secondUntilEnd = robbery(nums, 1, nums.length-1);
    
    return Math.max(firstUntilNminusOne, secondUntilEnd)
};

/** same as House Robber problem - 198 */
function robbery(numsArr, start, end){
    let rob1 = 0;
    let rob2 = 0;
    
    for(let i=start; i<=end; i++){
        let num = numsArr[i];
        let temp = Math.max(rob1 + num, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    
    return rob2;
}
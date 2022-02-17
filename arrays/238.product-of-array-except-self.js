/** 

238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

leetcode-question:238
leetcode:https://leetcode.com/problems/product-of-array-except-self/


Hint:
- BruteForce: O(n^2)
- Traverse an array in for loop. Then have left and right pointer.
- Have while loop for left pointer which goes left of the current num and find product 
- Have while loop for right pointer which goes right of the current num and finds product
- Multiply the left and right produt 

- Optimal: Time: O(n) and Space: O(n)
- Similar to above but we prepare left and right product array seperate 
- start of the left product array will be 1 i.e leftProductArray[0] = 1
- end of the right product array will be 1 i.e rightProductArray[nums.length-1] = 1
- then we calculate leftProduct array goes --> and rightProductArray goes <--
- final result will be product of these values

- Optimal : Time:O(n) and Space: O(1) exclusing result array
- Same workflow as Optimal solution but instead of using leftProdctArr and rightProductArr
we will just use productArr.
- leftProductArr will be replaced with productArr and same workflow
- while calculating for right inside for loop, we need to be cautious and do the below.
-- `productArr[i] = producrtArr [i] * R`; where R = 1 at the begining
-- `R *= productArr[i];`

*/

/** time: O(n) and Space:O(n) */
var productExceptSelf = function(nums) {
    
    // example: nums = [1,2,3,4]
    let leftProductArr = new Array(nums.length-1);
    leftProductArr[0] = 1; /** no elements to left of index 0, hence its a product we default to 1 */
    
    for(let i=1; i<nums.length; i++){
        leftProductArr[i] = leftProductArr[i-1] * nums[i-1];
    }
    
    let rightProductArr = new Array(nums.length-1);
    rightProductArr[nums.length-1] = 1; /** no elements to right of last index, hence its a product we default to 1 */
    
    for(let i=nums.length-2; i>=0; i--){
        rightProductArr[i] = rightProductArr[i+1] * nums[i+1];
    }
    
    // leftProductArr = [ 1, 1, 2, 6 ]
    // rightProductArr = [ 24, 12, 4, 1 ]
    
    let productArr = new Array(nums.length-1);
    
    for(let i=0; i<nums.length; i++){
        productArr[i] = leftProductArr[i] * rightProductArr[i];
    }
    
    return productArr;
};

/** Time: O(n^2) and Space: O(n) */
var productExceptSelf = function(nums) {
    
    let result = new Array(nums.length).fill(0);
    
    let left =0;
    let right =0; 
    
    for(let i=0; i<nums.length; i++){
        let cur = nums[i];
        
        let left = i-1;
        let right = i+1;
        
        let leftProduct = 1;
        while(left >= 0){
            leftProduct = leftProduct * nums[left];
            left --
        }
        
        let rightProduct = 1;
        while(right < nums.length){
            rightProduct = rightProduct * nums[right];
            right++
        }
        
        let curExceptSelfProduct = leftProduct * rightProduct;
        result[i] = curExceptSelfProduct;
    }
    
    return result;
};


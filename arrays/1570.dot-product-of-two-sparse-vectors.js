/** 
 * 1570. Dot Product of Two Sparse Vectors  
 * 
 * Given two sparse vectors, compute their dot product.
 * 
 * Implement class SparseVector:
 * SparseVector(nums) Initializes the object with the vector nums
 * dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
 * A sparse vector is a vector that has mostly zero values, you should store the sparse 
 * vector efficiently and compute the dot product between two SparseVector.
 * 
 * Follow up: What if only one of the vectors is sparse?
 * 
 * Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
 * Output: 8
 * 
 * Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
 * Output: 0
 * 
 * leetcode-question:1570
 * leetcode:https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * company: FACEBOOK
 * 
 * Hint:
 * - Time:O(min(M,N)) and Space:O(min(M,N))
 * - Use hash in contructor to have "index":"value" pair for all values other than ZERO
 * -- doing so will help us not worry about 0 as multiplying with 0 will give 0
 * - In product method we access this.hash and loop though all the keys which 
 * matches with "array2.hash[key]" and then calculate the SUM
 */

/****************************************************************
 *
 * BruteForce: without Optimization ( checks even 0 )
 * 
 ***************************************************************/

var SparseVector = function(nums) {
    this.nums = nums;
};

SparseVector.prototype.dotProduct = function(vec) {
    
    let size = this.nums.length
    this.sum = 0;
    for(let i=0; i<size; i++){
        this.sum = this.sum + ( this.nums[i] * vec.nums[i] )
    }
    
    return this.sum
};


/****************************************************************
 *
 * Optimized: Time: O(min(M,N)) and Space: O(min(M,N)) for hash
 * 
 ***************************************************************/

var SparseVector = function(nums) {
    this.nums = nums;
    this.hash = {};
    
    /** have every values greater than 0 in hash as key:value */
    for(let i=0; i<this.nums.length; i++){
        let num = this.nums[i];
        if(num !== 0){
            this.hash[i] = num;
        }
    }
    
    console.log(this.hash);
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let sum = 0;
    
    /** access hash of first array v1 */
    for(let key in this.hash){
        let value = this.hash[key];
        /** access the hash of second array v2 */
        if(vec.hash[key]){
            sum = sum + (value * vec.hash[key]);
        }
    }
    
    return sum
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
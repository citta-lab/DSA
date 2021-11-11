/** 
 * Given an integer array nums where the elements are sorted in ascending order, 
 * convert it to a height-balanced binary search tree. A height-balanced binary 
 * tree is a binary tree in which the depth of the two subtrees of every node 
 * never differs by more than one. 
 * 
 * Or they might ask like build Min Height BST from given array like here https://www.algoexpert.io/questions/Min%20Height%20BST
 * 
 * leet code: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 *  
 * */

/**
 * Definition for a binary tree node.
 */

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    /** base condition otherwise we will have empty array as TreeNode */
    if(nums.length === 0 ) return null
    
    /** remember to floor it so when 5/2 = 2.5 happens we take 2 as middle */
    let mid = Math.floor(nums.length/2);
    
    /** remember to use array value not just mid (i.e position) to build tree */
    let node = new TreeNode(nums[mid]);
    
    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid+1);
    
    node.left = sortedArrayToBST(leftArr);
    node.right = sortedArrayToBST(rightArr);
    
    return node;
};


/** SECOND APPRAOCH ( USE THIS ) */

const sortedArrayToBSTII = function(nums) { 
    return BSTHelper(nums, 0, nums.length-1);
}

const BSTHelper = (array, left, right) => {
	
    /** need to return NULL otherwise it will fail for building BST */
	if(left > right) return null;
	
    /** if ( and  ) is not used then cal is off and goes to infinite loop */
	let mid = Math.floor((left + right) / 2);
    let value = array[mid];
   
	let tree = new TreeNode(value);
	
	tree.left = BSTHelper(array, left, mid-1);
	tree.right = BSTHelper(array, mid+1, right);
	
	return tree
}

let nums = [1,2,5,7,10,13,14,15,22];
console.log(sortedArrayToBST(nums))
console.log(sortedArrayToBSTII(nums))

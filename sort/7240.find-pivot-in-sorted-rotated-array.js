/**
 * 
 * Non Leetcode Question: Find pivot in Sorted Rotated array 
 *
 * Given an roated array we need to find the pivot point ( we will not have target as second argument ).
 *
 * Question: https://www.ideserve.co.in/learn/find-pivot-in-a-sorted-rotated-array
 *
 */ 

/** Time:O(N) and Space:O(1) */
function findPivotInSortedRotatedArray(arr){
    let pivot = -1;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return arr[i+1]
        }
    }

    return pivot;
}



/**  Time:O(logn) and Space:O(1)*/ 
function findPivotInSortedRotatedArrayBinarySearch(nums){
    
    let left = 0;
    let right = nums.length-1;

    if(left === right) return nums[left];

    while(left <= right){
        
        let mid = Math.floor((left+right)/2);


        if(mid < nums.length-1 && nums[mid] > nums[mid+1]){
            return nums[mid+1]
        }

        if(nums[left] <= nums[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    return -1
}



/** Examples  */
let arr = [4,5,6,7,8,1,2,3]
console.log(findPivotInSortedRotatedArray(arr)); // 1
console.log(findPivotInSortedRotatedArrayBinarySearch(arr)); // 1

arr = [4,5,6,7,0,1,2]
console.log(findPivotInSortedRotatedArray(arr)); // 0
console.log(findPivotInSortedRotatedArrayBinarySearch(arr)); // 0

arr = [4,5,6,7,0,1,2]
console.log(findPivotInSortedRotatedArray(arr)); // 0
console.log(findPivotInSortedRotatedArrayBinarySearch(arr)); // 0

arr = [5, 4]
console.log(findPivotInSortedRotatedArray(arr)); // 4
console.log(findPivotInSortedRotatedArrayBinarySearch(arr)); // 4


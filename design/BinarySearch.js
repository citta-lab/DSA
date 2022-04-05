function binarySearch(nums, target, left, right){
    
    if(left > right ) return -1
    
    let mid = Math.floor((left + right) / 2);
    
    if(nums[mid] === target) return mid;
    
    if(target < nums[mid]){
        binarySearch(nums, target, left, mid-1);
    }
    
    if(target > nums[mid]){
        binarySearch(nums, target, mid+1, right);
    }
    
    return -1
}

let nums = [1,2,3,4,5,6];
let target = 4;
var search = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    
    return bs(left, right, target, nums);
};
    
function bs(left, right, target, nums){
    while(left <= right){
        
        let mid = Math.floor((left+right)/2);
        
        if(nums[mid] === target) return mid;
        
        if(nums[mid] > target){
            return bs(left, mid-1, target, nums)
        }else{
            return bs(mid+1, right, target, nums)
        }
    }
}


//0,1,2,3,4,5,6,7. target=2
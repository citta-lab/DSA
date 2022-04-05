/** 
 * This is an attempt to make 015.3sum working with BACKTRACKING. This doesnt remove the duplicates.
 */

 var threeSum = function(nums) {
    
    let result = [];
    let subset = [];
    
    function dfs(nums, position){
        
        if(position >= nums.length){
            return 
        }
        
        if(subset.length > 3){
            return
        }
        
        let sum = subset.reduce((a,b) => a+b, 0);
        if(subset.length === 3 && sum === 0){
            let copy = [...subset];
            result.push(copy);
            return 
        }
        
        let num = nums[position];
        
        subset.push(num);
        dfs(nums, position + 1);
        
        subset.pop();
        dfs(nums, position + 1)
    }
    
    dfs(nums, 0)
    console.log(result)
};
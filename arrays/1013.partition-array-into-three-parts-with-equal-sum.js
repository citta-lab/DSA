/**
 * 1013. Partition Array Into Three Parts With Equal Sum
 * 
 * Given an array of integers arr, return true if we can partition 
 * the array into three non-empty parts with equal sums.
 * Formally, we can partition the array if we can find indexes 
 * i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
 * 
 * Example:
 * Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * Output: true
 * 
 * Hint:
 * - I. Two pointer
 * 
 * - II. Clever way ( can be used for any n number )
 * 
 */
/************************************************************
 * 
 * Using Average 
 * 
 ************************************************************/
 var canThreePartsEqualSum = function(arr) {
    
    let totalSum = arr.reduce((a,b) => a+b, 0);
    let average = totalSum / 3 ;
    
    let sum = 0;
    let count = 0;
    
    for(let num of arr){
        
        /** keep adding to sum until we reach average value */
        sum += num;
        
        /** if we find sum, then we increase count and reset sum */
        if(sum === average){
            count++
            sum = 0;
        }
    }
    
    return count >= 3;
};



/************************************************************
 * 
 * Two pointer ( fails 70/72 i.e [1,1,1,1])
 * 
 ************************************************************/
 var canThreePartsEqualSum = function(arr) {
    
    let left = 0;
    let leftSum = arr[left];
    
    let right = arr.length-1;
    let rightSum = arr[right];
    
    let sum = arr.reduce((a,b) => a+b, 0);
    
    while(left + 1 < right){
        
        if(leftSum === Math.floor(sum/3) && rightSum === Math.floor(sum/3)){
            return true;
        }
        
        if(leftSum !== Math.floor(sum / 3)){
            left++
            leftSum += arr[left];
        }
        
        if(rightSum !== Math.floor(sum / 3)){
            right--
            rightSum += arr[right];
        }
    }
    
    return false
    
};
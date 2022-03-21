/**
 * 
 * 42. Trapping Rain Water
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
    In this case, 6 units of rain water (blue section) are being trapped.
 */

/**
 * There are three important steps we need to take.
 * - need to find out all the left max height from every index ( go from 0 to length)
 * - need to find right max height for every index ( go from length to 0)
 * - loop throuhg each index to find how much water we can trap. 
 * i.e min of left and right building height then the acualt building height
 * leet code:
 * https://leetcode.com/problems/trapping-rain-water/solution/
 */

 // O(n) space and time
var trap = function(height) {
    // find left max
    // right max 
    // find min of left and right 
    
    let leftMax = findLeftMax(height);
    let rightMax = findRightMax(height);

    let diff = 0
    for(let i=1; i< height.length; i++){
        diff += Math.min(leftMax[i], rightMax[i]) - height[i]; 
    }
    
    return diff;
 
};

const findLeftMax = (array, temp=[]) => {
   temp[0] = array[0];
   for(let i=1; i<array.length; i++){
       let max = Math.max(array[i], temp[i-1]);
       temp[i] = max;
   }
    
    return temp;
}

const findRightMax = (array, temp=[]) => {
    temp[array.length-1] = array[array.length-1];
    for(let i=array.length-2; i>=0; i--){
       let max = Math.max(array[i], temp[i+1]);
       temp[i] = max;
    }
    
    return temp
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9
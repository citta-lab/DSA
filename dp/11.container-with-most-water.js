/** 11. Container With Most Water Y
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) 
 * and (i, height[i]). 
 * 
 * Find two lines that together with the x-axis form a container, 
 * such that the container contains the most water. 
 * 
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container. 
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 * leetcode-question:11
 * leetcode: https://leetcode.com/problems/container-with-most-water/
 * video: https://www.youtube.com/watch?v=UuiTKBwPgAo&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=10
 * 
 * BLIND: 4 (4/75)
 * 
 * Hint:
 * - Use two pointers left and right at the start and end
 * - calculate area every time inside while loop ( area = min height of left or right * right-left)
 * - move left or right if one of them is less than or equal
 * 
 * */

/** Time: O(N) and O(1) space */
var maxArea = function(height) {
    
    let maxAreaResult = 0;
    let left = 0;
    let right = height.length - 1; 
    
    while(left < right){
        
        /** 
            Step 1: 
            Find if we have max area from given left, right
            - calculate area every time 
            - Area = length of shorter vertical line * distance between lines
        */
        let area = ( right - left ) * Math.min(height[left], height[right]);
        maxAreaResult = Math.max(maxAreaResult, area);
        
        /** Step 2: 
            move left or right if one is less than other so we check all
            options 
        */
        if(height[left] <= height[right]){
            left++
        }else if(height[left] > height[right]){
            right--
        }
    }
    
    return maxAreaResult;
};

let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height)); // 49

height = [1,8,6,2,5,4,1,3,1]
console.log(maxArea(height)); //18

height = [1,1,1,1,1,1,1]
console.log(maxArea(height)); //6

height = [1,0]
console.log(maxArea(height)); //0

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
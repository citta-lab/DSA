/**   Let's call an array arr a mountain if the following properties hold:
Question Link: https://leetcode.com/problems/peak-index-in-a-mountain-array/

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. 


Input: arr = [24,69,100,99,79,78,67,36,26,19]
Output: 2

Input: arr = [0,2,1,0]
Output: 1

Input: arr = [3,4,5,1]
Output: 2

Input: arr = [0,10,5,2]
Output: 1


*/


/**
 * SOLUTION:
 * The question is indicating we need to return index of the mountain peak. Where peak should have adjacent values lesser compare
 * to the peak value. So we are interested in knowing i-1 and i+1 value for every i.
 */


 const peakIndexInMountainArray = (array) => {
     // boundry check 
     const arraySize = array.length -1;
     if (arraySize < 3) return; 

     let peakIndex; // O(1) space complexity as we are only using a variable to store
     let i = 1; // 0 is first element it cannot be peak 
     /** hence we are traversing through entire array atleast once we will have O(n) time conplexity  */
     while(i <= arraySize-1) { // last index cannot be peak either 
        let isPeak = array[i-1] < array[i] && array[i] > array[i+1];

        if(isPeak){
            peakIndex = i;
        }

        i++
     }

     return peakIndex;
 }


 /** TESTING  */
 console.log(peakIndexInMountainArray([0,10,5,2]));  // 1
 console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19])); //2 
 console.log(peakIndexInMountainArray([3,4,5,1])); // 
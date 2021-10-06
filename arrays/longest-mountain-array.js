/**
 * You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.
 */

/**
 *  Solution: we will start finding the peak first and once found 
 * then start looking for its length, then move on to next
 * peak and look for it's length. Store the greatest length 
 *  */

var longestMountain = function (arr) {

    let arrSize = arr.length - 1;
    let longestMountain = 0;

    let i = 1; // 0 element cannot be peak and our intention is to find the peak first 
    while (i < arrSize) { // last element cannot be peak either so only looking until ( arr.length -1 ) -1 
        let isPeak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];

        console.log(' i : ' + i);
        console.log('arr[i-1] : ' + arr[i - 1])
        console.log('arr[i] : ' + arr[i])
        console.log('arr[i+1] : ' + arr[i + 1])


        if (!isPeak) {
            i++
            continue; // skip below step and check for next batch 
        }

        let leftIdx = i - 1; // hence we cannot manipulate the i directly but yet we need to find left side of the peak we refer leftIdx for that
        while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx+1]) {
            leftIdx--;
        }

        console.log('leftIdx : ' + leftIdx + ' and the value here is : ' + arr[leftIdx])


        let rightIdx = i + 1; // hence we cannot manipulate the i directly but yet we need to find right side of the peak we refer rightIdx for that
        while (rightIdx <=  arrSize && arr[rightIdx] < arr[rightIdx - 1]) {
            rightIdx++;
        }


        console.log('rightIdx : ' + rightIdx + ' and the value here is : ' + arr[rightIdx])
        //break;
        let currentPeakLength = rightIdx - leftIdx - 1;

        if (currentPeakLength > longestMountain) {
            longestMountain = currentPeakLength;
        }

        i = rightIdx; // by doing this we are jumping to find the next peak rather than checking everything between just found peak and next peak

    }

    return longestMountain;
};

/** Test Below */
//console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); //5 
console.log(longestMountain([2,2,2])); // 0
console.log(longestMountain([1,2,3,3,4,0,10,6,5,-1,-3,2,3])); // 6
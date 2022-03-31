/** 
   239. Sliding Window Maximum
   
   You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
   You can only see the k numbers in the window. Each time the sliding window moves right by one position.
   
   Return the max sliding window.
   
   Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
   Output: [3,3,5,5,6,7]
   
   Input: nums = [1], k = 1
   Output: [1]
   
   Input: nums = [1,1,1,1,4,5], k = 5
   Output: [4,5]
   
   Input: nums = [8,7,6,9], k = 2
   Output: [8,7,9]
   
   Input: nums = [7,2,4], k = 2
   Output: [7,4]
   
   leetcode-question:239
   leetcode:https://leetcode.com/problems/sliding-window-maximum/
   ref:https://leetcode.com/problems/sliding-window-maximum/discuss/871317/Clear-thinking-process-with-PICTURE-brute-force-to-mono-deque-pythonjavajavascript
   video:https://www.youtube.com/watch?v=DfljaUwZsOk
   
   */

/**
 - Time:O(n*k) and Space:O(n) but if dequeue is used then time:O(n) 
 - q is an array here but if we choose other language we should be using Dequeue.
 - Dequeue has head and tail like "Doubley linked List" so we can add/remove from either end.
 - q will "ALWAYS WILL HAVE numbers in DECREASING order". 
 Hence while loop and q.pop() when num is > q[q.length-1]. 
 - sliding window: elements in q are removed from left as we slide. Hence q.shift(). 
 - If we have WINDOW of size atleast "k" then we remove the left most INDEX from q and add 
 respective number to result
 */
 

var maxSlidingWindow = function(nums, k) {
    
    let q = []; /** hold indexes */
    let result = [];
    
    for(let i=0; i<nums.length; i++){
        
        /** making q hold values in decreasing order so it will be like [4,3,2,1] not [3,4] */
        while(q && q.length && nums[q[q.length-1]] <= nums[i]){
            q.pop();
        }
        
        q.push(i); // <-- push index not num
        

        /** sliding window : remove first element if it's outside the window "k" size */
        if(q[0] === i - k){
            q.shift();
        }
        
        /** if we have window of k size then pluck the max value index from q */
        if( i >= k - 1){
            let maxIndexFromLeft = q[0];
            result.push(nums[maxIndexFromLeft])
        }
    }

    return result
};

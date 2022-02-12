/** 
 * 
 * 55. Jump Game 
 * 
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position. 
 * Return true if you can reach the last index, or false otherwise.
 * 
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * 
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * 
 * leetcode-question:55
 * leetcode:https://leetcode.com/problems/jump-game/
 * video:https://www.youtube.com/watch?v=Yan0cv2cLy8
 * 
 * BLIND: 16 (16/75)
 * 
 * */

/****************************************/
/************ Not optimal ***************/
/****************************************/

/** Time: O(N^n) without memoization but adding memoization we get time: O(n^2) and adds space
 * as O(N^2). 
*/
var canJump = function(nums) {
    return jump(0, nums);
 };
 
 function jump(index, nums, memo=new Map()){
     
     if( index === nums.length-1) return true;
     
     if(memo.has(index)) return memo.get(index);
     
     let posibilities = nums[index];
     
     for(let i=1; i<= posibilities; i++){
         let result = jump(index+i, nums, memo);
         if(result) {
             memo.set(index, result);
             return result
         }
     }
     
     memo.set(index, false);
     return false;
 }



/****************************************/
/************ Optimal (Greedy) ***********/
/*****************************************/

/** time: O(n) and space:O(1) */
var canJump = function(nums) {
    
    /** lets start backward, so from destination we will see if we can go to start */
    let destination = nums.length-1; 
    
    for(let i=nums.length-1; i >=0; i--){
        let maxJumpLength = nums[i];
        
        /** 
        current position plus maximum jumpLength at current position should be
        greater or equal to destination (index) then only we could have reached the
        destination/end 
        */
        
        if(i + maxJumpLength >= destination){
            /** move destination one step closer to starting <-- direction */ 
            destination = i;
        }
    }
    
    /** if we decremented destination all the way to 0 then we reached start */
    return destination === 0 ? true : false;
    
};
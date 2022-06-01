/**
 * 131. Palindrome Partitioning
 * 
 * Given a string s, partition s such that every substring of 
 * the partition is a palindrome. Return all possible palindrome 
 * partitioning of s.
 * 
 * A palindrome string is a string that reads 
 * the same backward as forward.
 * 
 * Example:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * 
 * leetcode:https://leetcode.com/problems/palindrome-partitioning/
 * leetcode-question:131
 * 
 * Hint:
 * Backtrack - Time:O(N * 2^N) and Space:O(N)
 * - dfs 
 * - need to send arr, subarray, and start = 0
 * - if start >= s.length we add copy of subarray to arr
 * - for loop starts with i=start, which we will use as end in dfs (i.e i)
 * - check if we find palindrome, if yes call in recursion
 */

 var partition = function(s) {
    let result = [];
     
    let index = 0;
    let subArray = [];
    dfs(s, result, subArray, index);
    return result;
 };
 
 
 function dfs(s, result, subArray, start){
     
     if(start >= s.length) {
         let copy = [...subArray];
         result.push(copy);
     }
     
     /** this for loop will let us build a combination chars which we can then check if it is palindrome */
     for(let i=start; i<s.length; i++){
         let checkPalindrome = isPalindrome(s, start, i);  // <-- just i here ( upto i'th position )
         
         if(checkPalindrome){
             
             subArray.push(s.substring(start, i+1));
             dfs(s, result, subArray, i+1); // <-- important to do i+1 rather than start+1 
             
             /**backtrack*/
             subArray.pop();
         }
     }
 }
 
 
 function isPalindrome(s, left, right){
     while(left < right){
         if(s[left] !== s[right]){
             return false
         }
         
         left++
         right--
     }
     
     return true
 }

/** 
 * 
 * 14. Longest Common Prefix 
 * 
 * Write a function to find the longest common prefix 
 * string amongst an array of strings. If there is no common prefix, 
 * return an empty string "". 
 * 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * 
 * Input: strs = ["a","b"]
 * Output: ""
 * 
 * Input: strs = ["dog","dog","dog"]
 * Output: "dog"
 * 
 * leetcode-question:14
 * leetcode:https://leetcode.com/problems/longest-common-prefix/
 * 
 * WARNING: 
 * Dont use HASH MAP. we can build an hashmap with O(n^2) which will have
 * combination of prefix and count (i.e `{ fl: 3, flo:3, flow:1 }`) but then we need
 * to return LONGEST PREFIX string then we will have to sort by value to find max count,
 * then figureout longest key.
 * 
 * HINT:
 * - Option 1: Can be done by taking first item and looping through its char against rest of the array
 * items.
 * - Option 2: can do divide and conqure like (`longestpreFix(arr, 0, arr.length-1)`) then
 * mid = left + right / 2;  and call leftHalf and rightHalf like (arr, 0, mid) 
 * and (arr, mid+1, arr.length-1)
 * 
 * */

/** time: O(N) where N is sum of all characters from all strings, Space: O(1) */
/** 
   Time: O(N) where N is sum of all characters from all strings, 
   but it would be 2*(array.length/2) * array.length * string.length 
   
   Space: O(N log R) where R is recursive call 
   */

   var longestCommonPrefix = function(strs) { 
    if(strs.length === 0 || !strs) return '';
     return LCA(strs, 0, strs.length-1);
 };
 
 function LCA (strs, left, right) {
     
     /** if we are looking at the same word from strs from recursion */
     if(left === right) return strs[left] || strs[right];
     
     let mid = parseInt((left + right) / 2);
          
     let leftHalf = LCA(strs, left, mid);     // looking including mid
     let rightHalf = LCA(strs, mid+1, right); // we need look after mid
     
     return commonPrefix(leftHalf, rightHalf);
 }
 
 function commonPrefix(leftWord, rightWord) {
     
     /** 
     if we get (flower, flos) then we need to worry until 'flos'
     as we need prefix between these two words  
     */
     let minLength = Math.min(leftWord.length, rightWord.length);
     
     /** now we need to find if we can find common prefix between
     these two words for minLength*/
     
     for(let i=0; i<minLength; i++){
         let leftWordChar = leftWord[i];
         let rightWordChar = rightWord[i];
         
         if(leftWordChar != rightWordChar){
             return leftWord.substring(0, i);
         }
     }
     
     return leftWord.substring(0, minLength);
 }

 let strs = ["flower","flow","flight"]
 console.log(longestCommonPrefix(strs)); // fl

 strs = ["dog","racecar","car"]
 console.log(longestCommonPrefix(strs)); // ""

 strs = ["a","b"]
 console.log(longestCommonPrefix(strs)); // ""

 strs = ["dog","dog","dog"]
 console.log(longestCommonPrefix(strs)); // fl

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
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 0 || !strs) return '';
    
     /** 
     Hint: PREFIX (so all words prefix need to match)
     
     Idea here is to pick the first element from the array 
     and then loop through it's characters against rest of 
     the array items starting from index 1. 
     
     During this process we will compare "character" from 
     first item is a match against characters from other
     array items. When we find mismatch then we return 
     the SUBSTRING utpo that point 
     */
     
     /** step 1: pick firs word */
     let firstWord = strs[0];
     
     /** step 2: loop through all characters of first word */
     for(let i=0; i<firstWord.length; i++){
         let char = firstWord[i];
         
         /** step 3: loop first word char against rest of the array words */
         for(let j=1; j<strs.length; j++){
             
             /** 
             step 4: if first word char is NOT EQUAL to rest of the word char
             then we break. Also i === strs[j].length to handle when the 
             input is ["a", "b"] 
             */
             if(char !== strs[j].charAt(i) || i === strs[j].length ){
                 return strs[0].substring(0, i)
             }
         }
     }
     
     return strs[0];
 };

 let strs = ["flower","flow","flight"]
 console.log(longestCommonPrefix(strs)); // fl

 strs = ["dog","racecar","car"]
 console.log(longestCommonPrefix(strs)); // ""

 strs = ["a","b"]
 console.log(longestCommonPrefix(strs)); // ""

 strs = ["dog","dog","dog"]
 console.log(longestCommonPrefix(strs)); // fl

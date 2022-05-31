/**
 * 2193. Minimum Number of Moves to Make Palindrome
 * 
 * You are given a string s consisting only of lowercase English letters.
 * In one move, you can select any two adjacent characters of s and swap them.
 * 
 * Return the minimum number of moves needed to make s a palindrome.
 * Note that the input will be generated such that s can always be converted
 * to a palindrome.
 * 
 * leetcode:https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/
 * leetcode-question:2193
 * 
 * Hint:
 * - Can be done using Two Pointer 
 * - DFS
 * 
 * - Using DFS
 * - Hence we will have more than 2000 char we need check 
 * left, right side together and splice then string so it
 * will be recuced.
 */

 const minMovesToMakePalindrome = (s) => dfs(s);

 function dfs(s){
     let remaining = '';
     for(let i=0; i<s.length; i++){
         
         let lastChar = s[s.length-1];           /** used when we keep moving left pointer using i */
         let varyingLastChar = s[s.length-1-i];  /** used when we keep left pointer at 0 and not move */ 
         
         /** keep running pointer from left but keeping right constant */
         if(s[i] === lastChar){
             /** if they are equal then we remove it and cal for rest of the string */
             remaining = s.slice(0, i) + s.slice(i+1 , -1);
             return i + dfs(remaining);
             
         } else if (varyingLastChar === s[0]){
             /** keeping first postion constant and moving from right */
             remaining = s.slice(1, s.length-1-i) + s.slice(s.length-i);
             return i + dfs(remaining);
         }
     }
     
     return 0;
 }
/** Given a string s, find the length of the longest substring without repeating characters.

Examples: 
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = ""
Output: 0

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = "au"
Output = 2

Input: s = "asjrgapa"
Output = 6

leetcode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Company: Google, Facebook

Reference: https://duncan-mcardle.medium.com/leetcode-problem-2-longest-substring-without-repeating-characters-javascript-993890bf8eac
video : https://www.youtube.com/watch?v=wiGpQwVHdE0
*/


/** BRUTE FORCE */
var lengthOfLongestSubstringI = function(s) {
   
   let longest = 0;
   
   /** if the string has just one charectar like "b" or " " then why bother with below steps */
   if(s.length === 1) return 1;

   /** O(n^2) time and O(n) space */
   for(let i=0; i<s.length; i++){
       let seen = new Set(); /** gets new set for new combination */ 
     for(let j=i; j<s.length; j++){
        if(!seen.has(s[j])) {
            seen.add(s[j]);
        }else { 
            /** by exiting the loop we stop adding or checking chars example: pwwkew. without break we will have 'pwke' but unique substring should be 'wke' */
            break;
        }
      };
      /** needs to happen after first for loop as we are using new set one inner forloop is completed for each char combination */
      longest = Math.max(longest, seen.size);
    };  
    
    return longest;
};

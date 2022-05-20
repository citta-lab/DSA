/**
 * 10. Regular Expression Matching
 * 
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 * '.' Matches any single character.​​​​
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * 
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * Input: s = "aa", p = "a*"
 * Output: true
 * 
 * Input: s = "ab", p = ".*"
 * Output: true <--- IMPORTANT 
 * 
 * leetcode-question:10
 * leetcode:https://leetcode.com/problems/regular-expression-matching/
 * ref:https://leetcode.com/problems/regular-expression-matching/discuss/491812/JavaScript-Recursive-approach-w-explanation
 * 
 * Hint:
 * - Time:O((T+P)*2^t+p/2) Space:O(T+P)
 * - Recursion without backtrack 
 * - Remember 
 * -- '.' can match any characters 
 * -- '*' can match to any previous char (any times) or nothing.
 * - Main Cases
 * -- when we have '*' in the string  (hard case)
 * -- when we dont have '*' in the string 
 */

/** time:O(T+P * 2^t+p/2) where T is text, P is pattern Space:O(T+P) */ 
var isMatch = function(s, p) {
    
    // if both are empty then nothing to match so true
   if(!s && !p) return true; 
   
   
   // lets findout if first char is match
   let hasMatching = s.length > 0 && 
       (s[0] === p[0] ||  // if first char matches 
        p[0] === '.');    // if pattern char is '.' then it can match any alphabet;
   
   /**
    there are two main scenarios we need to cover
    - case 1: if we have * 
    - case 2: if we dont have *
    */
   
   // case 1: if we find * after first char match 
   if(p[1] === '*'){
       // furture we have two choice at every charecter position if we want to include the char or not including. 
       return (
           isMatch(s, p.slice(2)) ||               // match without current pattern char     
           hasMatching && isMatch(s.slice(1), p))  // match with current pattern char for rest of the string
   }
   
   
   // case 2: if we dont find * after first char match 
   return hasMatching ? isMatch(s.slice(1), p.slice(1)) : false;
};
/**
 * 516. Longest Palindromic Subsequence
 * 
 * Similar to 1216. Valid Palindrome III with restrictions of 'k' 
 * char can be removed
 * 
 * Given a string s, find the longest palindromic subsequence's length in s.
 * A subsequence is a sequence that can be derived from another sequence by 
 * deleting some or no elements without changing the order of the remaining 
 * elements.
 * 
 * 
 * Input: s = "bbbab"
 * Output: 4 ( for bbbb )
 * 
 * Input: s = "cbbd"
 * Output: 2 (for bb)
 * 
 * leetcode:https://leetcode.com/problems/longest-palindromic-subsequence/
 * leetcode-question:516
 * 
 * Hint:
 * - Recursion with memoization
 * - Similar to longest palindrome with k chars removed
 * - memoization using m*n array
 * - 
 */

/** memorization with recursion */
var longestPalindromeSubseq = function(s) {
    
    /** needed for long string */
    let memo = new Array(s.length).fill(0).map((e) => new Array(s.length).fill(0));
    
    function findPalindrome(left, right){
        
        /** boundry : if we cross but didnt return */
        if(left > right ) return 0;
        
        /** edge case: if the given string as just one char */
        if(left === right) return 1;
        
        if(memo[left][right]) return memo[left][right];
        
        let result;
        
        /** scenario: when chars matches where 2 indicates TWO char match */
        if(s[left] === s[right]){
            result = findPalindrome(left+1, right-1) + 2
        }else{
            /** scenario: when chars doesnt match */
            let fromLeft = findPalindrome(left+1, right);
            let fromRight = findPalindrome(left, right-1);
            result = Math.max(fromLeft, fromRight); // <-- return the max match count
        }
        
        memo[left][right] = result;
        return result;
    }
    
    
    console.log(memo); // will just we m*n array with 0's 
    
    return findPalindrome(0, s.length-1)
  
};
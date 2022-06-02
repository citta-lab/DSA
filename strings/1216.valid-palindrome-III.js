/** 
 * 1216. Valid Palindrome III
 * 
 * Similar to 516. Longest Palindromic Subsequence but we will have 'k' limit.
 * 
 * Given a string s and an integer k, return true if s is a k-palindrome.
 * A string is k-palindrome if it can be transformed into a palindrome by 
 * removing at most k characters from it.
 * 
 * Input: s = "abcdeca", k = 2
 * Output: true
 * Explanation: Remove 'b' and 'e' characters.
 * 
 * Input: S = "bacabaaa", k= 2
 * Output: false <---- we need `if(left === right) return 1`
 * 
 * leetcode-quesiton:1216
 * leetcode:https://leetcode.com/problems/valid-palindrome-iii/
 * 
 * Hint:
 * Time:O(N^2) and Space:O(N^2)
 */

/** Time:O(n^2) and Space:O(n^2) */
var isValidPalindrome = function(s, k) {
    
    let memo = new Array(s.length).fill(0).map((e) => new Array(s.length).fill(0));
    
    function findPalindrome(left, right){
        
        if(left > right ) return 0;
        
        if(left === right) return 1;
        
        if(memo[left][right]) return memo[left][right];
        
        let result;
        
        /** scenario: when chars matches */
        if(s[left] === s[right]){
            result = findPalindrome(left+1, right-1) + 2
        }else{
            /** scenario: when chars doesnt match */
            let fromLeft = findPalindrome(left+1, right);
            let fromRight = findPalindrome(left, right-1);
            result = Math.max(fromLeft, fromRight);
        }
        
        memo[left][right] = result;
        return result;
    }
    
    return s.length - findPalindrome(0, s.length-1) <= k
};
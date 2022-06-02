/**
 * 1328. Break a Palindrome
 * 
 * Given a palindromic string of lowercase English letters palindrome, 
 * replace exactly one character with any lowercase English letter so 
 * that the resulting string is not a palindrome and that it is the 
 * lexicographically smallest one possible.
 * 
 * Return the resulting string. If there is no way to replace a character
 * to make it not a palindrome, return an empty string.
 * 
 * A string a is lexicographically smaller than a string b (of the same length)
 * if in the first position where a and b differ, a has a character strictly 
 * smaller than the corresponding character in b. For example, "abcc" is 
 * lexicographically smaller than "abcd" because the first position they differ
 * is at the fourth character, and 'c' is smaller than 'd'.
 * 
 * Example:
 * Input: palindrome = "abccba"
 * Output: "aaccba"
 * 
 * Input: palindrome = "a"
 * Output: ""
 * 
 * leetcode:https://leetcode.com/problems/break-a-palindrome/
 * leetcode-question:1328
 * 
 * Hint:
 * - Greedy 
 * - Time:O(N) and Space:O(N)
 * - we need lexical order and need to remove one char
 * - if we change NON 'a' char in first half then we meet
 * the condition.
 * - if all chars are 'a' then change last char to 'b'
 */

 var breakPalindrome = function(palindrome) {
    
    /** cant change, ex: 'a' or 'b' */
    if(palindrome.length === 1) return "";
    
    /** 
    we have even and odd scenario to cover, but returning
    string should have lexical order. 
    - this means changes should occur in first half of the palindrome
    - if we find any char which is not 'a', changing it to 'a' will make
    lexical order
    */
    
    let arr = palindrome.split('');
    let halfLength = Math.floor(arr.length/2);
    
    for(let i=0; i<halfLength; i++){
        let char = arr[i];
        
        /** any first occurance of non 'a' char needs to be changed */
        if(char !== 'a'){
            arr[i] = 'a';
            return arr.join('');
        }
    }
    
    /** if we find all of the chars as 'a' then */
    arr[arr.length-1] = 'b';
    return arr.join('');
};
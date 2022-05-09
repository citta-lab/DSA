/**
 *
 * 1647. Minimum Deletions to Make Character Frequencies Unique
 *
 * A string s is called good if there are no two different characters in s that have the same frequency.
 * Given a string s, return the minimum number of characters you need to delete to make s good.
 * The frequency of a character in a string is the number of times it appears in the string. 
 * For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
 *
 * Example:
 * Input: s = "aab"
 * Output: 0
 *
 * Input: s = "aaabbbcc"
 * Output: 2
 *
 *
 * leetcode-question:1647
 * leetcode: https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 *
 * Hint:
 * - Time:O(N) and Space:O(1)
 * - There are only 26 chars, so we wouldn't store more than 26 
 * - Use new Array(26).fill(0) as index holder for all alphabets
 * - Use indexes of alphabets to keep track of count. i.e `char.chatCodeAt(0) - 'a'.charCodeAt(0)`
 * - we need to SORT so high count alphabets are at firt. O(1) as we are sorting at most 26 chars
 * - compare from 1st index, to it's previous if it is >= and decrement 
 */

/** Time:O(N) and Space:O(1) */ 
var minDeletions = function(s) {
    
    let resultCount = 0;
    
    /** we have 26 chars in alphabet, so it would be easy if we use the index of it to find count */
    let arr = new Array(26).fill(0);
       
    /** find index of alphabet, then increment its index */
    for(let char of s){
        let alphabet = char.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[alphabet] ++
    }
    
    console.log(arr); // [2,1,0,0,...]
    
    /** soret then so we have higher value first to compare */
    arr.sort((a,b) => b-a)
    
    /** check if we have same size, if yes we decrement the current and keep the count */
    for(let i=1; i<arr.length; i++){
        while(arr[i] && arr[i] >= arr[i-1]){
            arr[i] --
            resultCount ++
        }
    }
    
    return resultCount
};

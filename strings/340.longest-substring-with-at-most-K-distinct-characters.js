/** 
 *
 * 340. Longest Substring with At Most K Distinct Characters
 *
 *
 * Given a string s and an integer k, return the length of the longest substring
 * of s that contains at most k distinct characters.
 *
 *
 * Input: s = "eceba", k = 2
 * Output: 3
 *
 * Input: s = "aa", k = 1
 * Output: 2
 * 
 * leetcode-question:340
 * leetcode:https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * ref: https://github.com/citta-lab/DSA/blob/main/strings/159.longest-substring-with-at-most-two-distinct-characters.js
 *
 * Hint:
 * - Time:O(N) but it will be O(Nk) when k keep increases to n and Space:O(N)
 * - Using Sliding Window and hashMap
 * - HashMAp will hold "char":index this help in moving "left" pointer to 
 * respective index when hashMap size reaches K
 * - IMPORTANT :
 * - Optimal can be done using Orderd Dictonary which implements similar to LRU 
 * - Js doesnt have this data structure out of the box
 */

/** Time:O(N) but it will be O(Nk) when k keep increases to n and Space:O(N) */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    
    let dict = {};
    let left = 0;
    let right = 0;
    
    let maxLength = -Infinity;
    
    while(right < s.length){
        
        let char = s[right];
        
        dict[char] = right;
        
        let substringCharSize = Object.keys(dict).length;
        if(substringCharSize > k){
            
            let minIndex = Math.min(...Object.values(dict));
            left = minIndex + 1
            
            let removeChar = s[minIndex];
            delete dict[removeChar]
        }
        
        let curLength = right - left + 1
        maxLength = Math.max(maxLength, curLength)
        
        right++
    }
    
    return maxLength
};

 

/**
 *
 * 159. Longest Substring with At Most Two Distinct Characters
 *
 *
 * Given a string s, return the length of the longest substring that contains at most two distinct characters.
 * 
 * Input: s = "eceba"
 * Output: 3
 *
 * Input: s = "ccaabbb"
 * Output: 5
 *
 * leetcode-question:159
 * leetcode:https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * video: https://www.youtube.com/watch?v=odSP7QrlJys
 *
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - Using Sliding Window and hashMap
 * - HashMAp will hold "char":index this help in moving "left" pointer to 
 * respective index when hashMap size reaches TWO
 */

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let left = 0;
    let right = 0;
    
    /** holds char:index */
    let dict = {};
    
    let maxLength = -Infinity;
    
    while(right < s.length){
        
        let char = s[right];
        
        /** add char:index to dict */
        dict[char] = right;
        
        /** we relay on unique char in dict which helps us to find the current substring UNIQUE chars size */
        let dictSize = Object.keys(dict).length;
      
        if(dictSize > 2){
            
            /** step 1: find min index valued 'char' from dict */
            let minIndex = Math.min(...Object.values(dict));
            
            /** step 2: move left pointer to minIndex + 1, so we always find longer substring*/
            left = minIndex + 1;
            
            /** step 3: remove respective char from dict */
            let removeChar = s[minIndex];
            delete dict[removeChar];
        }
        
        let curLength = right - left + 1;
        maxLength = Math.max(maxLength, curLength);
        
        right++
    }
    
    return maxLength
};

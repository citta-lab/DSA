/** 

424. Longest Repeating Character Replacement 

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. 
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

leetcode-question:424
leetcode:https://leetcode.com/problems/longest-repeating-character-replacement/
video:https://www.youtube.com/watch?v=gqXU1UyA8pk

Hint:
- use sliding window to calculate the size of longest string (`slidingWindow = right - left + 1`)
- use hash to keep count of charecters with in sliding window 
- sort hash to get max count charecter which can be used to figureout max string length with k changes ( `returns [maxChar, maxCharCount]` )
- Find number of char needs to be changed to make repeating char string i.e `possibleChangeNeeded = slidingWindow - maxCharCount`;
- check if number pf charecter needed to be changes is with in our K limit i.e ( `possibleChangeNeeded <= k` )
- if yes then we update the resultSize (i.e `resultSize = Math.max(resultSize, slidingWindow)`)
- if `possibleChangeNeeded > k` we need to shrink string by moving left and removing cout of left index char (i.e `left += 1` and `hash[leftChar] -= 1`) 
- return resultSize

*/

var characterReplacement = function(s, k) {
    
    let maxSize = 0;
    let hashCount = {}
    
    let left = 0;
    let right = 0;
   
    while( left >= 0 && right < s.length && left <= right ){
        
        /** 
        keeping count of each of charecter occurrance in the hash,
        which will tell us which word has more occurrance than other.
        By knowing this we can tell possible number of charecter changes
        we need to make so it will have all repeated character 
        */
        
        let char = s[right];
        if(!hashCount[char]) hashCount[char] = 0;
        hashCount[char] += 1;
        
        
        let slidingWindowLength = right - left + 1;               // <-- substring length 
        const [ maxCount ] = getMaxCount(hashCount);     // <-- max occurrance char 
        let possibleChangeCount = slidingWindowLength - maxCount; // <-- minimum changes we need to make
        
        /** 
        if we find changes needed is more than allowed i.e k then we need
        to shrink the substring. So we will move left pointer 
        */
        
        if(possibleChangeCount > k ){
            hashCount[s[left]] -= 1;           // IMP: remove left char by looking at string 
            left += 1
        }
        
        /** 
        if we are this far then we have valid substring so 
        we find the size of the slidingWindow / substring length
        vs previously found substring size (i.e maxSize) 
        
        we can't use slidingWindowLength here as we sometime make changes to
        leftpointer whenever we find possibleChangeCount > k so we need to 
        calculate from the scratch */
        
        maxSize = Math.max(maxSize, right - left + 1);
        right++
    }
    
    return maxSize;

};

// let hash = { 'a':2, 'b':5, 'c':3}
function getMaxCount (hash) {
    let arr = Object.keys(hash).sort((a,b) => hash[b] - hash[a]);
    let firstIndexKey = arr[0];
    let firstIndexCount = hash[firstIndexKey];
    
    return [firstIndexCount]
}


let s = "ABAA"
let k = 0
console.log(characterReplacement(s, k)); // 2

s = "ABAB"
k = 2
console.log(characterReplacement(s, k)); // 4

s = "AABABBA"
k = 1
console.log(characterReplacement(s, k)); // 4

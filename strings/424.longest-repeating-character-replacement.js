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


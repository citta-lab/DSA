/** 

5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"

leetcode-question:5
leetcode:https://leetcode.com/problems/longest-palindromic-substring/
video:https://www.youtube.com/watch?v=XYQecbcd6_c

Hint: 
Brutforce: if the given string is "babad" then we can build a combination of words by 
looping it in nested forloops which will be O(n^2) and then we will have to scan each
newly built word for palindrome which is O(n). So Time : `O(n^3)`.

Better:
There are two ways we can check plaindrome using two pointers by using pointers at start & 
end of the string like start = 0 and end = 5 ( index ) then move inward. 

OR 

Moving pointers outward from center then left = 0 and right = 0 for index i = 0. But as we 
tranverse the string using for loop out left and right changes to pick from i. Then we move 
<-- left "word" right --->. 

Example: "babad"
index = 0, left = right = 0; result = 'b'  ( while loop will exit as left becomes -1 while moving <-- in while loop )
index = 1, left = right = 0; result = 'bab' ( while loop will exit after going to 0 index from 1 )
...
*/

/** time: O(n^2) and space: O(1) */
var longestPalindrome = function(s) {
    let result = '';
    let size = 0;
    
    /** loop through each char from left to right */
    for(let i=0; i<s.length; i++){
        
        /** Handle odd case ex: babad */
        let left = i; 
        let right = i;
        
        /** if left goes beyond 0 then we do nothing and for loop will increment left to i */
        while(left >= 0 && right < s.length && s[left] === s[right]){
            let curSize = right - left + 1;
            if(curSize > size){
                result = s.substring(left, right+1)
                size = curSize;
            }
            
            left -= 1;
            right += 1
        }
        
        
        /** handle even case ex: bb */
        left = i;
        right = i+1
        
        while(left >= 0 && right < s.length && s[left] === s[right]){
            let curSize = right - left + 1;
            if(curSize > size){
                result = s.substring(left, right+1);
                size = curSize;
            }
            
            left -= 1;
            right += 1;
        }
    }
    
    return result;
};

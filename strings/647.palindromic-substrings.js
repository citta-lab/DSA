/** 

647. Palindromic Substrings

Similar to 5. Longest Palindromic Substrings

Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

leetcode-question:647
leetcode:https://leetcode.com/problems/palindromic-substrings/
video: https://www.youtube.com/watch?v=4RACzI5-du8

Similar Question: https://github.com/citta-lab/DSA/blob/89faf71b0f98f993e08d0af2e64a92c51bd3289e/strings/5.longest-palindromic-substring.js

Hint: 
- (optimal) Use two pointers left and right have them move outwards. we need to handle both
odd case ( i.e 'bbb' ) and for even case (i.e 'bb' ). 
- (less optimal) Backtracking 

IMPORTANT: 
- `left, right = i` ( to start with )
- while loop should check out of bound for `left` and `right`
- while loop should also check if given char are equal i.e `s[left] === s[right]`
- length of current generated palindrome can be calculated by `size = right-left+1`
- extracting the string from s is `s.substring(left, right+1)`
- for EVEN case `left = i` but `right = i + 1`

so pseudo code looks like this
```js
result = [];
for index of s 
   // odd case like 'bbb'
   left = index
   right = index
   while left>= 0 && right < s.length && s[left] === s[right]
       curSize = right-left+1
       curString = s.substring(left,right+1)
       result.push(curString)
        
       left -= 1
       right += 1
       
   // even case like 'bb' 
   left = index
   right = index+1 // <--- is the only diff
   while left>= 0 && right < s.length && s[left] === s[right]
       ....
       ...
       ...
 ```
 
 */
 
 /** Time: O(n^2) , Space: O */
var countSubstrings = function(s) {
    let result =[];
    for(let i=0; i<s.length; i++){
        
        /** handling odd case : 'bbb' */ 
        let left = i;
        let right = i;
        
        while(left >= 0 && right < s.length && s[left] === s[right]){
            let palindromString = s.substring(left, right+1);
            result.push(palindromString);
            
            left -= 1
            right += 1
        }
        
        /** handling even case : 'bb' */ 
        /** the reason we need to handle even case becasue in given example the odd case
        will onlyu generate result set [ 'a', 'a', 'aaa', 'a' ] as when we are looking at
        substring 'aa' we are not finding the combination as it is even count i.e odd scenario
        will only produce [ 'a', 'a' ] and doesn't build 'aa'. Hence we need to have even 
        case seperately */
        
        left = i;
        right = i+1;
        
        while(left >= 0 && right < s.length && s[left] === s[right]){
            let palindromString = s.substring(left, right+1);
            result.push(palindromString);
            
            left -= 1
            right += 1
        }
    }
    
    console.log(result);
    return result.length;
};


/**************************************************************************
 *
 * Backtracking
 * Note: If the input is large like test case 128 then calculating the result
 * array size will cause TLE. so we can change it to result = [0] and instead
 * of pushing element to result we increment like result[0]++. 
 *
 **************************************************************************/
 var countSubstrings = function(s) {
    
    let result = [];
    let str = '';
    for(let i=0; i<s.length; i++){
        traverse(s, i, str, result);
    }
    
    return result.length;
};

function traverse(s, index, str, result){
    
    if(index >= s.length) return 
    
    let char = s.charAt(index);
    str += char;
    
    if(isPalindrome(str)) result.push(str);
    
    traverse(s, index+1, str, result);
}

function isPalindrome(str){
    let left = 0;
    let right = str.length-1; 
    
    while(left <= right){
        if(str[left] !== str[right]){
            return false
        }
        
        left ++
        right --
    }
    
    return true
}

/** 
 * 344. Reverse String 
 * 
 * ( O(N) time and O(1) space)
 * 
 * Write a function that reverses a string. 
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory. 
 * 
 * Exaple: 
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * leetcode-question:344
 * leetcode:https://leetcode.com/problems/reverse-string/
 * 
 * recursive will take O(N) time
*/


/** Time: O(1) & Space: O(1) */
var reverseString = function(s) {
    if(s.length < 2){
        return s
    }
    
    let left = 0;
    let right = s.length-1; 
    while(left <= right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++
        right--
    }
};

console.log(reverseString(["H","a","n","n","a","h"])); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
console.log(reverseString(["h","e","l","l","o"])); // [ 'o', 'l', 'l', 'e', 'h' ]
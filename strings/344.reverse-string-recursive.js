/** 
 * 344. Reverse String 
 * 
 * ( RECURSION but still takes O(N) time and O(1) space )
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
*/


/** Time: O(N) & Space: O(N) space from callstack */
var reverseString = function(s) {
    let left = 0;
    let right = s.length-1;
    helper(s, left, right);
    console.log(s);
};

const helper = (s, left, right) => {    
    /** left === right will fail when s is of even length, so we will return if left crosses right */
    if(left >= right){
        return 
    }
    
    helper(s, left+1, right-1);

    /** backtracking to reverse the strings */
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
}

console.log(reverseString(["H","a","n","n","a","h"])); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
console.log(reverseString(["h","e","l","l","o"])); // [ 'o', 'l', 'l', 'e', 'h' ]
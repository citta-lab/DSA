/**
 * 9. Palindrome Number
 * 
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * 
 * Input: x = 121
 * Output: true
 * 
 * Input: x = -121
 * Output: false
 * 
 * Input: x = 0
 * Output: true
 * 
 * leetcode:https://leetcode.com/problems/palindrome-number/
 * leetcode-question:9
 * 
 * Hint:
 * - Time:O(N) and Space:O(1)
 * - Use math i.e x = Math.floor(x/10) and remainder = x % 10
 * - num += remainder 
 */

 var isPalindrome = function(x) {
    
    if(x < 0) return false;
    
    if(x === 0) return true;
    
    let num = '';
    let given = x;
    while(x > 0){
        let rem = x % 10;
        x = Math.floor(x/10);
        
        num += rem;
    }
    
    return given === parseInt(num);
};
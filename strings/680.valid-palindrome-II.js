/** 
 * 680. Valid Palindrome II 
 * 
 * Given a string s, return true if the s can be palindrome 
 * "after deleting at most one" character from it. 
 * 
 * Input: s = "aba" 
 * Output: true 
 * 
 * Input: s = "abc"
 * Output: false
 * 
 * Input: s = "abca"
 * Output: true 
 * Explanation: You could delete the character 'c'.
 * 
 * leetcode-question:680
 * leetcode:https://leetcode.com/problems/valid-palindrome-ii/
 * video: https://www.youtube.com/watch?v=L_74qbyPHXE
 * Company: FACEBOOK
 * 
 * HINT:
 * use INWARDS pointers instead of outwards which might make us handle ODD and EVEN check 
 * in helper method before we call it done.
 * 
 * */

/** we need to use sliding window but going inwards left --> <-- right instead of doing outward
like <-- left right --> becasue if we do choose outwards then we need to check for even string and odd string case which adds more code than needed */ 

var validPalindrome = function(s) {
    
    /** have left and right move towards each other */
    let left = 0;
    let right = s.length-1;  // <-- IMP 
    
    while(left < right ){
        /** 
        if we found char not matching then we will 
        have to check two possible scenarios
        one for excluding left but including right, 
        next one excluding left but including right 
        */
        
        if(s[left] !== s[right]){
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }
        
        left ++;
        right --;
    } 
    return true;
};

 /** 
  * helper function to check atmost one time ( problem statement ) 
  * before we say its invalid 
  * */
 function isPalindrome (s, left, right) {
        
     while(left < right) {
            
            if(s[left] !== s[right]){
                return false;
            }
            
            left ++;
            right --;
        }
        
        return true;
}
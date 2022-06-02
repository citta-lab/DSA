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
 * 
 * Optimal:
 * - Time:O()
 * - use INWARDS pointers instead of outwards which might make 
 * us handle ODD and EVEN check in helper method before we call it done.
 * 
 * Recursion with memo:
 * - using recursion and memoization 
 * - this will fail if the string length is more than 1000 char
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

/*****************************************************************
 * 
 * Recursion with Memoization | Time:O(N^2) and Space:O(N^2)
 * Note: Fails when string length is more than 1000 char. 
 * 
 * Example from valid-palindrome-III
 * 
 ****************************************************************/

var isValidPalindrome = function(s) {
    
    /** at most one char */
    let k = 1; 

    let memo = new Array(s.length).fill(0).map((e) => new Array(s.length).fill(0));
    
    function findPalindrome(left, right){
        
        if(left > right ) return 0;
        
        if(left === right) return 1;
        
        if(memo[left][right]) return memo[left][right];
        
        let result;
        
        /** scenario: when chars matches */
        if(s[left] === s[right]){
            result = findPalindrome(left+1, right-1) + 2
        }else{
            /** scenario: when chars doesnt match */
            let fromLeft = findPalindrome(left+1, right);
            let fromRight = findPalindrome(left, right-1);
            result = Math.max(fromLeft, fromRight);
        }
        
        memo[left][right] = result;
        return result;
    }
    
    /** as long as the diff is 1 or less we are good */
    return s.length - findPalindrome(0, s.length-1) <= k
};
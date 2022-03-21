/** 

   921. Minimum Add to Make Parentheses Valid
   
    A parentheses string is valid if and only if:

    It is the empty string,
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.
    You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

    For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
    Return the minimum number of moves required to make s valid.
    
    Input: s = "())"
    Output: 1
    
    Input: s = "((("
    Output: 3
    
    ******** IMP EXAMPLE ***********
    Input: s = "()))(("
    Output: 4
    
    leetcode-question:921
    leetcode:https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
    company:FACEBOOK
    
    Hint:
    - Time:O(N) and Space:O(N)
    - Use STACK and COUNT=0 where count will keep an eye on braces which we couldn't pop from STACK
    - Use STACK which will contain ')' whenever we find '('
    - Pop from STACK whenever we see ')' only if STACK.length > 0 
    - if STACK is empty but we see ')' then we increment the COUNT 
    - return STACK.length + count as result so we check both
    
    */

/** Time:O(N) and Space:O(N) */
var minAddToMakeValid = function(s) {
    let stack = [];
    let count = 0;
    
    for(let char of s){
        if(char === '(') {
            stack.push(')')
        }else if(char === ')'){
            if(stack.length){
                stack.pop();
            }else{
                count++
            }
        }
    }
    
    return stack.length + count;
};
    

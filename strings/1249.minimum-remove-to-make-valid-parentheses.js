/** 

1249. Minimum Remove to Make Valid Parentheses. 

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Input: s = "lee(t(c)o)de("
Output: "lee(t(c)o)de"

leetcode-question:1249
leetcode: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
Company:FACEBOOK

Hint:
- Time:O(N) and Space:O(N)
- Important to use str = s.split('') as we will need to updated string value to '' based on index
- Need to know the index of extra brace we need to remove
- use STACK to keep track of indexes for ( and pop when we see )
- if we have extra ( or ) then we updated it to empty i.e str[i] = ''
*/

var minRemoveToMakeValid = function(s) {
    
    let str = s.split('');
    /** stack will add indexs for all '(' and pop the index when we see ')' */
    let indexStack = [];
    
    let open = '(';
    let closed = ')';
    
    for(let i=0; i<str.length; i++){
        let char = str[i];
        /** add index to stack for '(' */
        if(char === open){
            indexStack.push(i);
        }else if(char === closed){
            /** pop index as we found matching ')' */
            if(indexStack.length){
                indexStack.pop();
            }else{
                /** if we have extra ')' without closing '(' then we need to remove it to make the valid string. 
                    Example: "lee(t(c)o)de)" where last ) doesnt have matching ( */
                str[i] = '';
            }
        }
    }
    
    /** if we couldn't remove any trailing (. Example: "lee(t(c)o)de(" last ( */
    while(indexStack.length){
        let index = indexStack.pop();
        str[index] = '';
    }
    
    return str.join('')
    
};

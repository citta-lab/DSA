/**
Given a string s containing just the 
characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example: 
Input: s = "()"
Output: true

Example: 
Input: s = "([)]"
Output: false

Example: 
Input: s = "()[]{}"
Output: true
*/

/** O(n) time and O(n) space */
var isValid = function(s) {
    let hash = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    let stack =[];
    
    let chars = s.split('');
    for(let i=0; i< chars.length; i++){
        
        let char = chars[i];
        
        if(hash[char]){
            let popped = stack.length > 0 ? stack.pop() : 'DUMMY';
            if(popped !== hash[char]){
                return false;
            }
        }else{
            stack.push(char);
        }
        
    }
    
    return stack.length === 0;
};

console.log(isValid('[[[]]]'));
console.log(isValid('(]'));     // false 
console.log(isValid('([)]'));   // false
console.log(isValid('()'));     // true
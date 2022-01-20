/**

20. Valid Parentheses

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

leetcode-question:20
leetcode:https://leetcode.com/problems/valid-parentheses/

Hint:
How about we use hashMap to keep track of closing braces like `]`,`}`,`)`. 
Use stack to push all open braces like `(`,`[`,`{`. 

Check if you have elements in hash, if not then add to stack this way we only have open
braces in stack. If we find match in hash then pop from stack to compare 
*/

/** O(n) time and O(n) space */
var isValid = function(s) {
   
   let stack = []; /** will store all opening brace */
   let str = s.split('');
   
   /** matcher to remove open brace from stack from top */
   let hash = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
   for(let i=0; i<str.length; i++){
       let char = str[i];
       /** 
         if it is closing brace, then we need to remove
         open brance from top of the queue and make sure
         it is of same type 
         */
       if(hash[char]){
           let pop = stack.pop();
           /** we fail when char from loop is ) and poped from stack is [ */
           if(pop !== hash[char]) return false 
       }else{
           /** we store only open brace & remove it when we find closing match */
           stack.push(char);
       }
   }
    
   return stack.length === 0
};

console.log(isValid('[[[]]]'));
console.log(isValid('(]'));     // false 
console.log(isValid('([)]'));   // false
console.log(isValid('()'));     // true


/** More Verbose  */
var isValid = function(s) {
    let str = s.split('');
    let stack = [];
    
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(char === '('){
            stack.push(')');
        }else if(char === ')'){
            if(stack[stack.length-1] === char){
                stack.pop();   
            }else{
                return false;
            }
        }
        
        else if(char === '['){
            stack.push(']');
        }else if(char === ']'){
            if(stack[stack.length-1] === char) stack.pop();
            else {
                return false;
            }
        }
        
        else if(char === '{'){
            stack.push('}');
        }else if(char === '}'){
            if(stack[stack.length-1] === char) stack.pop();
            else {
                return false;
            }
        }
    }
    
    return stack.length === 0  
};
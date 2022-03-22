/** 
   
   227. Basic Calculator II
   
    Given a string s which represents an expression, evaluate this expression and return its value. 

    The integer division should truncate toward zero.

    You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

    Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
    
    Input: s = "3+2*2"
    Output: 7
    
    Input: s = " 3/2 "
    Output: 1
    
    leetcode-question:227
    leetcode:https://leetcode.com/problems/basic-calculator-ii/
    
    Hint:
    - IMP: * and / takes precedence over + and - 
    - If the sign is not present then we need to assume it is +
    - will use STACK to figureout and execute * and/or / operation first then
    perform + and/or /
    - need to handle when numbers are '2' or '22' or '222' etc 
    - so if we have string like "3+2*2" then we keep pushing chars to stack until we 
    find * or /. example stack=[3,+2]
    
    */

    var calculate = function(s) {
    
    let stack = [];
   
    /** holds the number to be computed */
    let num = '';
    let sign = null;
    
    for(let i=0; i<=s.length; i++){
        
        let char = s[i];
        
        /** step 1: handle empty space like '' or ' ' */
        if(char && char.trim().length === 0) continue;
        
        /** step 2: if char is number string and not sign */
        if(!isNaN(char)){
            num += char;
        }
        
        if(isNaN(char)){
            
            /** step 3.1: convert string to num so we can do operations */
            num = Number(num);
            
            switch(sign){
                /** if we dont have sign or have + then it is + */
                case '+':
                case null:
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                /** multiplication and divion take precedence so we perform 
                immediatly */
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(parseInt(stack.pop()/num, 10));
                    break;
            }
            
            /** reset */
            sign = char
            num = ''
        }
        
    }
    
    /** add all the values */
    return stack.reduce((a,b)=>{
        return a+b
      },0)
};

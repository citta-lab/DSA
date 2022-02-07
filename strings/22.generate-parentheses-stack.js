/** 
 * 
 * 22. Generate Parentheses 
 * 
 * Given n pairs of parentheses, write a function to generate all combinations 
 * of well-formed parentheses. 
 * 
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Input: n = 1
 * Output: ["()"]
 * 
 * leetcode-question:22
 * leetcode:https://leetcode.com/problems/generate-parentheses/
 * video:https://www.youtube.com/watch?v=s9fokUqJ76A
 * 
 * */

 var generateParenthesis = function(n) {
    /** 
      - () makes one pair and we are given n pairs 
      - This mean we have n number of `(` (open) and n number of (close) `)` brace
      - when open === close i.e we have 2*n number of brace so we add it to result
      - if open < n then we continue adding it to stack or string.
      - if close < open we continue adding closed brace to stack 
      - stack.pop() to remove the previously added brace from stack to find other combination
    */
    let stack = [];
    let result = [];
    
    function backtrack (open, close, n){
        if(open === close && open === n && close === n){
            result.push(stack.join(''));
            return
        }
        
        if(open < n){
            stack.push('(');
            backtrack(open+1, close, n);
            /** hence we are only using stack as global variable we need to remove previously added paranthesis */
            stack.pop();            /** remove '(' from the stack during backtracking */
        }
        
        /** important to remember we need to check close < open */
        if(close < open){
            stack.push(')');
            backtrack(open, close+1, n);
            stack.pop();            /** remove ')' from the stack during backtrack */
        }
    }
    
    backtrack(0, 0, n);  
    
    return result;
};

console.log(generateParenthesis(2)); // [ '(())', '()()' ]
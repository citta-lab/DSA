/** 394. Decode String 
 * 
 */

/** Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

leetcode-question:394
leetcode: https://leetcode.com/problems/decode-string/
video: https://www.youtube.com/watch?v=qB0zZpBJlh8

*/

var decodeString = function(s) {
    
    /** will use stack to keep pushing until we get ] in the given string */
    let stack = [];
    
    for(let i=0; i<s.length; i++) {
     let char = s[i];
    
     /** if we havent seen ] yet then we keep pushing to stack */
     if(char !== ']'){
         stack.push(char);
         continue;
      }
    
     /** we have found ], so we process stack elements */
      let buildString = '';
         
         /** we peek to see we havent found open bracket, and keep adding char to new string builder */
         while(stack[stack.length-1] !== '['){
             buildString = stack.pop() + buildString;
         }
         
         /** we have found open bracket, we ignore as we processed all of its content */
         stack.pop(); /** found [ so remove and move on */
          
         /** immediately after open bracket we have number like 1 or 11 or 100 so we take this first */
         let buildNumber = '';
         while(stack.length && parseInt(stack[stack.length-1]) >= 0){
             buildNumber = stack.pop() + buildNumber;   
         }  
         
         /** now we push newly built string buildNumber times before we process next item in stack */
         let num = parseInt(buildNumber);
         for(let times =0; times < num; times++){
             stack.push(buildString);
         }
    }
    
    return stack.join('')
};

let s = "3[a]2[bc]";
console.log(decodeString(s)); // aaabcbc

s = "3[a2[c]]"
console.log(decodeString(s)); // accaccacc
/**
 301. Remove Invalid Parentheses
 
 Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

  Return all the possible results. You may return the answer in any order.



  Example 1:

  Input: s = "()())()"
  Output: ["(())()","()()()"]
  Example 2:

  Input: s = "(a)())()"
  Output: ["(a())()","(a)()()"]
  Example 3:

  Input: s = ")("
  Output: [""]
  
  leetcode-question:301
  leetcode:https://leetcode.com/problems/remove-invalid-parentheses/
  
  Hint:
  - Time:O(2^n) and Soace:O(N)
  - BFS with different combinations 
  - Helper to vlaidate if the string is valid based on ( and ) count 
  - Helper to find if given char is parentheses or char
  - Whenever we find invlaid string we build diff combination
  */

/** time:O(2^n) and Space:O(N) */
  function removeInvalidParentheses(str) {
    if (str.length === 0) return [''];
  
    const sols = [];
  
    //  visit set to ignore already visited string
    const visit = new Set();
  
    //  queue to maintain BFS
    const queue = [];
  
    // Used for temp string
    let temp;
  
    // Used to check if current level is valid
    let level;
  
    //  pushing given string as starting node into queue
    queue.push(str);
    visit.add(str);
  
    while (queue.length) {
  
      str = queue.shift();
  
      /** Step 1: Valid Scenario */
      if (isValid(str)) {
        sols.push(str);
  
        // If answer is found, make level true
        // so that valid string of only that level
        // are processed.
        level = true;
      }
      if (level) continue;
  
      /** Step 2: Invalid Scenario */
      for (let i = 0; i < str.length; i++) {

        /** if we find any chars then we continue */
        if (!isParenthesis(str[i])) continue;
  
        // Removing parenthesis from str and
        // pushing into queue,if not visited already
        temp = str.slice(0, i) + str.slice(i + 1);   // removes ( or ) and adds the remainder like 'a)())()'
        //console.log(temp)
        if (!visit.has(temp)) {
          queue.push(temp);        // ['a)())()', '(a())()', '(a)))()', '(a)()()', '(a)()))', '(a)())('] keeps growing
          visit.add(temp);
        }
      }
    }
  
    return sols;
  }

  function isParenthesis(char) {
    return (char === '(') || (char === ')');
  }
  
  function isValid(str) {
    let count = 0;
  
    for (let l of str) {
      if (l === '(') count++;
      else if (l === ')') count--;
  
      if (count < 0) return false;
    }
  
    return count === 0;
  }

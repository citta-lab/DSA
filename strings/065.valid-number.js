/**
 *
 * 65. Valid Number
 *
 * A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.
For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

Input: s = "0"
Output: true

Input: s = "e"
Output: false

Input: s = "."
Output: false

Input: s =  "092e359-2"
Output: true

leetcode-question:63
leetcode:https://leetcode.com/problems/valid-number/

Hint:
- Time: O(N) and Space:O(1)
- Can also be done with DFA with is similar to Trie with state 
- DFA Deterministic Finite Automation 

*/

var isNumber = function(s) {
  s = s.trim();
 
  let decimalCount = 0;
  let eCount = 0;
  let signCount = 0;

  let start = 0;
  if (s[start] === '+' || s[start] === '-') start++;

  // Check for bullshit in beginning or end
  if (s[start] === 'e' ||
      s[s.length - 1] === 'e' ||
      s.slice(start, start + 2) === '.e' ||
      (s[start] === '.' && s.length - start === 1) ||
      !s.length ||
      s[s.length - 1] === '+' ||
      s[s.length - 1] === '-') return false;


  for (let i = start; i < s.length; i++) {
    const c = s[i];

    if (s.slice(i, i+2) === 'e.') return false;
      /** invlaid: check if we dont have string like `e.` */
    else if (c === '.' && eCount > 0) return false;
      /** keep an eye when we have string with `e+` or `e-` anything more is invalid */
    else if (eCount && (c === '-' || c === '+') ) signCount++;
      /** is okay to have `3.5` but `3.5.6` is invalid */
    else if (c === '.') decimalCount++;
      /** is okay to have `1e` but if we have `1e3e` then its invalid */
    else if (c === 'e') eCount++;
      /** is not valid if we see like `23-456` */
    else if (c < '0' || c > '9') return false;

     /** if we have one `.` or `e` or `+` or `-` then its good but more than 1 is wrong data */
    if (decimalCount > 1 || eCount > 1 || signCount > 1) return false;
  }

  return true;
};

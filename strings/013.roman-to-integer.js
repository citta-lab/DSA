/** 
 
   13. Roman to Integer 
   
   Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
   
   Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    
    Given a roman numeral, convert it to an integer.
    
    Input: s = "III"
    Output: 3
    Explanation: III = 3.
    
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
    
    leetcode-question"13
    leetcode:https://leetcode.com/problems/roman-to-integer/
    ref:https://github.com/BakeItTillYouMakeIt/LeetCodeJS/blob/master/Javascript/013_romanToInteger.js

    Hint
    - we will need two maps
    -- handling normal range like 1, 5, 10, 50 etc 
    -- handling edge cases like 4,9,40, 90 etc
    - we check for edge case by looking at two chars from string (i.e s.substring(i, i+2) )
    - we check for normal case in edge and keep adding value to result num
    
    */

    /** Time:O(1) and Space:O(1) */
var romanToInt = function(s) {
    
    const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const edgeCases = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
   };
    
   let num = 0;
   for(let i=0; i<s.length; i++){
       
       // i+2 as it is not inclusive and will take i+1 to consideration
       let edgeCaseNum = s.substring(i, i+2); 
       
       if(edgeCases[edgeCaseNum]){
           num = num + edgeCases[edgeCaseNum];
           i++ // <-- Imp increment has we need to move two chars and one will be done by for loop
       }else{
           num = num + romanMap[s[i]];
       }
   }
    
    return num
};

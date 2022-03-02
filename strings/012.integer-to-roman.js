/** 
  12. Integer to Roman
  
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
  For example, 2 is written as II in Roman numeral, just two one's added together. 
  12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
  
  Given an integer, convert it to a roman numeral.
  
  Input: num = 3
  Output: "III"
  Explanation: 3 is represented as 3 ones.
  
  Input: num = 1994
  Output: "MCMXCIV"
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
  
  leetcode-question:12
  leetcode:https://leetcode.com/problems/integer-to-roman/
  Ref:https://github.com/BakeItTillYouMakeIt/LeetCodeJS/blob/master/Javascript/012_integerToRoman.js
  
  Hint
  - have map with number to roman char for high numbers
  - our goal is to bring the number to ZERO while only using ROMAN way
  - 657 can we split into 
  -- 657 => 500 + 157 first which will be D + 157 ( remaining )
  -- 157 => 100 + 57 i.e C + 57 ( reminaing )
  -- 57 => 50 + 7 i.e L + 7 (remaining)
  -- 7 => 5 + 2 i.e V + 2 ( remianing )
  -- 2 => 1 + 1 i.e I + 1 (remaining)
  -- 1 => 1 + 0 i.e I 
  
  ans : "DCLVII"
  */

  /** Time:O(1) and Space:O(1) as its always constant mapping */
var intToRoman = function(num) {
    const romanMap = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
  };
    
    console.log(romanMap);
    
    let result = '';
    
    /** goal is to make num ZERO while subtracting romaon matching from map */
    
    while(num > 0){
        let highNumValue = getHighestRomanMatching(num, romanMap); // returns num (i.e key) from map
        result += romanMap[highNumValue];
        num = num - highNumValue
    }
    
    return result;
};

/** 
goal is to find matching high number. 
IMP: hence we stored key:value in same map, we would need to get key of
the map while comparing with the num. i.e if(key <= num)

Example: if num is 657
then high number we can find is 
- 500 (num becomes 157), next time the it will be 100 (num becomes 57), 
- next time it will be 50 (num becomes 7), 
- next time it will be 5 (num becomes 2), 
- next it will be 1 (num becomes 1), 
- last it will be 1 (num becomes 0) 
*/

function getHighestRomanMatching (num, map){
    let highRomanValue = 1;
    for(let key in map){
        if(key <= num){
            highRomanValue = key;
        }
    }
    
    return highRomanValue;
}
  

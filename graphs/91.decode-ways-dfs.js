/** 
   91. Decode Ways
   
   A message containing letters from A-Z can be encoded into numbers using the following mapping:
    'A' -> "1"
    'B' -> "2"
    ...
    'Z' -> "26"
    
    To decode an encoded message, all the digits must be grouped then mapped back into letters 
    using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
    - "AAJF" with the grouping (1 1 10 6)
    - "KJF" with the grouping (11 10 6)
    
    Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
    
    leetcode-question:91
    leetcode:https://leetcode.com/problems/decode-ways/
    video:https://www.youtube.com/watch?v=6aEyTjOwlJU
    
    BLIND: 24 (24/75)
    
    Hint:
    - tree combination problem but will yield in 2^n time complexity without memo as we have two decision to make
    i.e use 1 char or use 2 char from given string.
    - applying dfs recursion with memo can lead to o(n) time and space 
    
    Example: 
    s= "121".  
    
                 121
                / | \
               1  12 121(not valid)
              / \  \ \
             2  21  1 121(not valid)
            /   
           1
             
      possible ways : 1 -> 2 -> 1 and 1 -> 12 and 12 -> 1
    
    */

/** time: O(n) and space: O(n) */
var numDecodings = function(s) {
   
    /** memoization and we initialize cache with 1 for length, i.e if empty string we will return 1 */
    let memo = { }
    // OR use this memo[s.length] = 1;
    
    function dfs(s, index){
        
        /** base case */
        if(index > s.length) return 0;
        
        /** base condition to keep counting */
        if(index === s.length) return 1;

        /** base case: if the string starts with 0 then it's invalid as we dont have match */
        if(s[index] === '0') return 0;

        
        /** if we have memorized then return */
        if(memo[index]) return memo[index];
        
        /** considering 1'st char from start ( as number ranges from 1-9 are valid ) */
        let res = dfs(s, index+1); 
        
        /** 
            considering 2 char from start ( as we can have 10-26 ) 
            - make sure we have a second char (i+1 < s.length )
            - make sure second char either start with '1' or '2'
            - make sure if the second char starts with '2' then it 
            must end with any number less than or equal to 6
            - if yes then we process next two char hence i+2
            */ 
        
        if( index+1 < s.length 
           && s[index] === '1' 
           || ( s[index] === '2' && '0123456'.includes(s[index+1]) ) ) {
            res = res + dfs(s, index+2)
        }
        
        memo[index] = res
        
        return res
        
    }
    
    return dfs(s, 0);
};

console.log(numDecodings("12")) // 2
console.log(numDecodings("226")) // 3
console.log(numDecodings("06")) // 0
console.log(numDecodings("10")) // 1

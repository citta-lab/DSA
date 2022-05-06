/**
 *
 * 1405. Longest Happy String
 *
 *
 * A string s is called happy if it satisfies the following conditions:
 * 
 * s only contains the letters 'a', 'b', and 'c'.
 * s does not contain any of "aaa", "bbb", or "ccc" as a substring.
 * s contains at most a occurrences of the letter 'a'.
 * s contains at most b occurrences of the letter 'b'.
 * s contains at most c occurrences of the letter 'c'.
 * Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. 
 * If there is no such string, return the empty string "". 
 *
 * A substring is a contiguous sequence of characters within a string.
 * 
 *
 * Example:
 * Input: a = 1, b = 1, c = 7
 * Output: "ccaccbcc"
 *
 * Input: a = 7, b = 1, c = 0
 * Output: "aabaa"
 * 
 * leetcode-question:1405
 * leetcode:https://leetcode.com/problems/longest-happy-string/
 *
 * Similar Question: https://github.com/citta-lab/DSA/blob/main/strings/984.string-without-AAA-or-BBB.js
 *
 * Hint:
 * - Greedy Appraoch : Time:O(N) Space:O(N) where N is number of chars count (a+b+c) . 
 * - Focus on starting the combination from char which has more value i.e c = 7 
 * - We will use countA, countB, countC as counter to create valid combination of 'abc'
 * - use ARRAY to add chars which then be joined to produce the RESULT 
 *
 *
 * - Max Heap Appraoch:
 */

/** Greedy Appraoch */ 
var longestDiverseString = function(a, b, c) {
    
    /** counter to create combination of a,b,c i.e if countB = 2 then we move towards adding c or a vice versa */
    let countA = 0;
    let countB = 0;
    let countC = 0;
    
    const result = [];
    
    /** we need to atleast have count more than 0 to begin with */
    while(a > 0 || b > 0 || c > 0){
        
        /** verify if we have more a's */
        if((a >= b && a >= c && countA < 2) || (countB === 2 && a > 0) || (countC === 2 && a > 0)){
            result.push('a');
            countA ++
            a --
            
            /** resetting helps to create next combination of abc */
            countB = 0
            countC = 0
        }
        
        else if ((b >= a && b >= c && countB < 2) || (countA === 2 && b > 0) || (countC === 2 && b > 0)){
            result.push('b');
            countB ++
            b --
            
            countA = 0
            countC = 0
        }
        
        else if ((c >= a && c >= b && countC < 2) || (countB === 2 && c > 0) || (countA === 2 && c > 0)){
            result.push('c');
            countC ++
            c --
            
            countA = 0
            countB = 0
            
        }
        
        else {
            break
        }
    }
    
    return result.join('')
};

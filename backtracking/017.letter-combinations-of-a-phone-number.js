/** 17. Letter Combinations of a Phone Number 
 * 
 * Given a string containing digits from 2-9 inclusive, return all possible letter 
 * combinations that the number could represent. Return the answer in any order.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. 
 * Note that 1 does not map to any letters.
 * 
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * Input: digits = ""
 * Output: []
 * 
 * Input: digits = "2"
 * Output: ["a","b","c"]
 * 
 * leetcode-question:17
 * leetcode:https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * ref: https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1022553/Python-3-approaches-(iterative-DFS-BFS-recursive)-%3A-visuals-%2B-explanation
 * 
 * 
 * Hint:
 * - Time: NumberOfdigits * (maxCharsForAdigit)^numberOfdigits
 * - This can be solved with BACKTRACK and with Tranditional DFS by passing substring
 * to construct the combination
 * - In DFS, we pick the digit based on "position" (index) and then look for all
 * chars for that digit in the map. Then "position" increased by 1 which gets next
 * digit, then we look for all chars for that 'digit'. Meanwhile our subset/substring
 * has previous digit char for each recursion.
 * - SEE below for next option as well
 * 
 */


/** 
 * Backtracking:
 * Time:O(4^n*N) where N is number of digits and mac char in digit 7 and 9 are 4. 
 * Space: O(N) */
var letterCombinations = function(digits) {
    
    let numLettersMap = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
    }
    
    if(!digits || !digits.length) return []
    
    let result = [];
    let subset = []; // <-- using arr though we need string becuase we back pop() easily
    
    function dfs(position){
        
        if(position > digits.length) return 
        
        if(position === digits.length){
            let copy = [...subset];
            result.push(copy.join(''));
            return // <-- backtrack
        }
        
        let digit = digits[position];
        let children = numLettersMap[digit];
        for(let child of children){
            
            subset.push(child)
            dfs(position+1);
            
            subset.pop(); // <-- backtrack
            
        }
        
        // <-- no return like in traditional DFS
    }
    
    dfs(0);
    
    return result
};

 /**********************************************
  * 
  * Withiout backtracking, Using traditional DFS
  * 
  * ********************************************/
 var letterCombinations = function(digits) {
    
    let numLettersMap = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
    }
    
    if(!digits || !digits.length) return []
    
    let result = [];
    let subset = '';
    
    function dfs(position, subset, result){
        
        if(position > digits.length) return 
        
        if(position === digits.length){
            result.push(subset);
        }
        
        let digit = digits[position];
        let children = numLettersMap[digit];
        for(let child of children || []){
            /** passing subset string with new char to next dfs check */
            dfs(position+1, subset+child, result)
        }
        
        return result;
    }
    
    dfs(0, subset, result);
    
    return result
};
/** 
 * 
 * 408. Valid Word Abbreviation 
 * 
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty 
 * substrings with their lengths. The lengths should not have leading zeros.
 * 
 * For example, a string such as "substitution" could be abbreviated as (but not limited to):
 * "s10n" ("s ubstitutio n")
 * "sub4u4" ("sub stit u tion")
 * "12" ("substitution")
 * "su3i1u2on" ("su bst i t u ti on")
 * "substitution" (no substrings replaced)
 * 
 * The following are not valid abbreviations:
 * 
 * "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 * "s010n" (has leading zeros)
 * "s0ubstitution" (replaces an empty substring)
 * 
 * Given a string word and an abbreviation abbr, return whether the string matches 
 * the given abbreviation.
 * 
 * A substring is a contiguous non-empty sequence of characters within a string.
 * 
 * leetcode-question:408
 * leetcode:https://leetcode.com/problems/valid-word-abbreviation/
 * 
 * Hint:
 * - Two pointer with variable for tracking number.
 * - One pointer for abbriviation and one for given string
 * - While loop on both pointers and inside this we need to check
 * -- if we have number in abbreviation i.e !isNaN(abbr[abbrPointer])
 * -- else if number is more than 0
 * -- else if we found matching chars i.e abbr[abbrPointer] === word[wordPointer]
 * -- else return false as we didnt find
 * - lastly abbr.length === abbrPointer.length && wordPointer+number === word.length
 * 
 */

 var validWordAbbreviation = function(word, abbr) {
    
    let wordPointer = 0;
    let abbrPointer = 0;
    
    /** used to move the pointers based on values */
    let number = 0;
    
    while(abbrPointer < abbr.length && wordPointer < word.length){
        
        /** Step 1: find if char in abbr is number */
        if(!isNaN(abbr[abbrPointer])){
            number = number * 10 + Number(abbr[abbrPointer]);
            
            /** shouldn't have leading zero (given condition) */
            if(number === 0) return false;
        
            abbrPointer ++
        }
        
        else if(number > 0){
            /** Step 2: move the wordPointer number postions */
            wordPointer += number;
            /** reset so we can move char's by number */
            number = 0;
        }
        
        else if(abbr[abbrPointer] === word[wordPointer]){
            /** Step 3: if chars are same then move both pointers */
            wordPointer ++
            abbrPointer ++
        }
        
        /** Step 4: we didnt find match so return false */
        else return false;
    }
    
    /** Step 5: final check to make sure */
    return abbrPointer === abbr.length && wordPointer+number === word.length;
};
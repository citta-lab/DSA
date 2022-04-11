/**
 * 953. Verifying an Alien Dictionary
 * 
 * In an alien language, surprisingly, they also use English 
 * lowercase letters, but possibly in a different order. The order of 
 * the alphabet is some permutation of lowercase letters.
 * 
 * Given a sequence of words written in the alien language, and the order of the alphabet, 
 * return true if and only if the given words are sorted lexicographically in this alien language.
 * 
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * Output: true
 * 
 * Input: words = ["hello","hello"], order = "abcdefghijklmnopqrstuvwxyz"
 * Output: true
 * 
 * Input: words =  ["kuvp","q"], order = "ngxlkthsjuoqcpavbfdermiywz"
 * Output: true
 * 
 * leetcode-question:953
 * leetcode:https://leetcode.com/problems/verifying-an-alien-dictionary/
 * 
 * Hint:
 * - Time:O(M) where M is words length Space:O(O) order size
 * - Use hash map to store all the chars in order `{ char: position }`
 * - Use TWO pointer to go over the words. pre=words[i-1] and cur=words[i]
 * - we will have to check few conditions 
 * -- first char of prev should be less than cur word first char ( if not return FALSE )
 * -- else if first chars are same 
 * --- then use pointer to move until `while(curWord[pointer] !== preWord[pointer])`
 * --- check if first word is smaller than second 
 * --- check if rest of the chars in first and last are in order 
 * 
 */

 var isAlienSorted = function(words, order) {
    
    /** build order dict for char postions from order */
    let charOrder = new Map();
    for(let i=0; i<order.length; i++){
        let char = order[i];
        charOrder.set(char, i)
    }
    
    console.log(charOrder);
    
    /** loop through words with TWO POINTERS */
    for(let i=1; i<words.length; i++){
        
        let preWord = words[i-1];
        let curWord = words[i];
        
        /** step 1: we would have char in previous COME BEFORE current */
        let firstPreWordChar = preWord[0];
        let firstCurWordChar = curWord[0];
        
        if(charOrder.get(firstPreWordChar) > charOrder.get(firstCurWordChar)){
            return false;
        } else if(firstPreWordChar ===  firstCurWordChar){
            
            /** step 2: if chars are same then we will continue until diff */
            let pointer = 1;
            let maxPointerLimit = Math.max(curWord.length, preWord.length);
            while(pointer < maxPointerLimit && preWord[pointer] === curWord[pointer]){
                pointer ++
            }

            /** step 3: preWord should be shorter than curWord */
            if(charOrder.get(preWord[pointer]) >= 0 && !charOrder.get(curWord[pointer])) return false;        
            
            /** step 4: check rest of the chars are in order */
            if(charOrder.get(preWord[pointer]) > charOrder.get(curWord[pointer])) return false
        } 
    }
    
    return true
};
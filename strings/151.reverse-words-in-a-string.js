/**
 * 
 * 151. Reverse Words in a String
 * 
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * 
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * 
 * Input: s = "  hello world  "
 * Output: "world hello"
 * 
 * leetcode-question:151
 * leetcode:https://leetcode.com/problems/reverse-words-in-a-string/
 * 
 * Hint:
 * - In Buit Methods ( with trim, split ):
 * - Using trim() we can remove trailing space
 * - Using split(' ') we can create array of words ( word can be spaces as well )
 * - Using then we loop reverse on trimmed, split worlds we can build reverse string
 * 
 * - Without BuiltIn Methdos Two Pointers ( without trim, split ): 
 * - start from right, where will have right and left pointer starts at s.length-1
 * - we will move both left and right inward until there is space
 * - now we will ONLY move left pointer until we find next space. i.e at the end we have first word
 * - create new pointer which builds a word by going from left to right
 * - add it to result 
 */

/** Time:O(N) and Space:O(N) */
var reverseWords = function(s) {
    
    let result = [];
    s.trim();
    let words = s.split(' ');
    
    for (let word of words){
        /** remove any empty space which maybe stored as word */
        if(word.trim().length) result.push(word)
    }
    
    let reversed = ''
    for(let i=result.length-1; i>=0 ; i--){
        
        /** we need to add word only if reversed has atleast one word */
        if(reversed.trim().length) reversed += ' ';
        
        /** keep appending to string */
        reversed += result[i];
    }
    
    return reversed;
};


/*****************************************************************
 * 
 * Two Pointer > Time:O(N) and Space:O(1) witout result string
 * 
 *****************************************************************/

/** Two pointer appraoch */
var reverseWords = function(s) {
    
    
    let right = s.length-1;
    let left = s.length-1; 
    
    let result = '';
    
    while(right >= 0){
        
        /** traverse from right to left <-- */
        
        // step1: if we have empty space, then move pointers.
        while(s[right] === ' '){
            right --
            left --
        }
        
        /** step 2: move left pointer inner side (left) until we find next space. 
        which indicates we reached begining of the word */ 
        
        while(left >= 0 && s[left] !== ' '){
            left --
        }
        
        /** step 3: now move temp i so we find the word i.e anything between left 
        and right is a word */
        
        let i = left + 1;
        let word = '';
        
        // ste 3.1 [edge case]: when we are processing ' ' at the end. ex: "  hello world  "
        if(s[i] === ' ') continue;
        
        // step 3.2 : we need build word until we reach right pointer
        while(i <= right ){
            word += s[i];
            i++;
        }
        
        // step 3.3 : we have word, so we will add it to our result string 
        if(result === '') {
            result += word;
        } else {
            result += ' ';
            result += word;
        }
        
        // step 3.4 : we added the word, we reset right to left
        right = left;
        
    }
    
    return result;
};
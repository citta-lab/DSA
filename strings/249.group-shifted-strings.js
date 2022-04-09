/**
 *
 * 249. Group Shifted Strings
 *
 * We can shift a string by shifting each of its letters to its successive letter.
 * For example, "abc" can be shifted to be "bcd".
 * We can keep shifting the string to form a sequence.

 * For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
 * Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. 
 * You may return the answer in any order.
 * 
 * Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
 * Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
 *
 * leetcode-question:249
 * leetcode:https://leetcode.com/problems/group-shifted-strings/
 * 
 *
 * Hint:
 * -Time: O(N) and Space:O(n)
 * - we need to somehow shift each word to find a unique KEY so we can group them
 * - we can do it by RANOMDLY deciding a starting alphabet char for all words
 * -- to do this we will do X shifting 
 * -- same X shifting needs to be done on rest of the word char
 * - now we will have all words with same key and we can group them
 */

var groupStrings = function(strings) {
    
    /**
     Idea: if we make all the string to start with same char by doing
     SOME shift operation, and then use the SAME SHIFT (number) to rest
     of the string chars. By doing so all of them will endup looking like
     same string. 
     
     example: 'def'. 
     - to make 'd' to 'a' we will need to shift 'd' 23 times
     -- i.e a --> d is 3 so 26 char - 3 = 23
     - to make e to a's next consecutive char we will shit by
     previous SHIFT number i.e 23
     -- same for f
     */
    
    let map = {};
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    
    for(let string of strings){
        
        /** will make first char to 'a' */
        const firstChar = string[0];
        
        const offset = alphabet.indexOf(firstChar);
        const keyStrArr = ['a']; /** hence we decide to pick as start char */
        
        for(let i=1; i<string.length; i++){
            
            let newCharIdx = alphabet.indexOf(string[i]) - offset;
            
            if(newCharIdx < 0){
                newCharIdx += 26
            }
            
            let newShiftedChar = alphabet[newCharIdx];
            keyStrArr.push(newShiftedChar);
        }
        
        /** now we need to map all string to our key */
        const key = keyStrArr.join('');
        if(!map[key]) map[key] = [];
        map[key].push(string);
    }
    
    return Object.values(map)
};

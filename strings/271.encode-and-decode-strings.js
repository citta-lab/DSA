/** 
 * 
 * 271. Encode and Decode Strings
 * 
 * Design an algorithm to encode a list of strings to a string. 
 * The encoded string is then sent over the network and is decoded back to the original 
 * list of strings.
 * 
 * You are not allowed to solve the problem using any serialize methods (such as eval).
 * 
 * leetcode:https://leetcode.com/problems/encode-and-decode-strings/
 * leetcode-question:271
 * video:https://www.youtube.com/watch?v=B1k_sxOSgv8
 * BLIND: 62 (62/75)
 * 
 * Hint
 * - Time:O(n) and O(n)
 * - Encode: we need to consider handling number and special char. So we can calculate the
 * length of the word and append one # before the word will give us hint while we decode.
 * -- example: "hello","boy" will become "5#hello3#boy"
 * 
 * - Decode: we need a pointer which starts at index 0 and will check until end of encoded
 * string.
 * -- will have tempIndex = index ( so we can manupulate the index at the end)
 * -- another while loop to move "tempIndex" until we didnt find #
 * -- parsing for number, sunbstrining the word
 * -- updating the index to be tempIndex + 1 + wordLength ( this will put pointer at 3#boy)
 *  */

/** Time:O(n) and Space:O(n) */
var decode = function(s) {
    let result = [];
    let index = 0;
    
    /** example s= 5#Hello5#World */
    while(index<s.length){
        
        let idxPointer = index;                          // <-- ** IMP **
        
        /** move until we find # i.e 5#*/
        while(s[idxPointer] !== '#'){
            idxPointer += 1
        }
        
        /** we must have reached at # */
        let numSizeStr = s.substring(index, idxPointer); // not including # i.e 5 
        let numSize = parseInt(numSizeStr);              // -> *** imp ***
        
        let startOfWord = idxPointer + 1;                // at H
        let endOfWord = idxPointer + 1 + numSize;        // at o
        let word = s.substring(startOfWord, endOfWord);  // Hello
  
        result.push(word);
        
        /** move index to end of word i.e end of 5#Hello */
        index = idxPointer + 1 + numSize
    }
    
    return result   
};

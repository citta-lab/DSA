/** 1160. Find Words That Can Be Formed by Characters 
 * 
 * You are given an array of strings words and a string chars.A string is good if it can be formed by 
 * characters from chars (each character can only be used once). Return the sum of lengths of all good
 * strings in words. 
 * 
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * 
 * 
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * 
 * leetcode-question:1160
 * leetcode:https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 * 
 * Hint:
 * - Time:O(N*M) Space:O(M)
 * - Make map from chars which will keep count 
 * - Make COPY of map while checking against each WORD
 * - if we didnt find WORD char in map or char count in map is 0 then we return FALSE
 * - if its fine then we can find length of words and keep adding it to total
 * */

 var countCharacters = function(words, chars) {
    
    /** 
     step 1: create map for all chars from chars
     we will make copy of this and check against
     each word
     */
    
    let map = {};
    for(let char of chars){
        if(!map[char]) map[char] = 0;
        map[char] += 1
    }
    
    let total = 0; /** counts word length */
    for (let word of words) {
        /**we need this so we can test chars for each word*/
        let mapCopy = {...map}
        if (isWordGood(word, mapCopy)) {
            total += word.length;  
        }        
    }
    
    return total;   
};

var isWordGood = function(word, map) {
    for (let i = 0; i < word.length; i++) {
        /** if char not found and/or we find less char in map */
        if (!map[word[i]] || map[word[i]] == 0) {
            return false;
        }
        map[word[i]]--;
    }
    
    return true;
}
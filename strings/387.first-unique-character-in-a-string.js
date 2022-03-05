/** 
 * 
 * 387. First Unique Character in a String 
 * 
 * Given a string s, find the first non-repeating character in it and return its index. 
 * If it does not exist, return -1. 
 * 
 * Input: s = "leetcode"
 * Output: 0
 * 
 * Input: s = "loveleetcode"
 * Output: 2
 * 
 * Input: s = "aabb"
 * Output: -1
 * 
 * leetcode-question:387
 * leetcode:https://leetcode.com/problems/first-unique-character-in-a-string/
 * 
 * Hint:
 * - Time: O(N) and Space:(1) though we use Map as we only have 26 chars
 * - Use map to store char and it's count
 * - loop though the map for key and if the value === 1 we fetch respective index
 * from array and retuen. 
 * 
 * */

/** Time: O(N) and Space: O(1) becasue we only have 26 characters */
var firstUniqChar = function(s) {
    
    let map = new Map();
    for(let char of s){
        if(!map.has(char)) map.set(char, 0);
        let count = map.get(char) + 1;
        map.set(char, count)
    }
    
    for(let key of map.keys()){
        if(map.get(key) < 2){
            return s.indexOf(key)
        }
    }
    
    return -1;
};
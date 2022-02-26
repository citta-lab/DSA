/** 
 * 242. Valid Anagram 
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word 
 * or phrase, typically using all the original letters exactly once. 
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * leetcode-question:242
 * leetcode:https://leetcode.com/problems/valid-anagram/
 * BLIND: 56 (56/75)
 * 
 * Hint:
 * - Bruteforce:- Time: O(nlogn) sorting S and T then compare 
 * - Optimized:- Time: O(n) map to count S, then to decrement for T, then to run check 
 * if map has any value other than 0.
 * */

 var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    let charMap = {};
    for(let char of s.split('')){
        if(!charMap[char]) charMap[char] = 0;
        charMap[char] ++
    }
    
    console.log(charMap); // { a: 3, n: 1, g: 1, r: 1, m: 1 }
    
    for(let char of t.split('')){
        if(!charMap[char]) return false;
        charMap[char] --
    }
    
    console.log(charMap); // { a: 0, n: 0, g: 0, r: 0, m: 0 }
    
    for(let char in charMap){
        if(charMap[char] !== 0) return false;
    }
    
    return true
};


/** OPTION 2 */
var isAnagram = function(s, t) {
    let str = s.split('');
    let ttr = t.split('');
    
    str.sort();
    ttr.sort();
    
    let sortedStr = str.join('');
    let sortedTtr = ttr.join('');
    
    return sortedStr === sortedTtr
};
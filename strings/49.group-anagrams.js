/** 

   49. Group Anagrams. 

   Given an array of strings strs, group the anagrams together. You can return the answer in any order. 
   An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
   typically using all the original letters exactly once.
   
   Input: strs = ["eat","tea","tan","ate","nat","bat"]
   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
   
   leetcode-question:49
   leetcode:https://leetcode.com/problems/group-anagrams/
   video:https://www.youtube.com/watch?v=vzdNOK2oB2E
   
   BLIND: 13 (13/75)
   
   Hint:
   - option 1: anagram word will match when it is sorted (i.e eat and tea will be aet)
   - option 2: anagram word will have exact same char count 
   
   */

   /** Second solution is OPTIMAL */

   /** 
      NOT OPTIMAL: 
        time : O(NMlogM) where N number of strings, M is length of each string, LogM from sort 
        space: O(NM)
    */
var groupAnagrams = function(strs) {
    
    /** anagram is something which will have same chars. example: we can make 'tea' from 'eat' also
    unique thing about this is they will have exact number of chars and by SORTING it will look the 
    same. i.e eat --> (after sorting) -> aet. tea --> (after sorting) -> aet. */
    
    /** map to hold the sorted key and respective string */
    let map = {};
    
    for(let i=0; i<strs.length; i++){
        
        let str = strs[i];
        
        /** sort by converting to array and convert it back to string */
        let charArr = str.split('').sort();
        let charStr = charArr.join('');
        
        /** build sorted key and respective string match */
        if(!map[charStr]) map[charStr] = [];
        map[charStr].push(str)   
    }
    
    /** building result array from map */
    let result = [];
    for(let key in map){
        result.push(map[key])
    }
    
    return result;
};

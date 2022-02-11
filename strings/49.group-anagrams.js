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



/** OPTIMAL */ 

/** time: O(N*M*26) where N is number of strings, M is size of each string, 26 is const from alphabets
    space: O(N*M)
*/ 
var groupAnagrams = function(strs) {
    
    /** key feature of anagram is it will have EXACT number of char count when compared in order
    i.e eat -> 1e 1a 1t
        tea -> 1t 1e 1a 
        If we somehow hold them in order it will be 1a 1e 1t which can be our key
    */ 
    
    /** map char count with combination of string */
    let result = {}  /** like  {'1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0': [ 'eat', 'tea', 'ate' ] } */
    
    for(let str of strs){
        
        /** imp : each 0 for 26 alphabets */
        let count = new Array(26).fill(0);
        
        for(let char of str){
            
            /** imp : now we need to map char to exact alphabet position in count */
            let charASCII = char.charCodeAt(0);  // find ascii of a char 
            let position = charASCII - 'a'.charCodeAt(0); // find char position with respect to a
            
            count[position] += 1;
        }
        
        /** make key and value pairs */
        if(!result[count]) result[count] = [];
        result[count].push(str)
    }
    
    /** return as array of arrays */
    let ret = [];
    for(let key in result){
        ret.push(result[key])
    }
    
    return ret
};

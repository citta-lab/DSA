/** 

  139. Word Break
  
  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. 
  Note that the same word in the dictionary may be reused multiple times in the segmentation.
  
  Input: s = "leetcode", wordDict = ["leet","code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".
  
  Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  Output: false
  
  leetcode-question:139
  leetcode:https://leetcode.com/problems/word-break/
  
  BLIND: 35 (35/75)
  
  Hint
  - can be solved in recursion (dfs) with memo
  - memo = [] gives time limit but if we use map it will be fine.
  - memo = new Map(). then use memo.set(key, value) for setting and memo.has(key) checking, memo.get(key)
  - time: O(n) recursion * O(n) for loop * O(n) substring method
  - can also be solved using DP which will also result in O(n^3) time
  
  */

/** time: O(n^3) where O(n) for recursion, O(n) for forloop, O(n) for substring 
    space: O(n) where is longest string */
var wordBreak = function(s, wordDict) {
    let memo = new Map();
    
    let result = helper(s, wordDict, 0, memo);
    if(result) return true;
    return false
};

function helper(s, wordDict, start, memo){
    
    if(start === s.length){
        return true
    }
    
    if(memo.has(start)) return memo.get(start);
    
    /** we will create substring and check if it is present in wordDict*/
    let end = start + 1;
    
    while(end <= s.length){
        
        let subString = s.substring(start, end);
        
        /** if substring exists in wordDict then only we will call recursively */
        if(wordDict.includes(subString)){
            let result = helper(s, wordDict, end, memo);
            if(result) {
                memo.set(start, result)
                return result;
            }
        }
        
        end ++ // <-- end ++ 
    }
    
    memo.set(start, false);
    return false;
}
  
  

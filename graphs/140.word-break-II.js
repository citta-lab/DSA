/** 
 * 140. Word Break II 
 * 
 * Given a string s and a dictionary of strings wordDict, add spaces in s to construct
 * a sentence where each word is a valid dictionary word. Return all such possible 
 * sentences in any order. Note that the same word in the dictionary may be reused 
 * multiple times in the segmentation.
 * 
 * Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * Output: ["cats and dog","cat sand dog"]
 * 
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: []
 * 
 * leetcode-question:140
 * leetcode:https://leetcode.com/problems/word-break-ii/
 * video:
 * 
 * SIMILAR : https://github.com/citta-lab/DSA/blob/main/graphs/139.word-break.js 
 * here we return true/false vs result array.
 * 
 * Hint/Flow:
 * - Time: O(n^3) where O(n) for recursion, O(n) for loop, O(n) for substring where
 * n is length of s string
 * - call helper method with memo and start index as 0
 * - based condition : if we reach end of the string then we return i.e start === s.len
 * - based condition : should append "" to indicate end of sentence and return result
 * - we will do TWO POINTER with end = start + 1
 * - will keep incrementing end until we reach end of s i.e wile(end >= s.length)
 * - will get substring i.e subString = s.substring(start, end) and see if we have match
 * - if matched we hold subString, but then apply dfs on rest of them.
 * - next we build result by making combination with subString and all word returned from
 * previous DFS (array)
 * 
 */

/** time: O(n^3) and space: O(n) */
var wordBreak = function(s, wordDict) {
    let memo = new Map();
    return DFS(s, wordDict, 0, memo);
};

function DFS(s, wordDict, start, memo){
    
    if(memo.get(start)){
        return memo.get(start)
    }
    
    let result = [];
    if(s.length === start){
        /** indicating we reached end, in another word brek problem it would be just true */
        result.push("");
        return result;
    }
    
    let end = start + 1;
    while(end <= s.length){
        
        /** will use this if we find this in the wordDict while forming result */
        let subStringWord = s.substring(start, end);
        
        if(wordDict.includes(subStringWord)){
            
            /** this will result array of words and/or "" */
            let subResult = DFS(s, wordDict, end, memo);
            
            for(let item of subResult){
                /** 
                 * determining if we have item as "cat" then we need to add space
                 * like " " so sentence becomes like "cat dog hi". If item is empty
                 * (i.e "") indicates that we reached end of matching so treat it as
                 * seperate sentence.
                 */
                let endOfWordOrSentence = item === "" ? "" : " ";
                let finalResult = subStringWord + endOfWordOrSentence + item;
                result.push(finalResult);
            }
        }
    
        end++
    }
    
    memo.set(start, result);

    /** imp that we are returning array */
    return result;
    
}
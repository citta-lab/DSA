/** 
 * 
 * A transformation sequence from word beginWord to word endWord using a 
 * dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 * 1. Every adjacent pair of words differs by a single letter. 
 * 2. Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
 * 3. sk == endWord 
 * Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in
 * the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
 * 
 * Example: 
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"] 
 * Output: 5
 * Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
 * 
 * 
 * leetcode: https://leetcode.com/problems/word-ladder/
 * Company: google 
 */

/** 
 Time: O(M^2 * N) where M is length of each word in the inputList and N is number of words in inputList. 
 Space: O(M^2 * N) where we will have to store all N word combinations by doing M^2 combination. 
 Keep in mind BFS and Visited set will cost O(M*N) 
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    /** Step 1: if we dont have endWord in wordList then no point searching */
    if(!wordList.includes(endWord)) return 0;
    
    
    /** Step 2: 
    Build edges for graph so that we can use this to match pattern between beginWord and word 
    in the wordList.
    
    Intution: Imagine we start from beginWord i.e hit then we can make 26 different combinations for 
    each char in hit. i.e replacing h from a...z and keeping 'it' same. Next repalcing i from a...z by keeping
    h_t same. At last replacing t with a...z keeping `hi_` same. Then we need to look up in wordList to build 
    collections for graph. 
    
    Our appraoch is similar but less computational. Instead of starting with beginWord. We look into wordList,
    find the combinations using a pattern instead of doing a...z. so it would look like { pattern : [ word1,     word2, word3]}. i.e for the first word hot from wordList we can create below 3 patterns and word
    { 
       '*ot': [hot, dot, lot],
       'h*t': [hot],
       'ho*':[hot]
    }
    similarly for next words and so on. We use this to in as edges graph to build graph. 
    */
    
    let collections = {};
    
    /** time: O(M^2*N) and space: O(M^2*N) */
    wordList.forEach((word) => {
        let len = word.length;
        for(let i=0; i<len; i++){
            let wordPattern = word.substring(0, i)+'*'+word.substring(i+1);
            
            /** hence we need { name : [] } we default to empty array if its first time */
            if(!collections[wordPattern]){
                collections[wordPattern] = [];
            }
            
            collections[wordPattern].push(word);
        }
    })
    
    /** Step 3: Apply BFS to find shortest path */
    let queue = [beginWord];
    let level = 1;
    
    // helps to not vistit the node and will hold space: O(M*N) combinations 
    let visited = new Set();
    
    while(queue.length){
        // level order BFS costs O(M*N) stacks
        let size = queue.length;
        for(let i=0; i<size; i++){
            
            let word = queue.shift();
            
            // if we found the match then return the level and it would be shortest path 
            if(word === endWord){
                return level;
            }
            
            /** Step 3.1: now we have word 'hit', we need to build the pattern similar to the one we did for collections and then see if the build pattern exists in the collections */
            let len = word.length;
            for(let i=0; i<len; i++){
                
                let wordPattern = word.substring(0, i)+'*'+word.substring(i+1);
                
                /** Step 3.2 find if we have this in collections or default to empty array so 3.3 doesnt break */
                let neibhours = collections[wordPattern] || [];
                /** Step 3.3 now we have list of words, so we need to add them to queue only if its not visted */
                for(let neibhour of neibhours){
                    if(!visited.has(neibhour)){
                        queue.push(neibhour);
                        visited.add(neibhour);
                    }
                }
            }
        }
        
        /** Step 4: increment after level order forloop */
        level++;
    }
    
    return 0;
};

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord, endWord, wordList)); // 5

beginWord = "hit";
endWord = "cog";
wordList = ["hot","dot","dog","lot","log"]
console.log(ladderLength(beginWord, endWord, wordList)); // 0


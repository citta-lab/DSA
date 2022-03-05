/** 
 * 
 * 819. Most Common Word  
 * 
 * Given a string paragraph and a string array of the banned words banned, return the most 
 * frequent word that is not banned. It is guaranteed there is at least one word that is 
 * not banned, and that the answer is unique. The words in paragraph are case-insensitive
 *  and the answer should be returned in lowercase. 
 * 
 * Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", 
 * banned = ["hit"]
 * Output: "ball"
 * 
 * Input: paragraph = "a.", banned = []
 * Output: "a" 
 * 
 * leetcode-question:819
 * leetcode:https://leetcode.com/problems/most-common-word/
 * 
 * Hint:
 * - Time: O(N+M) as we look all words in N and check banned M words. Space: O(N)
 * - clean the special chars and lower it paragraph.replaceAll(/[^A-Za-z0-9]/gi, " ").toLowerCase();
 * - split and go through each word which are not included in banned array
 * - do next loop on countWord map and update maxCount and maxCountWord when count > maxCount
 * - return maxCountWord
 * 
 * */

 /** Time: O(N+M) and Space: O(N) */
 var mostCommonWord = function(paragraph, banned) {
    
    let str = paragraph.replaceAll(/[^A-Za-z0-9]/gi, " ").toLowerCase();
    
    console.log(str)
    
    let wordCount = {};
    let strArr = str.split(' ');
    
    for(let word of strArr){
        if(!banned.includes(word)){
            if(!wordCount[word]) wordCount[word] = 0;
            wordCount[word] += 1
        }
    }
    
    let maxCount = -Infinity;
    let maxCountWord = '';
    
    for(let word in wordCount){
        
        /** making sure we dont have empty " " keys. 
        In example "Bob. hIt, baLl" 
        we will get " " : 2 */
        
        if(!word.trim().length){
            continue;
        }
        
        if(wordCount[word] > maxCount){
            maxCount = wordCount[word];
            maxCountWord = word;
        }
    }
    
    return maxCountWord;
};
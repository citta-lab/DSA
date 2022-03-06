/** 937. Reorder Data in Log Files 
 * You are given an array of logs.Each log is a space-delimited string of words, 
 * where the first word is the identifier. 
 * 
 * Reorder these logs so that:
 * - The letter-logs come before all digit-logs.
 * - The letter-logs are sorted lexicographically by their contents. 
 * If their contents are the same, then sort them lexicographically by their identifiers.
 * - The digit-logs maintain their relative ordering.
 * 
 * Return the final order of the logs.
 * 
 * Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
 * Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 * 
 * Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 * 
 * leetcode-question:937
 * leetcode:https://leetcode.com/problems/reorder-data-in-log-files/
 * video: https://www.youtube.com/watch?v=Nj2Bpw1KKds
 * 
 * Hint:
 * - use Two arrays to seperate digits logs and letter logs.
 * - end result is focused on letter logs and we append digits logs to it
 * - split each log by " " and start focusing on elements from index 1 to seperate
 * letterLogs vs digitLogs
 * - now focus on letterLogs and first index values to sort 
 * */

/** time: O(M*N logN) where N logN from sorting & comparing will take upto O(M) as M is
maximum length of a single log. Space: O(M log N) */
var reorderLogFiles = function(logs) {
    /** 
      Main 4 conditions to consider while comparing
      1. letter logs always comes BEFORE digits logs. 
      i.e ["let2 art can", "let10 1 2 "]. let2 and let10 are ignored
      
      2. letter logs are sorted LEXICOGRAPHICALLY not including the id.
      i.e ["let10 art can", "let2 baba con"]. let10 and let2 are ignored
      
      3. when letter logs are identical, then sort them by id.
      i.e ["let2 art can", "let10 art can"]. let2 comes before let10
      
      4. digit logs should remain in same order
      */
    
     let digitLogs = [];
     let letterLogs = [];
    
     for(let log of logs){
         let logArr = log.split(' '); /** splits everything */
         
         /** focus on index ONE value to determine if it's a digit or letters */
         if (isNaN(logArr[1])) {
             letterLogs.push([logArr[0], logArr.slice(1).join(' ')]); 
         }else{
             digitLogs.push(log);
         }
     }
    
    /** compare and sort them lexicographically */
    letterLogs.sort((a,b) => {                                  
        if(a[1] === b[1]){                                      /** if letters are same, then we compare by log index */
            return a[0].localeCompare(b[0]);                    /** returns 1 if b[0] comes before a[0] */
        }
        
        return a[1].localeCompare(b[1]);
    });
    
    return letterLogs.map(l => l.join(" ")).concat(digitLogs); /** puts all digits logs at the end */
};
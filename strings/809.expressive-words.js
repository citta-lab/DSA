/** 

809. Expressive Words 

Sometimes people repeat letters to represent extra feeling. 
For example: 
"hello" -> "heeellooo" 
"hi" -> "hiiii" 

In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo". 
You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal
to s by any number of applications of the following extension operation: choose a group consisting of characters c, 
and add some number of characters c to the group so that the size of the group is three or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", 
but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do 
another extension like "ll" -> "lllll" to get "helllllooo". 
If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension
operations: query = "hello" -> "hellooo" -> "helllllooo" = s.

Return the number of query strings that are stretchy.

Input: s = "heeellooo", words = ["hello", "hi", "helo"]
Output: 1

Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
Output: 3

Input: s = "aaa", words = ["aaaa"]
Output: 0

leetcode-question:809
leetcode:https://leetcode.com/problems/expressive-words/

*/

var expressiveWords = function(s, words) {
    
    /**
      we need to pick a word from words and start sterching the character
      in the word to make a combination which will be equal to s. 
      
      The main condition here is any character we touch it will need to 
      be streched at least 3 times 
      (ex: word 'helo' cannot be matched to 'heeellooo' because we can 
      strech e in helo 3 times to make it heeelo and o 3 times to make 
      it heeelooo. However if we tocuh l then we need to strech ATLEAST
      3 times it will result in heeelllooo which is not same as s string
      heeellooo)
      
    */
    
    if(!s || words.length < 1) return 0;
    
    let queryWordCount = 0;
    for(let word of words){
        let result = isStrechy(s, word);
        if(result) queryWordCount += 1;
    }
      
    return queryWordCount;
};

function isStrechy(s, word) {
    
    if(!word) return false;
    
    let sIndex = 0;
    let wIndex = 0;
    
    while(sIndex < s.length && wIndex < word.length){
        let sChar = s[sIndex];
        let wChar = word[wIndex];
        
        if(sChar != wChar){
            return false;
        }
        
        /** if we are here then sChar should be same as wChar */
        let sCharLength = getRepeatedCharLength(s, sIndex);
        let wCharLength = getRepeatedCharLength(word, wIndex);
        
        // console.log('sCharLength : '+sCharLength);
        // console.log('wCharLength : '+wCharLength);
        
        /** 
        if our string 's' char and word 'w' char length are not same i.e 'hh' != 'h'
        and 'hh' count is less than 3 then we cant repeat 'h' from word to atleast 3 times
        so we fail 
        */
        if(sCharLength < 3 && sCharLength !== wCharLength){
            return false;
        }
        
        /** 
          this is edge case really, if we know we have more repeated char
          in word 'w' than given string 's' then it will not be a match
        */
        if(sCharLength < wCharLength){
            return false;
        }
        
        sIndex += sCharLength;
        wIndex += wCharLength;
    }
    
    return sIndex === s.length && wIndex === word.length; 
}
    
/** sliding window for counting repeated chars. 
Ex: 'hhhh' we get 4 and if s is 'he' then we get 1 */    

function getRepeatedCharLength (s, index) {
    let left = index;
    let right = index;
    
    while(right < s.length && s[left] === s[right]){
        right ++;
    }
    
    /** 
     if s='he' and we want to know if e's repeated count then we need to subtract
     h's index position i.e 2-1 = 1 as right will increment upto s size.
    */
    return right - left;
}


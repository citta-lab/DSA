/** 
 * 
 * Implement strStr() or Implement indexOf()  Implement strStr(). 
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string.
 * This is consistent to C's strstr() and Java's indexOf().
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Input: haystack = "", needle = ""
 * Output: 0
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * Input: haystack = "mississippi" needle = "mississippi"
 *  Output: 0
 * 
 * leetcode-question:28
 * leetcode:https://leetcode.com/problems/implement-strstr/
 * video:https://www.youtube.com/watch?v=Gjkhm1gYIMw
 * 
 * */

 /** Time: O(n * m) where n is size of stack and m is size of needle */
 var strStr = function(haystack, needle) {
    
    /** if we have empty needle then we cant compare */
    if(!needle) {
        return 0;
    }
    
    /** 
    
    The idea here is to only compare elements of needle length in haystack. 
    Example: in 'hello' stack and 'll' needle. we will only need to of 
    needle size lengths. I.e once we come to 'o' in
    hello we cant compare as needle has 2 size and 'o' has only one.
    
    we could use haystack.length but it will time limit exception 
    as we might keep checking even if we dont have min required needle length
    
    let len = haystack.length ( TIME LIMIT )
    
    */
    let len = haystack.length +1 - needle.length ;
    
    for(let i=0; i<len; i++){
        for(let j=0; j<needle.length; j++){
  
            /** j will increment and will let us compare all haystack 
             * char with needle */
            if(haystack[i+j] !== needle[j]){
                break;
            }
            
            if(j === needle.length-1){
                return i;
            }
        }
    }
    
    return -1
};

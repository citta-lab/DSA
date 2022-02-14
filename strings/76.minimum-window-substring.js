/** 
 * 
 * 76. Minimum Window Substring 
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum 
 * window substring of s such that every character in t (including duplicates) is 
 * included in the window. If there is no such substring, return the empty string "". 
 * 
 * The testcases will be generated such that the answer is unique. A substring is a 
 * contiguous sequence of characters within the string. 
 * 
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * 
 * Input: s = "a", t = "a"
 * Output: "a"
 * 
 * leetcode:
 * leetcode-question:76
 * video:https://www.youtube.com/watch?v=jSto0O4AJbM
 * 
 * BLIND: 22 (22/75)
 * 
 * Hint:
 * - Sliding window 
 * - Need two hash maps 
 * - need to shrink left after finding the substring containing second strings all char
 * 
 * */

/** time: O(N) */
var minWindow = function(s, t) {
    
    /** Overview :
    - Bruteforce: 
    - we can solve this problem using two hash maps. One for 
    keeping count of t's chars in `S` called window and another
    for keeping count of chars in `t`. However we will need to
    check the WINDOW hash every time we update/move pointers. 
    
    - Optiomal ( Two Pointers and Hash Maps) :
    - we will have sliding window starts at start (left, right).
    - we will initialize two hashes 'WINDOW' for keeping track of t's chars in
    given s string. Second one `CountT` which will be initialized with all t's
    char's and it's count. 
    - we will have two counter checks "HAVE" and "NEED" where HAVE represents
    t's char counts in sliding window (s's substring). "NEED" will represents 
    t's char count. 
    
    
    /** base check */
    if(t === '' || t.length === 0) return '';
    
    let countT = {};      /** holds t's char count and will not change */
    let countWindow = {}; /** holds s's count for all t's char using sliding window */
    
    /** fill countT with char:count */
    for(let char of t) {
        if(!countT[char]) countT[char] = 0;
        countT[char] = countT[char]  + 1;
    }
    
    /** two variables to compare if substring we found has all the char's we
    suppose to find to match t. Hence need will hold the size of t*/
    
    let have = 0;                      /** default we have 0 for substring */
    let need = Object.keys(countT).length; /** we need these many count */
    
    /** SLIDING WINDOW */
    
    let left = 0;
    let right = 0;
    
    let resPointers = [-1, -1]; /** holds left and right pointers of substring*/
    let resLength = Infinity; /** default size of substring */
    
    while(right < s.length){
        
        let char = s[right];
        
        /** initializing and counting each char of s */
        if(!countWindow[char]) countWindow[char] = 0;
        countWindow[char] += 1;
        
        /** if current char is present in t ( avoids checking other chars ) */
        if(t.includes(char)){
             
            /** if we match then we update HAVE which reflects 
            we are getting closer to NEED */
            
            if(countWindow[char] === countT[char]){
                have += 1;
            }
        }
        
        /** when we match "have" from substring to "need" we calculate the
        current substring length && start shrinking to find the next smallest
        substring by moving left pointer */
        
        while(have === need){
            
            /** check if we found smallest substring */
            if(right-left+1 < resLength){
                resPointers = [left, right];
                resLength = right - left + 1;
            }
            
            /** now we need to check if we can find another substring by
            shrinking the window (i.e by moving left inside). when we do
            we also need to make sure to update "have" only if the char
            count in "have" becomes less than "need" */
            
            countWindow[s[left]] -= 1;
            
            if(countT[s[left]] && countWindow[s[left]] < countT[s[left]]){
                have -= 1;
            }
            
            left ++ 
        }
        
        right++
    }
    
    
    let [l, r] = resPointers;
    
    return resLength != "Infinity"  
    ? s.substring(l, r+1) 
    : ""

};
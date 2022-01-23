/** 767. Reorganize String 
 * 
 * Given a string s, rearrange the characters of s so that any two adjacent characters
 * are not the same. Return any possible rearrangement of s or return "" if not possible.
 * 
 * Input: s = "aab"
 * Output: "aba"
 * 
 * 
 * Input: s = "aaabc"
 * Output: "abaca"
 * 
 * leetcode-question:767
 * leetcode:https://leetcode.com/problems/reorganize-string/
 * video( using heap ): https://www.youtube.com/watch?v=2g_b1aYTHeg
 * 
 * */

 var reorganizeString = function(s) {
    
    let dict = {};
    
    /** example: s = 'aaabc' result should be 'abaca' */
    
    /** step 1: react dict to know count of each char */
    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(!dict[char]) dict[char] = 0;
        dict[char] += 1;
    }
    
    console.log(dict); // { a: 3, b: 1, c: 1 }
  
    
    /** step 2: sort by value ( char with more count at top ) */
    let sortedEntries = Object.entries(dict)
    .sort((a,b) => b[1] - a[1]);
    
    console.log(sortedEntries);  // [ [ 'a', 3 ], [ 'b', 2 ], [ 'c', 1 ] ]
    
    /** step 3: prepare for building result */
    let resultArr = new Array(s.length);
    let index = 0;
    
    /** step 4: loop though the sorted array so we pluck the high count char*/
    for(let i=0; i<sortedEntries.length; i++){
        const [char, count] = sortedEntries[i];
        
        /** step 5: base condition for early return */
        if(count > (s.length + 1) / 2 ) return '';
        
        /** step 6: lets add all the char from top count but we need to space it
        out such that we dont add like 'aab...'. */
        
        for(let j=0; j<count; j++){
            
            if(index >= s.length) index = 1; // <-- 1st postion can be filled this way
            
            resultArr[index] = char;
            index += 2; // <-- it will jump alternative space
        }
        
    }
    
    return resultArr.join('')
    
};

console.log(reorganizeString("aaabc")); //abaca
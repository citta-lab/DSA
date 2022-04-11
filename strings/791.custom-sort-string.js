/**
 *
 * 791. Custom Sort String
 * 
 * You are given two strings order and s. All the words of order are unique and were sorted 
 * in some custom order previously. Permute the characters of s so that they match the order 
 * that order was sorted. More specifically, if a character x occurs before a character y in order, 
 * then x should occur before y in the permuted string. Return any permutation of s that satisfies this property.
 * 
 * Input: order = "cba", s = "abcd"
 * Output: "cbad"
 * 
 * Input: order = "cba", s = "abcccccd"
 * Output: "cccccbad"
 *
 * leetcode-question:791
 * leetcode:https://leetcode.com/problems/custom-sort-string/
 * 
 * Hint:
 * - Bruteforce: Time:O(N*M) ( cehck second solution )
 * - Time:O(N) and Space:O(N)
 * - Consider how can we handle chars not present in ORDER string
 * - Consider handling REPEATED chars in S. Which needs to be in same order in the result.
 * - Using Map we can count Char and it's occurance for S string.
 * -- this helps in handling when chars are repeated 
 * -- helps in adding extra chars found in S to result 
 * - Loop throug ORDER string and find matching char in S string, then check if we need to repeat 
 * the chars while addign it to result
 * - last check if map has any remaining char from S strig. If yes add it to result
 *
 * Follow up Questions:
 * - Follow up 1: If the custom order S is too large, how to solve it efficiently?
 * - Follow up 2: If the string T is too large, how to solve it efficiently?
 */

var customSortString = function(order, s) {
    
    /**
      - S char needs to be arranged in Order manner
      - Handle duplicates in S. ex: 'dcccba' then all 'ccc' needs to be pushed at same order
      */
    
    /** Step 1: count char:occurance of s which helps in handling repeated */
    let sMap = new Map();
    for(let char of s){
        if(!sMap.has(char)) sMap.set(char, 0);
        sMap.set(char, sMap.get(char) + 1)
    }
    
    console.log(sMap); // Map(4) { 'a' => 1, 'b' => 1, 'c' => 1, 'd' => 1 }
    
    /** Step 2: find the sMap chars in order and maintain the ordering */
    let result = '';
    for(let char of order){
        if(sMap.has(char)){
            /** handles situation when we have same char multiple times in s */
            result += char.repeat(sMap.get(char));
            /** delete from our reference sMap */
            sMap.delete(char)
        }
    }
    
     console.log(sMap); // remaining from S i.e Map(1) { 'd' => 1 }
     console.log(result);   // cba
    
    /** Step 3: handle remaining char in S */
    for(let [char, count] of sMap){
        result += char.repeat(count)
    }
    
    console.log(result); // cbad
    return result
};


/** Time: O(N*M) where N is size of Order and M is size of S */
var customSortString = function(order, s) {
    
    let map ={};
    
    /** holds char doesnt match in order */
    let buffer = '';

    for(let char of s){
        if(order.includes(char)){
            let idx = order.indexOf(char);
            if(!map[idx]) map[idx] = ''
            map[idx] = map[idx]+char /** so we hold all chars belongs to that index */
        }else{
            buffer += char           /** char didnt matched in order */
        }
    }    
    
    console.log(map);
    console.log(buffer)
    
    return Object.values(map).join('')+buffer
};

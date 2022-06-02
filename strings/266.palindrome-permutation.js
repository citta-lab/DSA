/**
 * 266. Palindrome Permutation
 * 
 * Given a string s, return true if a permutation of the string could form a palindrome.
 * 
 * Input: s = "code"
 * Output: false
 * 
 * Input: s = "aab"
 * Output: true
 * 
 * Input: s = "carerac"
 * Output: true
 * 
 * Input: s = "racecar"
 * Output: true
 * 
 * leetcode-question:266
 * leetcode:https://leetcode.com/problems/palindrome-permutation/solution/
 * 
 * Hint:
 * UsingHashMap: Time:O(N) and Space:O(N)
 * - keep count of each char in a map
 * - we will count odd number of OCCURANCE in a given string 
 * - map and count all chars. increment counter when odd, decrement
when even. Finally. if counter <= 1 then we are good
 * 
 * Example: "racecar"
 * map = { r: 2, a: 2, c: 2, e: 1 }
 * count: 0,0,0,1
 * 
 * Example: "aab"
 * map = { a: 2, b: 1 }
 * count: 0,1
 * 
 */

/** Time:O(N) and space:O(1) as it would be 128 char */
var canPermutePalindrome = function(s) {
    
    /** 
      we have two scenario when we have odd length, even length 
      - 'carerac' here c=2,a=2,r=2,e=1 ( answer : true )
      - 'aaaa' here a=4                ( answer : true )
      - 'code' here c=1,o=1,d=1,e=1.   ( answer : false )
      */
    
    let map = new Map();
    let count = 0;
    
    for(let char of s){
        
        /** step 1: if char not found lets add */
        if(!map.has(char)) map.set(char, 0);
        map.set(char, map.get(char)+1);
        
        /** step 2: if char count is even then reduce count
        i.e we have pair, so can be palindrome */
        let mapCount = map.get(char);
        if(mapCount % 2 === 0){
            count --
        } else {
            count ++
        }
    }
    
    /** step 3: if we find count 1 or 0 or less than 0 then it is Palindrome.
    if count is more than 1 like in 'code' then it is not */
    return count <= 1
};



/***************************************************
 * 
 * Same as above, but TWO steps
 * 
 **************************************************/
 var canPermutePalindrome = function(s) {
    let map = {}
    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(!map[char]) map[char] = 0;
        map[char] += 1
    }
    
    console.log(map); //{ c: 1, o: 1, d: 1, e: 1 }

    let count = 0;
    for(let key in map){
        count += map[key] % 2;
        console.log(count); // 1,2,3,4
    }
    
    return count <= 1;
};
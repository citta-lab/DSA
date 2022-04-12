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

/** running exaple of 'code' */
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
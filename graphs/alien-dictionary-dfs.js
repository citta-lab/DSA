/**  
 * There is a new alien language that uses the English alphabet. 
 * However, the order among the letters is unknown to you.You are given a list of strings words from the alien language's dictionary, 
 * where the strings in words are sorted lexicographically by the rules of this new language.
 * 
 * Input: words = ["wrt","wrf","er","ett","rftt"]
 * Output: "wertf"
 * 
 * Input: words = ["ab","adc"]
 * Output: "abcd"
 * 
 * leetcode-question:269
 * leetcode:https://leetcode.com/problems/alien-dictionary/
 * video: https://www.youtube.com/watch?v=6kTZYvNNyps 
 * 
 * Hint: Toposort with POSTORDER dfs
 * 
 * */

/**
 * @param {string[]} words
 * @return {string}
 */
 var alienOrder = function(words) {
    
    let list = {};
    
    for(let word of words){
        for(let char of word){
            if(!list[char]){
                list[char] = [];
            }
        }
    }
    
    /** pick two words from array of words to compare */
    for(let i=0; i<words.length-1; i++){
        let wordOne = words[i];
        let wordTwo = words[i+1];
        
        /** STEP 1: Need to be in lexical order i.e wordOne length should be less than wordTwo.
        i.e (a, ab, abc is good order ). If it is not in lexical order (i.e abc, ab ) and if 
        minSized substrings are equal i.e in abc, ab it is not lexical and min size is 2 will
        result ab from abc which is equal to second word ab. Then we reached FAILURE. */
        
        let minSize = Math.min(wordOne.length, wordTwo.length);
        
        let boundrySize = wordOne.length > wordTwo.length;
        let sameSubString = wordOne.substring(0, minSize) === wordTwo.substring(0, minSize); 
        if( boundrySize && sameSubString ) {
            return "";
        };
        
        /** STEP 2: Build adjacency list for graph */
        for(let j=0; j<minSize; j++){
            if(wordOne[j] !== wordTwo[j]){
                list[wordOne[j]].push(wordTwo[j]);
                break; /** skip comparing next char in same word. i.e in abc & adf we will reach b != d then we push { b: [d] } and break out */
            }
        }
    }
    
    console.log(list); /** important to see this */
    
    /** if visited then we dont process */
    let visited = new Set(); 
    /** if node is visited and in same path, then we are in cycle */
    let hasCycle = new Set();
    
    let reverseArray = [];
    
    let dfs = (char) => {
        
        /** if cycle then we return we are at the failure */
        if(hasCycle.has(char)){
            return true;
        }
        
        if(visited.has(char)){
            return false;
        }
        
        hasCycle.add(char);
        
        let children = list[char];
        for(let child of children){
            let result = dfs(child);
            if(result) return true; /** if cycle then we return we are at the failure */
        }
        
        hasCycle.delete(char);
        visited.add(char); 
        
        reverseArray.push(char);
        return false;
    }
    
    for(let char in list){
        let result = dfs(char);
        /** if cycle then we return we are at the failure */
        if(result) return "";
    }

    let output = reverseArray.reverse();
    return output.join('')
};         

console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); //wertf
console.log(alienOrder(["z","x"])); //zx
console.log(alienOrder(["z","x","z"])); //null
console.log(alienOrder(["ab","adc"])); //cbda

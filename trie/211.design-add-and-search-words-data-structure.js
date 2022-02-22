/** 
 * 
 * 211. Design Add and Search Words Data Structure
 * 
 * Word Search with '.' and/or '*' pattern 
 * 
 * Design a data structure that supports adding new 
 * words and finding if a string matches any previously added string.
 * 
 * Implement the WordDictionary class:
 * - WordDictionary() Initializes the object.
 * - void addWord(word) Adds word to the data structure, it can be matched later.
 * - bool search(word) Returns true if there is any string in the data structure that matches 
 * word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 * 
 * Input : ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
           [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
*  Output: [null,null,null,null,false,true,true,true]
 * 
 * 
 * leetcode-question:211
 * leetcode:https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * video:https://www.youtube.com/watch?v=BTf05gs_8iU
 * BLIND: 47 (47/75)
 * 
 * Hint:
 * - Implement TrieNode with property this.children = {} and this.endOfWord = false;
 * - Implement Trie class with addWord similar to basic Trie insert method
 * - Implement Search with TWO steps as we need to consider finding '.' pattern word
 * -- use DFS, which is called by search with word, node, startIndex. return from DFS when true.
 * -- DFS will be subdided to handle word with '.' and/or normal word like 'abc'.
 * -- loop though each char from word using classic for loop ( need index ) where i=startIndex.
 * -- we will have two If's. First if for handling when char === '.' and second if when char !== '.'
 * which is normal trie search. 
 */

/** Time: O(M) for well defined words without dots. Where M is key length and N is number of words. 
    Time:O(N*26^m) for '...words' where M represents ...
    Space: O(1) for well defined words. O(M) for undefined '...' words */
/** TrieNode for inserting char as nodes */
class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}

/** Trie Implementation */
var WordDictionary = function() {
    this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(let char of word.split('')){
        if(!node.children[char]){
            node.children[char] = new TrieNode();
        }
        
        node = node.children[char];
    }
    
    node.endOfWord = true;
};

/** hence we are handling wildcard like '.' in search we will do
dfs on each child node of root i.e 26 char's node using DFS and then
backtracking to keep looking for match */

WordDictionary.prototype.search = function(word) {
    let node = this.root;
    let result = DFS(word, 0, node);
    if(result) return true;
    return false
};

function DFS(word, startIdx, node){
    
    if(!word.length) return false;
    
    for(let i=startIdx; i<word.length; i++){
        let char = word[i];
        
        if(char === '.'){
            
            /** 
            Object.values(node.children) will return 
            all TrieNodes for a..z char child 
            */
            for(let child of Object.values(node.children)){
                let result = DFS(word, i+1, child);
                if(result) return true;
            }
            
            return false;
        }
        
        /** normal Trie search for non '.' chars */
        if(char !== '.') {
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }
    }
    
    return node.endOfWord;
}

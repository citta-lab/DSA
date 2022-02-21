/** 
 * 
 * 208. Implement Trie (Prefix Tree)   
 * 
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently 
 * store and retrieve keys in a dataset of strings. 
 * There are various applications of this data structure, such as autocomplete and spellchecker.
 * 
 * leetcode-question:208
 * leetcode:https://leetcode.com/problems/implement-trie-prefix-tree/
 * video:https://www.youtube.com/watch?v=oobqoCJlHA0
 * BLIND: 46 (46/75)
 * 
 * Class Based: https://github.com/citta-lab/DSA/blob/main/design/Trie.js 
 */

/** Trie node class */
class TrieNode{
    constructor(){
        this.children = {},
        this.endOfWord = false;
    }
}

var Trie = function() {
    /** initialize empty node, this can be just this.root = {} */
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    
     for(let char of word.split('')){ 
        /** if char is not present in children, then create new node */
        if(!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        /** if char is present,  we move the pointer */
        node = node.children[char];
    };
    
    /** once the insertion if complete,we mark end of the word */
    node.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    
    for(let char of word.split('')){ 
        /** if char is not found in our children map, then return false */
        if(!node.children[char]){
            return false;
        }
        
        /** if found, then move pointer to it's children until end */
        node = node.children[char];
    };
    
    /** return true at the end as we reached end of the search word */
    return node.endOfWord;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    
    for(let char of prefix.split('')){
        if(!node.children[char]){
            return false;
        }
        
        node = node.children[char];
    }
    
    return true;
};
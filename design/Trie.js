/**
 * 
 * Trie Implementation / Implement Trie ( CLASS BASED )
 * 
 * 208. Implement Trie (Prefix Tree)  
 * 
 * leetcode-question:208
 * leetcode:https://leetcode.com/problems/implement-trie-prefix-tree/
 * video:https://www.youtube.com/watch?v=oobqoCJlHA0
 * BLIND: 46 (46/75)
 * 
 * Functional Based : 
 */

/** TrieNode for building Trie */
class TrieNode {
    constructor(){
        this.children = {}; /** using hash map */
        this.endOfword = false;
    }
}

/** Trie implementation */
class Trie {
    constructor(){
        /** this could be simply this.root = {} */
        this.root = new TrieNode();
    }
    
    insert(word){
        let node = this.root;
        for(let char of word.split('')){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        
        node.endOfword = true;
    }
    
    /** 
    Search: 
    need to match the complete word. So we will check for each
    char in trie, if not found we do early return otherwiser we keep
    moving the pointer to char child until we find endOfWord */
    
    search(word){
        let node = this.root;
        for(let char of word.split('')){
            if(!node.children[char]){
                return false;
            }
            
            node = node.children[char];
        }
        
        return node.endOfword;
    }
    
    /** Prefix / startsWith :
    we will keep searching for each char of prefix/word and if char
    didn't match in Trie we do early return otherewise we will continue
    until prefix/word ends. Imp: we return true and dont look if it
    matched complete word in Trie.
    
    Exampl: let say our trie doesnt have any word starts with "B" but
    we have 1 million other words starts with all other 25 alphabets
    then out look up to check if prefix word has "B" takes only O(26)
    which is nothing but O(1). 
    
    if hashmap was used then it would have been O(n) as we will have to
    look up all million words before we give up */
    
    startsWith(prefix){
        let node = this.root;
        for(let char of prefix.split('')){
            if(!node.children[char]){
                return false;
            }
            
            node = node.children[char];
        }
        
        return true;
    }
}
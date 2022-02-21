/** 
 * 
 * 212. Word Search II  
 * 
 * Given an m x n board of characters and a list of strings words, return all words on the board. 
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells
 *  are horizontally or vertically neighboring. The same letter cell may not be used more than once
 *  in a word.
 * 
 * leetcode-question:212
 * leetcode:https://leetcode.com/problems/word-search-ii/
 * video:
 * BLIND: 48 (48/75)
 *
 */

/** using Trie */





/***** NOT OPTIMAL ( using world search methods ) */

/** 
 * Bruteforce:  
 * Time: O(mn4ᵂ) Space: O(n),  where n = number of cells in board, m = size(words), 
 * w = average word length */
    var findWords = function(board, words) {
    
        let resultWords = [];
        
        for(let word of words){
            /** this SearchPerWord now will act as Word Search problem main function */
            let result = SearchPerWord(board, word);
            if(result) resultWords.push(word);
        }
        
        return resultWords;
    };
    
    function SearchPerWord(board, word){
        
        let visited = new Set();
        
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[0].length; j++){
                let result = DFS(board, word, i, j, visited, 0);
                if(result) return true;
            }
        }
        
        return false;
    }
    
    
    function DFS(board, word, row, col, visited, wordIndex){
        
        let rowInBound = row >= 0 && row < board.length;
        let colInBound = col >= 0 && col <board[0].length;
        if(!rowInBound || !colInBound) return false;
        
        let char = board[row][col];
        if(char !== word.charAt(wordIndex)) return false;
        
        let hash = `${row}-${col}`;
        if(visited.has(hash)) return false;
        visited.add(hash);
        
        if(word.length-1 === wordIndex) return true
        
        let result = (
            DFS(board, word, row+1, col, visited, wordIndex+1) || 
            DFS(board, word, row-1, col, visited, wordIndex+1) || 
            DFS(board, word, row, col+1, visited, wordIndex+1) || 
            DFS(board, word, row, col-1, visited, wordIndex+1)
        );
        
        if(result) return result;
        
        visited.delete(hash);
        
        return false;
    }
    
    
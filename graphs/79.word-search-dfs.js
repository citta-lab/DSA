/** 
 * 
 * 79. Word Search
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
 * horizontally or vertically neighboring. The same letter cell may not be used more than once. 
 * 
 * Example:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 * Example II:
 * Input: board = [["C","A","A"],["A","A","A"],["B","C","D"]]
 * word =  "AAB"
 * Output: true
 * 
 * Hint:
 * Second example will fail if we dont delete visited entry at the end of completing dfs.
 * 
 * leetcode-question:79
 * leetcode : https://leetcode.com/problems/word-search/
 * video: https://www.youtube.com/watch?v=pfiQ_PS1g8E
 * leetcode detailed solution: https://leetcode.com/problems/word-search/discuss/27811/My-Java-solution
 * 
 * */


/** 
 * Time: O(n+m * 4^n)
 * O(n * m) from nested forloop which calls dfs 
 * O (4^n) from dfs on 4 co-ordinates for n characters of a "search word" 
 * 
 * Space: O(m*n) is the worst case we need to have callstack to store these recursion.
 * */

 var exist = function(board, word) {
    
    let visited = new Set();
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            /** 0 is the first index of the word */
            let result = dfs(i, j, board, visited, word, 0);
            if(result) return result;
        }
    }
    
    return false;
};


let dfs = (row, col, array, visited, word, wordIndex) => {
    
    /** Step 1: Out of bound base condition */
    let inBoundRow = row >= 0 && row < array.length;
    let inBoundCol = col >= 0 && col < array[0].length; 
    
    if(!inBoundRow || !inBoundCol) return false;
    
    /** Step 2: prevent checking the cells if the character is not present in the given WORD */
    let char = array[row][col];
    if(char !== word.charAt(wordIndex)) return false;
    
    /** Step 3: keep track of co-ordinates for not checking the cell again */
    let hash = `${row}-${col}`;
    if(visited.has(hash)) return false;
    visited.add(hash);
    
    /** Step 4: this will only happen if we matched all the char in the word */
    if(wordIndex === word.length-1) return true;
    
    /** Step 5: apply DFS on next co-ordinates with next wordIndex ( i.e + 1 ) */
    let result = (
    dfs(row+1, col, array, visited, word, wordIndex+1) ||
    dfs(row-1, col, array, visited, word, wordIndex+1) ||
    dfs(row, col+1, array, visited, word, wordIndex+1) ||
    dfs(row, col-1, array, visited, word, wordIndex+1) );
    
    if(result) return true;
    
    /** clean up after the each recursion call */
    visited.delete(hash); // <-- this needs to be in place for second example
    return false;
}


let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCCED";
console.log(exist(board, word)); // true

board = [["C","A","A"],["A","A","A"],["B","C","D"]]
word = "AAB"
console.log(exist(board, word)); // true

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCB"
console.log(exist(board, word)); // false

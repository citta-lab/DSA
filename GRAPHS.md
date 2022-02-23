# GRAPH PROBLEMS

## 1. [79. Word Search](https://github.com/citta-lab/DSA/blob/main/graphs/79.word-search-dfs.js)

     - Time: O(n+m * 4^n) where n is chars of search word. Space: O(m*n)
     - Apply DFS with Backtracking
     - BackTracking : Second example will fail if we dont delete visited entry at the end of completing dfs.
     - WordIndex: we need wordIndex in DFS which we will use it to check if we completed the complete WORD comparision.
     -- i.e if(startIndex === word.length-1) return true.
     - Compare Each character with Word: we need to check if traversing in matrix cell value matches with word chars by 
      our StartIndex. i.e `if(matrix[row][col] !== word.charAt(startIndex)) return false`

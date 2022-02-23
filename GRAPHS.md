# GRAPH PROBLEMS

## 1. [79. Word Search](https://github.com/citta-lab/DSA/blob/main/graphs/79.word-search-dfs.js)

     - Time: O(n+m * 4^n) where n is chars of search word. Space: O(m*n)
     - Apply DFS with Backtracking
     - BackTracking : Second example will fail if we dont delete visited entry at the end of completing dfs.
     - WordIndex: we need wordIndex in DFS which we will use it to check if we completed the complete WORD comparision.
     -- i.e if(startIndex === word.length-1) return true.
     - Compare Each character with Word: we need to check if traversing in matrix cell value matches with word chars by 
      our StartIndex. i.e `if(matrix[row][col] !== word.charAt(startIndex)) return false`


## 2. [139. Word Break](https://github.com/citta-lab/DSA/blob/main/graphs/139.word-break.js)

       - Time: O(n) recursion * O(n) for loop * O(n) substring method
       - can be solved in recursion (dfs) with memo
       - can also be solved using DP which will also result in O(n^3) time
       - memo = [] gives time limit but if we use map it will be fine.
       - memo = new Map(). then use memo.set(key, value) for setting and memo.has(key) checking, memo.get(key)
       
       - Apply DFS with startIndex = 0 which will be for given string
       - DFS base should be `if(s.length === startIndex) return true`
       - We will do sliding window on string s and compare if char in string s in present in wordDicts words
       -- i.e `let end = startIndex + 1;
       - We will while loop for checking substring (while(end <= s.length)) and extract substring 
       -- i.e `sub = s.substring(startIndex, end);
       - We check if sub exist in WordDict words, then call DFS recursively by changing startIndex to end.
       -- i.e `if(wordDict.includes(sub){ ... }`
       - we return if we get true and also add startIndex to memo at end if we didnt do early return

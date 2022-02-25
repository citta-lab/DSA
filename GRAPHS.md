# GRAPH PROBLEMS

## 1. [79. Word Search](https://github.com/citta-lab/DSA/blob/main/graphs/79.word-search-dfs.js)

     - Time: O(n+m * 4^n) where n is chars of search word. Space: O(m*n)
     - Apply DFS with Backtracking

     Implementation Details:
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

       Implementation Details:
       - Apply DFS with startIndex = 0 which will be for given string
       - DFS base should be `if(s.length === startIndex) return true`
       - We will do sliding window on string s and compare if char in string s in present in wordDicts words
       -- i.e `let end = startIndex + 1;
       - We will while loop for checking substring (while(end <= s.length)) and extract substring
       -- i.e `sub = s.substring(startIndex, end);
       - We check if sub exist in WordDict words, then call DFS recursively by changing startIndex to end.
       -- i.e `if(wordDict.includes(sub){ ... }`
       - we return if we get true and also add startIndex to memo at end if we didnt do early return

## 3. [133. Clone Graph](https://github.com/citta-lab/DSA/blob/main/graphs/139.word-break.js)

      - Time:O(N+M) where N is no nodes and M are children Space: O(N) depth of the tree
      - Will do DFS reucursion with node and a map (i.nodeMap) to hold node and it's respective clone

      Implementation Details:
      - DFS base condition will check for empty node, if clone of node exists in map.
      -- i.e `if(nodeMap.has(node)) return nodeMap.get(node);` /** returns clone of the node */
      - create new clone node, add it to map then process the node children using for loop.
      - Will call DFS on each child of node and result is stored in cloneChild which is pushed to clone
      children. i.e `

## 4. [91. Decode Ways](https://github.com/citta-lab/DSA/blob/main/graphs/91.decode-ways-dfs.js)

      - BruteForce without Memo :- Time: O(2^n)
      - DFS with Memo :- Time:O(n) and Space:O(n)

      Implementation Details:
      - Will do DFS with starting at 0 index.
      - DFS will have Three base condition.
      -- index > s.length return 0
      -- s[index] === '0' return 0 /** handling if number starts with 0 */
      -- index === s.length return 1 /** true base condition */
      - we will call DFS on index+1
      - we will call DFS on index+2 only if first char of s is 1 or 2 and ends with any
      of the number from 0-6. i.e '0123456'.includes(s[index+1])
      - will do memo on index

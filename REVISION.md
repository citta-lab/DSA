# ReVISION

The purpose of this checklist is to reflect on the mistakes i did while solving the problem even after solving it once or twice of many times. I will sub devide this section
into TWO parts, the first part is a MUST revise and second part is to moving the first part questions there once i could solve it without any hints after few days or weeks to reflect
i have made the progress. 

# PART I ( the Must ):
| PROBLEM | What Went Wrong |
| --- | --- |
| [word ladder](https://github.com/citta-lab/DSA/blob/e9b31226b257075f3c56d6d8f58aebf831986ace/graphs/word-ladder-bfs.js) | do pattern matching on wordList, then do pattern matching on beginWord with in BFS level order, use SET() for prevent checking the same node.                                                            **Time:** O(M^2 * N) where M is length of each word in the inputList and N is number of words in inputList. **Space:** O(M^2 * N) where we will have to store all N word combinations by doing M^2 combination. Keep in mind BFS and Visited set will cost O(M*N) |
| [course schedule II](https://github.com/citta-lab/DSA/blob/85a990182ab7fd3dec52f69859ce9f95385f5254/graphs/course-findOrder-dfs.js) | - first build map with empty array for all course then add pre-req in second loop. Apply dfs with two Set's visited and hasCycle. Lastly, make sure to loop on all courses and call dfs.  **Time:** O(N+E) where N is the number of courses and E is the pre-reqs of each course.**Space:** O(N+E) at worst case from DFS callstack.|
| [course schedule](https://github.com/citta-lab/DSA/blob/85a990182ab7fd3dec52f69859ce9f95385f5254/graphs/course-canFinish-dfs.js) | - first build map with empty array for all course and then add pre-reqs which is O(N+E) time & space. Make sure check for empty array `[]` for no prereqs and do postorder way to add course to result, then delete from visit set, empty the course in map (i.e `map[course] = []`) |
| [course schedule order]() | - same as above for building map but we will use 'TOPOSORT'. We will use visited and hasCycle set, delete course from hasCycle after processing all course children  |
| [count complete tree node](https://github.com/citta-lab/DSA/blob/ee4351ca340af8498c0b2d8a433eeec7a5f949a7/binary-tree/count-all-nodes-binary-tree.js) | can be done in O(log N*log N) time with binary search. Keep in mind if the tree is complete we can calculate size by `Math.pow(2, leftHeight)-1`. Also here main function should return `1+ mainFunction(root.left) + mainFunction(root.right)` not left(root) and right(root) |
| [copy random linkedList](https://leetcode.com/problems/copy-list-with-random-pointer/) | Need Map which will hold old node to new node, then use map data to connect. |
| [longest increasing path](https://github.com/citta-lab/DSA/blob/e7b18987e0e6251e628950b3651388ac485a1294/graphs/longest-increasing-path-dfs.js) | DFS needs be called with some minimal parent value and in recursion we check if the current cell value is greater than parent value. Also DFS in all 4 directions needs to calculate maxPath like `mathPath = Math.max(maxPath, dfs(row-1, col, matrix, parentValue, memo))`. Adding memo we can reduce the complexity to m*n.  |
| [walls and gate](https://github.com/citta-lab/DSA/blob/0b9ed5aa24ccd15fc59d6f09b574e74a0ce91fcd/graphs/wall-gates-bfs.js) | BFS as we need to find distance form the GATE to it's immediate empty rooms. Check for gate then push it to Queue. Check boundry condition then push new row,col to queue & also update the cell with distance |
| [decode string](https://github.com/citta-lab/DSA/blob/ac411df5b56c94dbe74913778ecd1ef009b2f46d/graphs/decode-string-stacks.js) | Keep `stack` and `for loop` to traverse the each char, need to push to stack as long as char is not closing bracket (i.e `]` ). Once we have closing bracket `while` loop to `pop` stack element as long as its not open bracket (i.e `]` example: `stack[stack.length-1] !== ']'`) and add it to new string. Then seperately pop ']' and do the same for number. parseInt the newly build number to add those many times to result array. At the end join the result array. |
| [next problem]() | comment |
| [next problem]() | comment |
| [next problem]() | comment |
| [next problem]() | comment |
| [next problem]() | comment |



# PART II ( yay's ):
In this section i would also like to highlight the CONFIDENCE by rating the problem from 3 to 1 where 3 being the WORST and 1 is the BEST.

**Rating:** 3-Worst, 1-Best

| PROBLEM | Confidence Rating | Complexity |
| --- | --- |--- |
| [longest substring](https://github.com/citta-lab/DSA/blob/ac1549da4c694cbbf65b04dc410b59fc175e8492/strings/longest-substring-strings.js) | 2  | **time:** O(N) from whileloop. **space:** O(min(m,k)) as we delete left char when match found
| [next problem]() | rating | --- |
| [next problem]() | rating | --- |

# ReVISION

The purpose of this checklist is to reflect on the mistakes i did while solving the problem even after solving it once or twice of many times. I will sub devide this section
into TWO parts, the first part is a MUST revise and second part is to moving the first part questions there once i could solve it without any hints after few days or weeks to reflect
i have made the progress. 

# PART I ( the Must ):
| PROBLEM | What Went Wrong |
| --- | --- |
| [word ladder](https://github.com/citta-lab/DSA/blob/e9b31226b257075f3c56d6d8f58aebf831986ace/graphs/word-ladder-bfs.js) | do pattern matching on wordList, then do pattern matching on beginWord with in BFS level order, use SET() for prevent checking the same node.                                                            **Time:** O(M^2 * N) where M is length of each word in the inputList and N is number of words in inputList. **Space:** O(M^2 * N) where we will have to store all N word combinations by doing M^2 combination. Keep in mind BFS and Visited set will cost O(M*N) |
| [course schedule II](https://github.com/citta-lab/DSA/blob/85a990182ab7fd3dec52f69859ce9f95385f5254/graphs/course-findOrder-dfs.js) | - first build map with empty array for all course then add pre-req in second loop. Apply dfs with two Set's visited and hasCycle. Lastly, make sure to loop on all courses and call dfs.  **Time:** O(N+E) where N is the number of courses and E is the pre-reqs of each course.**Space:** O(N+E) at worst case from DFS callstack.|
| [course schedule](https://github.com/citta-lab/DSA/blob/85a990182ab7fd3dec52f69859ce9f95385f5254/graphs/course-canFinish-dfs.js) | - first build map with empty array for all course and then add pre-reqs which is O(N+E) time & space. Make sure check for empty array `[]` for no prereqs and do postorder way to add course to result, then delete from visit set, empty the course in map (i.e map[course] = []) |
| [next problem]() | comment |
| [next problem]() | comment |
| [next problem]() | comment |



# PART II ( yay's ):
In this section i would also like to highlight the CONFIDENCE by rating the problem from 3 to 1 where 3 being the WORST and 1 is the BEST.
| PROBLEM | Confidence Rating (3-Worst, 1-Best) |
| --- | --- |
| [next problem]() | rating |
| [next problem]() | rating |
| [next problem]() | rating |

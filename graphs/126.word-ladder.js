/**
 * 
 * 126. Word Ladder II
 * 
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence 
 * of words beginWord -> s1 -> s2 -> ... -> sk such that:
 * Every adjacent pair of words differs by a single letter.
 * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
 * sk == endWord
 * Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest 
 * transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. 
 * Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].
 * 
 * 
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
 * 
 * Hint:
 * - In 127.word-ladder we returned how many steps we need to reach endWord (shortest path)
 * - In 126, we need to return the path
 * - If we use DFS with backtracking then it would be easier here as we need all paths
 */


/** Refer : https://leetcode.com/problems/word-ladder-ii/discuss/575666/Intuitive-Javascript-Solution-with-BFS-and-DFS */
/** 
  Given an m x n integers matrix, return the length of the longest increasing path in matrix. 
  From each cell, you can either move in four directions: left, right, up, or down. 
  You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
  
  leetcode-question:329
  leetcode: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
  
  Hint: Can be done by DFS but we need to do memoization to prevent Time limit as we are not keeping track of visited cell to avoid 
  checking already visited node ( because we need to find the best increasing path )
  
  */

/** BRUTEFORCE with just DFS ( will fail with time limit ) */

/** Time: O(2^m+n) as search needs to be repeated for all increasing cell.
    Space: O(m*n) or O(h) which is due the depth of the tree for DFS */

var longestIncreasingPathI = function(matrix) {
    let max = -Infinity;

    for(let i=0; i<matrix.length; i++) {
      for(let j=0; j<matrix[0].length; j++){
          /** update only if we get increment, send -Infinity/-1 as first default parent cell value */
           max = Math.max(max, dfsI(i, j, matrix, -Infinity))
      }
    }
    
    return max;
};

/** parentValue is important as we need to consider the path only if next cell value is increasing */
const dfsI = (row, col, array, parentValue) => {
    
    /** each DFS can act independtly*/
    let maxPath = 0;
 
    let inBoundRow = row >= 0 && row < array.length;
    let inBoundCol = col >= 0 && col < array[0].length;
    
    /** Step 1: first base for out of boundry */
    if(!inBoundRow || !inBoundCol) {
      return 0 
    }
    
    /** Step 2: second base when next cell value is less than parent / previous */
    let currentValue = array[row][col];
    if(parentValue >= currentValue){ // <-- important to consider = not just > 
     return 0;   
    }
    
    /** Step 3: if we got here then we are in safe zone, 
    branch out and increment maxPath to reflect current node/cell being processed */
    maxPath = Math.max(maxPath, dfsI(row-1, col, array, currentValue ))
    maxPath = Math.max(maxPath, dfsI(row+1, col, array, currentValue ))
    maxPath = Math.max(maxPath, dfsI(row, col-1, array, currentValue ))
    maxPath = Math.max(maxPath, dfsI(row, col+1, array, currentValue ))
    
    maxPath++
  
    /** return the value for current processed node/cell */
    return maxPath
}



/** DFS with MEMOIZATION */

/** 
 * Time: O(m*n) as we will only visit once and retrieve values from memo if it's already calculated
 * Space: O(m*n) used in memo array
 */
var longestIncreasingPath = function(matrix) {
  let max = -Infinity;

  /** m*n memo matrix for holding values */
  const memo =  new Array(matrix.length).fill(null)
  .map(row => new Array(matrix[0].length).fill(null)); 

  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++){
        /** update only if we get increment, send -Infinity/-1 as first default parent cell value */
         max = Math.max(max, dfs(i, j, matrix, -Infinity, memo))
    }
  }
  
  return max;
};

/** parentValue is important as we need to consider the path only if next cell value is increasing */
const dfs = (row, col, array, parentValue, memo) => {
  
  /** each DFS can act independtly*/
  let maxPath = 0;

  let inBoundRow = row >= 0 && row < array.length;
  let inBoundCol = col >= 0 && col < array[0].length;
  
  /** Step 1: first base for out of boundry */
  if(!inBoundRow || !inBoundCol) {
    return 0 
  }
  
  /** Step 2: second base when next cell value is less than parent / previous */
  let currentValue = array[row][col];
  if(parentValue >= currentValue){ // <-- important to consider = not just > 
   return 0;   
  }

  if(memo[row][col]){
    return memo[row][col];
  }
  
  /** Step 3: if we got here then we are in safe zone, 
  branch out and increment maxPath to reflect current node/cell being processed */
  maxPath = Math.max(maxPath, dfs(row-1, col, array, currentValue, memo ))
  maxPath = Math.max(maxPath, dfs(row+1, col, array, currentValue, memo ))
  maxPath = Math.max(maxPath, dfs(row, col-1, array, currentValue, memo ))
  maxPath = Math.max(maxPath, dfs(row, col+1, array, currentValue, memo ))
  
  maxPath++
  
  memo[row][col] = maxPath;
  /** return the value for current processed node/cell */
  return maxPath
}
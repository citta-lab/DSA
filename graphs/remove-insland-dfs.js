/**
 * Given a two dimentional matrix representing 1's and 0's as land and water. Only remove island which are
 * not connected to boundry directly or indirectly. You can replace island with 0's for removal process & you cannot
 * traverse diagonally.
 * 
 * ALTERNATIVE:
 * Instead of replacing current matrix with 2's we could have created new array initalized to false for the
 * same size as matrix array then applu DFS on matrix and keep updating the new array except for island doesn't
 * touch boundry. At the end we will have new array with TRUE for all boundry touching island, rest of them FALSE.
 * we iterate again and convert TRUE to 1 and FALSE to 0. this will give us the end result.
 * ( FALSE will cover water and removing isolated island)
 * 
 * Question Link:
 * https://www.algoexpert.io/questions/Remove%20Islands
 * 
 * In Modifed appraoch we will use SET for tracking visited instead of rerlaying on
 * 2's value. Which adds the space complexity but it is much easy to go throuh
 */

 /**
  * Example: 
  * matrix = [
  [ 1, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 1, 1, 1 ],
  [ 0, 0, 1, 0, 1, 0 ],
  [ 1, 1, 0, 0, 1, 0 ],
  [ 1, 0, 1, 1, 0, 0 ],
  [ 1, 0, 0, 0, 0, 1 ]
]

  should result as 
  matrix = [
  [ 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 1 ],
  [ 0, 0, 0, 0, 1, 0 ],
  [ 1, 1, 0, 0, 1, 0 ],
  [ 1, 0, 0, 0, 0, 0 ],
  [ 1, 0, 0, 0, 0, 1 ]
]
  */

 function removeIslands(matrix) {
    for(let i=0; i<matrix.length; i++){
          for(let j=0; j< matrix[0].length; j++){
              /** we would only want to apply DFS on nodes attached to boundry, by doing so we would
              not touch ACTUAL island which we need to remove or update later */
              const rowBoundry = i === 0 ||  i === matrix.length-1 ;
              const colBoundry = j === 0 || j === matrix[0].length-1;
              
              /** apply DFS and update to 2 as long as nodes are on boundry */
              if(rowBoundry || colBoundry) {
                  dfs(i, j, matrix)
              }
          }
      }
      
      /** 
      by this point we will have matrix with 2's (island touching boundry),
      1's (actual island), and 0's. So now we iterate again to revert 2's to 1
      ( as we should return matrix in original state) and remove 1's (island) to
      0's */ 
    const result = updateAndRemoveIsland(matrix);
    return result ;
  }
  
  const dfs = (i, j, matrix) => {
    /** boundry 1: we will go beyound 0 row, col and array.length for col and row */
      const rowInbound = i >= 0 && i < matrix.length;
      const colInbound = j >= 0 && j < matrix[0].length;
      if(!rowInbound || !colInbound) return false
      
      /** boundry 2: if the value is 0, then no need to work harder */
      const node = matrix[i][j];
      if(node === 0) return false
      
      /** boundry 3: this can also act as visited, but if we already updated to 2 
       * then we are good */
      if(node === 2) return false
      matrix[i][j] = 2;
      
      /** lets apply DFS */
      dfs(i+1, j, matrix)
      dfs(i-1, j, matrix)
      dfs(i, j+1, matrix)
      dfs(i, j-1, matrix)
      
      return true
  }
  
  
  const updateAndRemoveIsland = (matrix) => {
      for(let i=0; i< matrix.length; i++){
          for(let j=0; j < matrix[0].length; j++){
              /** revert boundry changes we made from DFS back to original 
               * matrix state */
              if(matrix[i][j] === 2){
                   matrix[i][j] = 1;
                  /** if we haven't updated to 2 then it must be island 
                   * without touching boundry, so remove it by marking it as 0 */
              }else if(matrix[i][j] === 1) {
                  matrix[i][j] = 0;
              }
          }
      }
      
      return matrix;
  }
  
  // Do not edit the line below.
  exports.removeIslands = removeIslands;
  



  /** TEST CASES */
  let matrix = [
    [ 1, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 1, 1, 1 ],
    [ 0, 0, 1, 0, 1, 0 ],
    [ 1, 1, 0, 0, 1, 0 ],
    [ 1, 0, 1, 1, 0, 0 ],
    [ 1, 0, 0, 0, 0, 1 ]
  ]
  console.log(removeIslands(matrix)); // updated to example result from top


  matrix = [
    [ 1, 0, 1, 0, 1 ],
    [ 0, 0, 1, 0, 0 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 0, 1, 0, 0 ],
    [ 1, 0, 1, 0, 1 ]
  ];
  console.log(removeIslands(matrix)); // remains the same


  matrix = [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 1, 1, 1, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
  ]
  console.log(removeIslands(matrix)); // will have all zero's

  matrix = [ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]
  console.log(removeIslands(matrix)) // it will be same as input










  /** OR have visited SET to track the visited  */
  console.log("----------- ( MODIFIED APPRAOCH ) WITH SET for tracking VISITED ---------")

  function removeIslandsII(matrix) {
    // Write your code here.
      const visited = new Set();
      for(let i=0; i< matrix.length; i++){
          for(let j=0; j<matrix[0].length; j++){
                  const rowBoundry = i === 0 || i === matrix.length-1;
                  const colBoundry = j === 0 || j === matrix[0].length-1;
                if(rowBoundry || colBoundry){
                      dfsII(i, j, matrix, visited);
                  }
          }
      }
      
          for(let i=0; i< matrix.length; i++){
              for(let j=0; j<matrix[0].length; j++){
                   const node = matrix[i][j];
                   if( node === 2){
                       matrix[i][j] = 1;
                   }else if( node === 1){
                       matrix[i][j] = 0;
                   }
              }
          }
      
      console.log(matrix)
      
    return matrix;
  }
  
  const dfsII = (row, col, matrix, visited) => {
      const rowInBound = row >= 0 && row < matrix.length; 
      const colInBound = col >= 0 && col < matrix[0].length;
      if(!rowInBound || !colInBound) return 
      
      const hash = `${row}-${col}`;
      if(visited.has(hash)) return 
      visited.add(hash);
      
      const node = matrix[row][col];
      if( node === 0) return 
      
      if(node === 1) matrix[row][col] = 2;
      
      dfsII(row+1, col, matrix, visited);
      dfsII(row-1, col, matrix, visited);
      dfsII(row, col+1, matrix, visited);
      dfsII(row, col-1, matrix, visited);
      
      return 
  }

 matrix = [
    [ 1, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 1, 1, 1 ],
    [ 0, 0, 1, 0, 1, 0 ],
    [ 1, 1, 0, 0, 1, 0 ],
    [ 1, 0, 1, 1, 0, 0 ],
    [ 1, 0, 0, 0, 0, 1 ]
  ]
  console.log(removeIslandsII(matrix)); // updated to example result from top


  matrix = [
    [ 1, 0, 1, 0, 1 ],
    [ 0, 0, 1, 0, 0 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 0, 1, 0, 0 ],
    [ 1, 0, 1, 0, 1 ]
  ];
  console.log(removeIslandsII(matrix)); // remains the same


  matrix = [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 1, 1, 1, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
  ]
  console.log(removeIslandsII(matrix)); // will have all zero's

  matrix = [ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]
  console.log(removeIslandsII(matrix)) // it will be same as input


  
  
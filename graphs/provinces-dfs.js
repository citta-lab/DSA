/** Given an two dimentional array of water ( 0 ) and land ( 1 ) calculate number of
 * island.
 * 
 * Important:
 * This is just a different variation of unidrectional component count graph problem.
 * However the given data is represnted in two dimentional array and is still a unidirectional.
 * 
 * Use:
 * We will use DFS as we can go as deep as we can with in a island and also problem is
 * not about SHORTEST path. 
 * 
 * LEET CODE QUESTIONS:
 * https://leetcode.com/problems/number-of-islands/submissions/
 * https://leetcode.com/problems/number-of-provinces/solution/ fails when input is [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]] why ?
 */

 /** given m*n grid of water/land */
 const grid = [
     [1,0,0,1],
     [0,1,1,0],
     [0,1,1,1],
     [1,0,1,1]
    ];

const findCircleNum = (isConnected) => {
    let count = 0;
    let visited = new Set();
    for(let i=0; i<isConnected.length ; i++){
        for(let j=0; j<isConnected[0].length; j++){
            let result = dfsTwo(i, j, isConnected, visited);
            if(result) count += 1;
        }
    }
    return count;
};


const dfsTwo = (row, col, array, visited) => {
    const rowInBound = 0 <= row && row < array.length;
    const colInBound = 0 <= col && col < array[0].length;
    if(!rowInBound || !colInBound) return false;
    
    if(array[row][col] === 0) return false;

    let hash = `${row}-${col}`;
    if(visited.has(hash)) return false;
    visited.add(hash);

    dfsTwo(row+1, col, array, visited); // going down
    dfsTwo(row-1, col, array, visited); // going up
    dfsTwo(row, col+1, array, visited); // going right
    dfsTwo(row, col-1, array, visited); // going left
    
    /** adding this will not soilve the problem  */
    // dfsTwo(row-1, col-1, array, visited)
    // dfsTwo(row-1, col+1, array, visited)
    // dfsTwo(row+1, col+1, array, visited)
    // dfsTwo(row+1, col-1, array, visited)

    return true;
}

console.log(findCircleNum(grid)); // 1 ( if we get 4 then wrong )
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3
console.log(findCircleNum([[[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]])); // 1 

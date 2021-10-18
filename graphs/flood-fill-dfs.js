/**

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as 
the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
Replace the color of all of the aforementioned pixels with newColor.Return the modified image after performing the flood fill.

Example: 
image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]


*/




/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    let visited = new Set(); /** need this to avoid checking the same cell */
    const srcColor = image[sr][sc];
    /** we dont need for loops as sr,sc points exactly where we need to start the look up */
    dfs(image, sr, sc, newColor, srcColor, visited) 
    
    return image
};

const dfs = (array, row, col, newColor, srcColor, visited) => {
    /** boundry 1: hence dfs is applied we will cross array boundry */
    const rowInBound = row >= 0 && row < array.length;
    const colInBound = col >= 0 && col < array[0].length;
    if(!rowInBound || !colInBound) return 
    
    /** boundry 2: if visited then skip it */
    const hash = `${row}-${col}`;
    if(visited.has(hash)) return 
    visited.add(hash)
     
    /** boundry 3: if it is any other color then intended skip it */
    if(array[row][col] !== srcColor) return 
    
    /** update to new color, if check not needed but just as safety */
    if(array[row][col] === srcColor) array[row][col] = newColor;
    
    /** traverse all direction */
    dfs(array, row+1, col, newColor, srcColor, visited)
    dfs(array, row-1, col, newColor, srcColor, visited)
    dfs(array, row, col+1, newColor, srcColor, visited)
    dfs(array, row, col-1, newColor, srcColor, visited)
    
    return
}
    

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1,1,2)); //[[2,2,2],[2,2,0],[2,0,1]][[2,2,2],[2,2,2]]
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1,1,2)); // [[0,0,0],[0,1,1]]
console.log(floodFill([[0,0,0],[1,0,0]], 1,1,2)); // [[2,2,2],[1,2,2]]



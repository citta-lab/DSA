/** 
 * You are given an m x n grid where each cell can have one of three values: 
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * 
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
 * If this is impossible, return -1.
 * 
 * leetcode-question:994
 * leetcode: https://leetcode.com/problems/rotting-oranges/ 
 * company: Amazon
 * */

/** Time: O(m*n) and Space: O(m*n) */
var orangesRotting = function(grid) {
    
    let queue = [];
    /** questions asked us to return -1 if we cant rott all fresh once, so we need to keep count */
    let freshCount = 0;
    /** increment everytime level order is complete */
    let timeInMin = 0;
    
    /** helper status for better uderstanding */
    let status = {
        rotten: 2,
        fresh: 1
    };
    
    /** First Time : O(m*n) */
    /** loop through m*n and only trigger BFS when we find the first rotten orange */
    for(let row=0; row<grid.length; row++){
        for(let col=0; col<grid[0].length; col++){
            let value = grid[row][col];
            /** found the rotten orange, then add it to queue */
            if(value === status.rotten){
                queue.push([row, col]);
            }
            /** if it's not rotten (i.e 2) or empty (i.e 0) then it must be fresh ones*/
            if(value === status.fresh){
                freshCount++
            }
        }
    }
    
    /** Second Time Complexity from BFS : O(m*n) */
    /** we need to keep running until queue & fresh count is zero */
    while(queue.length && freshCount > 0){
        
        /** level order : so we can rott immediate children */
        let size = queue.length;
        
        for(let level = 0; level < size; level++){
            
            let coordinates = queue.shift();
            let [row, col] = coordinates; /** use the index so we can traverse 4 direction */

            /** go down */
            if(row-1 >= 0 && grid[row-1][col] === status.fresh){
                grid[row-1][col] = 2; /** hence it was fresh, we mark it as rotten */
                queue.push([row-1, col]); /** add it to queue */
                freshCount-- /** we have one less fresh orange */
            }

            /** go up  */
            if(row+1 < grid.length && grid[row+1][col] === status.fresh){
                grid[row+1][col] = 2;
                queue.push([row+1, col]);
                freshCount--
            }

            /** go left */
            if(col-1 >= 0 && grid[row][col-1] === status.fresh){
                grid[row][col-1] = 2;
                queue.push([row, col-1]);
                freshCount--
            }

            /** go right */
            if(col+1 < grid[0].length && grid[row][col+1] === status.fresh){
                grid[row][col+1] = 2;
                queue.push([row, col+1]);
                freshCount--
            }
        }
        
        /** end of each level we increment time, as we finished all the immediate children */
        if (queue.length > 0) timeInMin++;
        // timeInMin++
    }
    
    /** finally if we still have fresh count, then we failed otherwise return time */
    return freshCount === 0 ? timeInMin : -1;
};

let arr = [[2,1,1],[1,1,0],[0,1,1]]
console.log(orangesRotting(arr)); // 4 mins 

arr = [[2,1,1],[0,1,1],[1,0,1]];
console.log(orangesRotting(arr)); // -1

arr = [[0,2]]
console.log(orangesRotting(arr)); // 0
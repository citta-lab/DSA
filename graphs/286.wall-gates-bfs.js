
/** 
 * 
 * 
 * 286. Walls and Gates
 * 
 * You are given an m x n grid rooms initialized with these three possible values. 
 * -1 A wall or an obstacle. 
 * 0 A gate.
 * INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF 
 * as you may assume that the distance to a gate is less than 2147483647. 
 * Fill each empty room with the distance to its nearest gate. 
 * If it is impossible to reach a gate, it should be filled with INF.
 * 
 * 
 * leetcode-question:286
 * leetcode: https://leetcode.com/problems/walls-and-gates/
 * 
 * Note: Can do DFS but we need to know all immediate children from GATE to update the distance it makesense to 
 * use BFS level order ( can be done without level order in BFS ). This will help in visiting the node only once
 * unlinke DFS.
 * 
 * Problem similar to Rotten Oranges : https://github.com/citta-lab/DSA/blob/d2d86abd4e6b4dc0ae2eb45f51c64a6d966f7486/graphs/rotten-oranges-bfs.js
 */

/** Time: O(M*N) and Space : O(M*N) */
var wallsAndGates = function(rooms) {
    
    /** define like enum for easy check */
    let status = {
        WALL: -1,
        GATE: 0,
        EMPTY_ROOM: 2147483647
    }
    
    /** queue for BFS so we can process all it's children then next level */
    let queue = [];

    /** we need to iterate and start travesing once find the GATE */
    for(let row=0; row <rooms.length; row++){
        for(let col=0; col<rooms[0].length; col++){
            let value = rooms[row][col];
            if(value === status.GATE){
                queue.push([row, col]);
            }
        }
    }
    
    /** helper to validate if the found room is Empty */
    let isEmptyRoom = (row, col) => {
        let value = rooms[row][col];
        return value === status.EMPTY_ROOM;
    }
    
    /** default as we will start from first */
    let distance = 1; 
    
    while(queue.length){
        let size = queue.length;
        
        for(let i = 0; i< size; i++ ){
        
            let [row, col] = queue.shift();
            
            /** go down */
            if(row-1 >= 0 && isEmptyRoom(row-1, col)){
                rooms[row-1][col] = distance;
                queue.push([row-1, col]);
            }
            
             /** go up */
            if(row+1 < rooms.length && isEmptyRoom(row+1, col)){
                rooms[row+1][col] = distance;
                queue.push([row+1, col]);
            }
            
             /** go left */
            if(col-1 >= 0 && isEmptyRoom(row, col-1)){
                rooms[row][col-1] = distance;
                queue.push([row, col-1]);
            }
            
             /** go right */
            if(col+1 < rooms[0].length && isEmptyRoom(row, col+1)){
                rooms[row][col+1] = distance;
                queue.push([row, col+1]);
            }
            
        }
        
        /** increment after every level so this will acts level by level */
        distance ++
    }

    console.log(rooms);
};

let matrix = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
console.log(wallsAndGates(matrix)) // [ [ 3, -1, 0, 1 ], [ 2, 2, 1, -1 ], [ 1, -1, 2, -1 ], [ 0, -1, 3, 4 ] ]

matrix = [[-1]]
console.log(wallsAndGates(matrix)) // [[-1]]

matrix = [[2147483647]]
console.log(wallsAndGates(matrix)) // [ [ 2147483647 ] ]

matrix = [[0]]
console.log(wallsAndGates(matrix)) // [[0]]

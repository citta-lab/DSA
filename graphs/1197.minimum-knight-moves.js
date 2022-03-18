/** 
 * 
 * 1197. Minimum Knight Moves 
 * 
 * In an infinite chess board with coordinates from -infinity to +infinity, you have a 
 * knight at square [0, 0]. A knight has 8 possible moves it can make, as illustrated 
 * below. Each move is two squares in a cardinal direction, then one square in an 
 * orthogonal direction. 
 * 
 * Return the minimum number of steps needed to move the knight to the square [x, y]. 
 * It is guaranteed the answer exists.
 * 
 * Input: x = 2, y = 1
 * Output: 1
 * 
 * Input: x = 5, y = 5
 * Output: 4
 * 
 * leetcode-question:1197
 * leetcode:https://leetcode.com/problems/minimum-knight-moves/
 * 
 * Hint:
 * - Time: O(max(M,N)^2) Space: O(max(M,N)^2)
 * - BFS with directions to jump 2 cells
 * - directions/moves = [[2,1],[1,2],[-2,1],[-1,2],[-2,-1],[-1,-2],[2,-1],[1,-2]];
 * 
 * */

 var minKnightMoves = function(x, y) {
    let res = 0;
    let queue =[[0,0]]
    let moves = [[2,1],[1,2],[-2,1],[-1,2],[-2,-1],[-1,-2],[2,-1],[1,-2]];
    let visited = new Set();
    while(queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i ++) {
            let current = queue.shift();
            
            /** x and y co-ordinates from queue */
            let cX = current[0];
            let cY = current[1];
            if (cX === x && cY === y) return res;
            
            /** keep looking in all 2,1 combination cell movements */
            for (let move of moves) {
                let nX = cX + move[0];
                let nY = cY + move[1];
                
                let hash = `${nX}-${nY}`;
                if (!visited.has(hash)) {
                    visited.add(hash);
                    queue.push([nX, nY])
                }
            }
        }
        res ++
    }
};
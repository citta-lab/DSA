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
 * https://leetcode.com/problems/number-of-provinces/solution/ fails when input is [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]] if we use dfs recursion. So union find is the solution. 
 * leetcode-question:547
 */

 /** given m*n grid of water/land */
 const grid = [
     [1,0,0,1],
     [0,1,1,0],
     [0,1,1,1],
     [1,0,1,1]
    ];

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const parent = buildParent(isConnected.length);
    let components = isConnected.length;
    
    for(let i=0; i < isConnected.length; i++){
        for(let j=0; j < isConnected[0].length; j++){
            /** Union function operation */
            if(isConnected[i][j] === 1 && i !== j){
                let p1 = findParent(i, parent);
                let p2 = findParent(j, parent);
                
                if(p1 != p2){
                    parent[p1] = p2;
                    components -= 1
                }
            }
        }   
    }
    
    return components;
};

const buildParent = (n, array=[]) => {
    for(let i=0; i<n; i++){
        array.push(i)
    }
    
    return array;
}

const findParent = (node, parent) => {
    if(node === parent[node]) return node;
    return findParent(parent[node], parent);
}

console.log(findCircleNum(grid)); // 1 ( if we get 4 then wrong )
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3
console.log(findCircleNum([[[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]])); // 1 
console.log(findCircleNum([[1,1,1],[1,1,1],[1,1,1]])); // 1

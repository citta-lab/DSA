

const hasCycle = (adjList) => {
    let size = Object.keys(adjList).length;
    
    let visited = new Set();
    let hasCycle = new Set();
    let cycleNodes = [];
    
    for(let i=0; i<size; i++){
        let result = dfs(i, adjList, visited, hasCycle, cycleNodes);
        if(result) {
            return true;
        }
    }

    return false;
}

let dfs = (node, adjList, visited, hasCycle, cycleNodes) => {
    
    if(hasCycle.has(node)){
        return true;
    }

    if(visited.has(node)){
        return false;
    }

    hasCycle.add(node);
    let children = adjList[node];
    for(let child of children || []){
        let result = dfs(child, adjList, visited, hasCycle, cycleNodes);
        if(result) {
            // console.log(hasCycle);
            return true;
        }
    }

    hasCycle.delete(node);
    visited.add(node);

    return false;
}

// let list = {
//     0: [1,2,3],
//     1: [0],
//     2: [0,3],
//     3: [0,2]
// }
// console.log(hasCycle(list));

// let list = { 0: [1], 1: [2], 2:[3]};
// console.log(hasCycle(list));

// list = { 0: [1], 1: [2], 2:[0]};
// console.log(hasCycle(list));

// list = {
//     1: [ 2, 3, 0 ],
//     2: [ 1, 3, 4 ],
//     3: [ 1, 2, 5 ],
//     0: [ 1 ],
//     4: [ 2 ],
//     5: [ 3 ]
//   };
//   console.log(hasCycle(list));

  list = {
    1: [ 2],
    2: [ 1]
  };
  console.log(hasCycle(list));
  
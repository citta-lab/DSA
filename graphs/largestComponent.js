/** given graph find the largest component  */

const graph = {
    0: [8,1,5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3,2]
}

const largestComponent = (graph) => {
    const visted = new Set();
    /** hence we need max node with in a component */
    let maxCompoentCount = 0;
    /** IMPORTANT: as this will help hopping between diffrent component/island which are not connected */
    for(let node in graph){
        let count = 0; 
        let currentComponentCount = dfs(node, graph, visted, count);
        /** compare and keep the largest */
        maxCompoentCount = Math.max(maxCompoentCount, currentComponentCount);
    }

    return maxCompoentCount;
}


const dfs = (startNode, graph, visited, count) => {

    /** if already visited then return or return 0 so we dont count */
    if(visited.has(startNode)) return 0;
    visited.add(startNode);
    
    count += 1; /** start counting for every node we process */
    let children = graph[startNode];
    for(let child of children){
        const result = dfs(child, graph, visited, count);
        /** important top check so we dont return 0 or return from line 31 and call it done */
        if(result) return result;
    }

    return count;
}


console.log(largestComponent(graph));
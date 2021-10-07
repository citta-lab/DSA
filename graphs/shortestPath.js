
/** Find the shortest path to node f */
const graph = {
    a: ['c', 'b'],
    b: ['d', 'e'],
    c: ['g'],
    g: [],
    f: [],
    e: ['h', 'l'],
    d: ['f'],
    x:['y'],
    l:['m', 'n'],
    h:['n'],
    m: ['f'],
    n: ['o'],
    o: ['p']
}



/** Implementing DFS */
const shortestDistance = (graph, rootNode, targetNode) => {

    /** always start withj the root node */
    const queue = [rootNode];
    
    /** worst case if all our nodes are connected then the length would be of all nodes */
    let shortestPathArray = Object.keys(graph);
    
    /** let us keep track of every traverse until we hit end i.e [] */
    const keyRestValueArray = Object.entries(graph).map(([key, value]) => [key, 0])
    const visited = Object.fromEntries(keyRestValueArray);
    visited[rootNode] = 1;

    /** distance mapping */
    const distance = Object.fromEntries(Object.entries(graph).map(([key, value]) => [key, Infinity]));
    distance[rootNode] = 0;

    while(queue.length > 0){
        
        const node = queue.shift();
        /** adding node to path before we process it's children  */ 

        const children = graph[node];
        for(let child of children){

            /** if we already visted then skip that node, else mark it then process it */
            if(visited[child] === 1) continue;
            if(visited[child] === 0) {

                const smallestDist = Math.min(distance[child], distance[node]+1);
                distance[child] = smallestDist;

                visited[child] = 1;
                if(targetNode === child){
                    // console.log('******* log *******')
                    // console.log(distance); // enable this to view the distance map
                    // console.log('********************')
                    return distance[child];
                }
            }
            
            queue.push(child);
        }
    }
}


console.log('************* iterative bfs *****************')
console.log(shortestDistance(graph, 'a', 'f')); //3
console.log(shortestDistance(graph, 'a', 'g')); // 2
console.log(shortestDistance(graph, 'a', 'n')); // 4
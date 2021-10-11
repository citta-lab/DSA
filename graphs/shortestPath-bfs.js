/**
 * Find the shortest path in unidirectional graph given edges from the list.
 * Important:
 * Before we jump into the example it is important to know though we can tackle 
 * this in either DFS or BFS we should take a closer look. This will reveal doing
 * BFS we can achieve reaching the target node sooner compare to DFS. 
 * 
 * Reasoning:
 * Hence BFS forces us to traverse all the children before going to other node we can
 * return the target node length as soon as we find without needing to comapre (unlike
 * DFS ) as there will not be any shortest length compare to the one we find in BFS.
 */

 /** GIVEN EDGES */
 const edges = [
     ['w','x'],
     ['x','y'],
     ['z','y'],
     ['z','v'],
     ['w','v']
 ]


 const shortestPathBfs = (edges, startNode, targetNode) => {
     const graph = buildGraph(edges);
     const visited = new Set();

     /** IMPORTANT:
      *  Instead of just keeping node in the queue we can also keep edge length.
      *  By default root node ( by itself ) will have 0 edge length. This is the
      *  key to traverse in O(n) but also finding the length;
      */
     const queue = [[startNode, 0]];

     while(queue.length > 0){
         const [node,edgeLength] = queue.shift();

         if(visited.has(node)) continue;
         visited.add(node);

         /** if we find the tareget then return length, no brainer as this is bfs */
         if(node === targetNode) return edgeLength; 

         const children = graph[node];
         for(let child of children){
            /** distance between parent node to child node must be +1 edge */
            const childEdgeLength = edgeLength + 1;
            queue.push([child, childEdgeLength]);
         }
     }
 }
 
 
 
 
 const buildGraph = (edges, graph={}) => {
    edges.forEach(edge => {
        const [key,value] = edge;
        
        if(!graph[key]) graph[key] = [];
        if(!graph[value]) graph[value] = [];

        /** hence this is unidirectional we can push each others value */
        graph[key].push(value);
        graph[value].push(key);
    });

    return graph;
 }

 console.log(buildGraph(edges));
 console.log(shortestPathBfs(edges, 'w', 'z')); // 2

 const edgesTwo = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['l', 'm'],
    ['j', 'l']
 ];

 console.log(shortestPathBfs(edgesTwo, 'j', 'l')); // 1
 console.log(shortestPathBfs(edgesTwo, 'i', 'l')); // 2
 console.log(shortestPathBfs(edgesTwo, 'i', 'm')); // 2
 console.log(shortestPathBfs(edgesTwo, 'k', 'm')); // 1
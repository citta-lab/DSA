/** givem undirected path edges write a function which takes given edges, source node and target node 
 * return whether we can traverse from source node to target node.
 * 
 * Example: const edges = [ [a,b], [a, c], [x,z]] and if source is a and target is x then we canot reach.
 * i.e edges can be convereted to graph like const graph = { a: [b,c], x: [z]}. Hence they are two seperate
 * graph we cannot traverse.
 * 
 * Converting given eges to graph will look like 
 * const graph = {
        i: [ 'j', 'k' ],
        j: [ 'i' ],
        k: [ 'i', 'm', 'l' ],
        m: [ 'k' ],
        l: [ 'k' ],
        o: [ 'n' ],
        n: [ 'o' ]
   }
 */

 /** GIVEN  */
 const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
 ];

 /** 
  * APPROACH 1: 
  * BFS appraoch O(n+e) time and O(n) space 
  * ( but in reality we have two O(n) one for 
  * queue and one for buildGraph ) so O(2n) ==> O(n)
  * */
 const undirectedPath = (edges, sourceNode, targetNode) => {
    /** first convert edges to more iteratable graph object */ 
    const graph = buildGraph(edges);

     const queue = [sourceNode];
     /** using Set helps O(1) time finding so we can keep track of visited nodes to avoid infinite loop*/
     const visited = new Set(); 

     while(queue.length > 0){
         const node = queue.shift();
         
         /** if we already visted then lets not add its child node to queue */
         if(visited.has(node)) continue;  
         /** if not visted mark it as visited and lets process it's children */
         visited.add(node);

         const children = graph[node];
         for(let child of children){
             if(child === targetNode) return true;
             queue.push(child);
         }
     }

     /** if we didnt return true before then we must have not found the target node */
     return false;
 }

 /** O(n) time and space */
 const buildGraph = (edges, graph={}) => {
    edges.forEach((edge) => {
        const [key, value] = edge;
        
        /** 
         * step 1: 
         * hence eges doesnt really tell which is parent node, we need to initialize the graph
         * with both key/value if they dont exist already */
        if(!graph[key]) graph[key] = [];
        if(!graph[value]) graph[value] = [];

        /** 
         * step 2: 
         * hence step one takes care of adding key/value if they dont exist we can alwasy assume
         * we will have graph entries for key/value by here.
         * Because it is undirected grap we need can add respective property value by just pushing it to 
         * graph. 
         * Example:
         * So this will first create entry for `i`, `j` as its own key and `i` will get `j` as it's
         * child, in second loop `k` gets `i` as it's child and `i` also gets `k` as its child. Which is 
         * correct as they are undirectional.
         */
        graph[key].push(value);
        graph[value].push(key);
    });

    return graph;
 }

 console.log(buildGraph(edges));
 console.log(undirectedPath(edges, 'j', 'm')); // true




 

 /** 
  * APPROACH 2: 
  * DFS recursion to cover the recusion senario and time and space complexity doesnt change 
  * */
 const undirectionalPathDfs = (edges, sourceNode, targetNode) => {
    const graph = buildGraph(edges);  /** making use of previous buildGraph helper */
    const visited = new Set();
    return dfsRecursion(graph, sourceNode, targetNode, visited);
 }

 const dfsRecursion = (graph, sourceNode, targetNode, visited) => {
    /** verify to avoid processing visited node, if not visted before mark it visted and process */
    if(visited.has(sourceNode)) return false;
    visited.add(sourceNode);

    /** if we found target then just return */
    if(sourceNode === targetNode) return true;
    
    const children = graph[sourceNode];
    for(let child of children){
        /**  
         * we cannt just return dfsRecursion(.....) as it will stop for when one of the complete
         * edge is finished processing. Also we only want to end it if we find the sourceNode === targetNode
         * otherwise we ignore if it's not a match until all done.
        */
        const result = dfsRecursion(graph, child, targetNode, visited);
        if(result){
            return result;
        }
    }
 }

 console.log(undirectionalPathDfs(edges, 'j', 'm')); // true
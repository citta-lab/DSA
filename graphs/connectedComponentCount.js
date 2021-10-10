/** 
 * Given the grap findout what is the number of connected components. This is similar to counting number of island problem
 * Hint: 
 * Dont over think and build an hash to keep track of all node and visited like { 1: false, 2: false, 3: false } rather use
 * Set() which will help in O(1) lookup
 */

 /** given data */
 const graph = {
     3:[],
     4:[6],
     6:[4,5,7,8],
     8:[6],
     7:[6],
     5:[6],
     1:[2],
     2:[1]
 };


 const connectedComponentCount = (graph) => {
    /** 
     * we dont need to create an object with all the nodes and initialize it to false. 
     * Rather use set and do O(1) to check if the entry is present, if yes then it means
     * we already visited
     * */ 
    let visited = new Set();
     
     let count = 0;
     for(let node in graph){
         const result = dfs(graph, node, visited);
         if(result) count += 1; // dfs runs for entire graph then comes back at once. Hence we have 3 graps it will count 3
     }

     return count;
 }

 const dfs = (graph, node, visited) => {
     /** 
      * Set stores both int (from children array ) and string (from key) so we convert it 
      * to int or string before checking/storing
      * */
    const intValue = parseInt(node);
    
    /** check in Set before making any move, if not present make an entry and process the node */
    if(visited.has(intValue)) return false; /** returning false helps in checking the count in  connectedComponentCount method*/
    visited.add(intValue);

     let children = graph[node];
     for(let child of children){
         dfs(graph, child, visited);
     }

     /** if it didnt fail then we finished given graph, sending true helps in counting in  connectedComponentCount */
     return true;
 }



// console.log(buildNodeList(graph));
 console.log(connectedComponentCount(graph));


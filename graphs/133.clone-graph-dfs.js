/** 
 * 
 * 133. Clone Graph  / 133.Clone Graph 
 * 
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph. Each node in the graph 
 * contains a value (int) and a list (List[Node]) of its neighbors. 
 * 
 * ````js
 * class Node {
 *  public int val;
 *  public List<Node> neighbors;
 * }
 * ```
 * leetcode-question:133
 * leetcode:https://leetcode.com/problems/clone-graph/
 * 
 * */

/** Time: O(N+M) and Space: O(N) from depth of call stack */
 var cloneGraph = function(node) {
    

    let dfs = (node, visitedMap) => {
        
        /** if null then we reached tail */
        if(!node){
            return null;
        }
        
        /** if its visited already then return the clone of the original */
        if(visitedMap.has(node)){
            return visitedMap.get(node);
        }
  
        /** clone it, add it to visited, then use this clone to add child*/
        let clone = new Node(node.val);
        visitedMap.set(node, clone);
        
        let children = node.neighbors;
        
        for(let child of children){
            /** this will return last child then backtracks */
            let childClones = dfs(child, visitedMap);
            /** keep adding it to clone children */
            clone.neighbors.push(childClones);
        }
        
        return clone;
    };
    
    /** map will act as visited and will hold oldNode: cloneNode map */
    let visitedMap = new Map();
    let clone = dfs(node, visitedMap);
    return clone;
    
};


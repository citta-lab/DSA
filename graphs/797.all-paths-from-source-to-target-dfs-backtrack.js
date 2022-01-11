/** 
 * 
 * 797. All Paths From Source to Target 
 * 
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
 * find all possible paths from node 0 to node n - 1 and return them in any order.
 * The graph is given as follows: graph[i] is a list of all nodes you can visit 
 * from node i (i.e., there is a directed edge from node i to node graph[i][j]). 
 * 
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 * 
 * leetcode-question:797
 * leetcode:https://leetcode.com/problems/all-paths-from-source-to-target/
 * solution-example: https://leetcode.com/problems/all-paths-from-source-to-target/discuss/1415154/Javascript-easyandclean-solution
 * 
 * */

/** Time Complexity: O(2^N * N) Space:  O(2^N * N) */
/** N nodes graph can have maxium of 2^N-1 - 1 paths and we have N nodes so
it will be 2^N-1 - 1 * N = O(2^N * N)*/
var allPathsSourceTarget = function(graph) {
    
    let result = [];
    let curPath = [];
    
    let dfs = (src, target, curPath) => {
        
        if(src === target){
            /** we need to copy all the elements to result, becasue array's are copied by
             * reference and when we do BACLTRACKING and remove nodes from curPath, it will
             * also remove node from result if we have pushed curPath directly rather than
             * making a copy like [...curPath]. So dont do `result.push(curPath)` */
            result.push([...curPath]);
            return;
        }
        
        let children = graph[src];
        for(let child of children){
            curPath.push(child);
            dfs(child, target, curPath);
            
            /** 
            backtracking to remove last added item's (nodes) so it will go back to
            root node. 
            
            i.e In given example we would go from 0->1->3 so our curPath
            be [0,1,3] and result will be `result=[0,1,3]` (copy of curPath). This
            backtrack method (`curPath.pop()`) will remove 3 and then 0 (i.e 3<-1<-0)
            and goes back to 0. Now curPath will become `curPath=[0]` and now our dfs
            will go from 0->2->3 to find next path so curPath will become [0,2,3].
            */
            curPath.pop();
        }
    }
    
    /** our target is to reach the last item, hence we decide the the target */
    let target = graph.length-1;
    
    curPath.push(0);
    dfs(0, target, curPath);
    
    return result;
};

let graph = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph)); // [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
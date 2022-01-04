/**  
 * 
 * Course Schedule II
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
 * take course bi first if you want to take course ai. Return the ordering of courses you should 
 * take to finish all courses. If there are many valid answers, return any of them. If it is 
 * impossible to finish all courses, return an empty array.
 * 
 * Same Probelm: Solved in DFS ( toposort ) with hascycle & visited Sets.
 * https://github.com/citta-lab/DSA/blob/f3e5a99ca23173dc729292c85b9153d9dde84a14/graphs/course-findOrder-dfs.js
 * 
 * Similar Problem: 
 * Can we finish given Course Schedule : 
 * https://github.com/citta-lab/DSA/blob/a99d8c84c3b1cf4b59f133a9aa78040afb6068ad/graphs/course-canFinish-dfs.js
 * 
 * Example:
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,2,1,3]
 * 
 * leetcode-question:210
 * leetcode:https://leetcode.com/problems/course-schedule-ii/
 * video:https://www.youtube.com/watch?v=Akt3glAwyfY
 * toposort: https://www.youtube.com/watch?v=eL-KzMXSXXI&t=477s 
 * 
 * HINT: InDegree ( Kahn Algorithm )
 * 
 * */

  
/**
 *  Time: O(N+E) time where N is number of courses and E is all its pre-requs looking at the map we built 
 *  Space: O(N+E)
*/

var findOrder = function(numCourses, prerequisites) {
    
    /** Step 1: 
     build adjacency list in INORDER fashion, pay attention to dependecy. second course needs to be done before taking first */
    let adjList = {};
    for(let pre of prerequisites) {
        let [first, second] = pre;
        if(!adjList[first]) adjList[first] = [];
        if(!adjList[second]) adjList[second] = [];
        
        /** hence second needs to be done before first */
        adjList[second].push(first);
    }
    
    console.log(adjList);
    
    /** Step 2: 
        Similar to adjList we build inDegree hash, hence first depends on second. We focus on counting the course/first for inDegree */
    let inDegree = {}
    for(let pre of prerequisites) {
         let [first, second] = pre;
         if(!inDegree[first]) inDegree[first] = 0;
         if(!inDegree[second]) inDegree[second] = 0;
         inDegree[first] = inDegree[first] + 1;
     }
    
    console.log(inDegree);
    
    /** Step 3:
        Now we process inDegree into queue only if we have ZERO degree, so first in first out. Sometime numCourse might not match pre-req, we always relay on numCourses and if we are pre-req missing then
        it means we can finish the course without any worry hence !inDegree[course] */
    let queue = [];
    for(let course=0; course<numCourses; course++){
        if(inDegree[course] === 0 || !inDegree[course]){
            queue.push(course);
        }
    };
    
    console.log(queue);
    
    /** Step 4: 
     Process the queue until we finish all the courses ( hence courseCount === numCourses). Once course is processed we need to decrease the inDegree for all of it's course (hence inDegree[child] = inDegree[child] - 1) */
    let topoOrder = [];
    let courseCount = 0;
    
    while(queue.length){
        let course = queue.shift();
        topoOrder.push(course);
        courseCount ++;
        
        let children = adjList[course] || [];
        for(let child of children){
            inDegree[child] = inDegree[child] - 1;
            
            if(inDegree[child] === 0){
                queue.push(child);
            }
        }
    }
    
    if(courseCount === numCourses){
        return topoOrder;
    }
    
    return [];
};

console.log(findOrder(2, [[0,1]])); // [0,1] or [1,0]
console.log(findOrder(2, [[1,0],[0,1]])); // [] cant finish 
console.log(findOrder(2, [[1,0]])); // [0,1] 
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // [0,1,2,3]
console.log(findOrder(1, [[]])); // [0] 

/**  
 * 210. Course Schedule II
 *
 * Course Schedule II
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
 * take course bi first if you want to take course ai. Return the ordering of courses you should 
 * take to finish all courses. If there are many valid answers, return any of them. If it is 
 * impossible to finish all courses, return an empty array.
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
 * HINT: 
 * - toposort algorithm
 * - will need two Set. visted and hasCycle
 * - hasCycle behave like usual visited and visited helps in not adding course to result
 * - if(visited.has(course)) return true <-- IMP
 * - visited.add(course) <-- IMP do this after pre checks 
 * 
 * Advance to https://github.com/citta-lab/DSA/blob/main/graphs/207.course-schedule-canFinish-dfs.js
 * */

  
/**
 *  Time: O(N+E) time where N is number of courses and E is all its pre-requs looking at the map we built 
 *  Space: O(N+E)
*/
var findOrder = function(numCourses, prerequisites) {
    
    let map = {};
    for(let i=0; i<numCourses; i++){
        map[i] = [];
    }
    
    // console.log(map); // { '0': [], '1': [] }
    
    prerequisites.forEach((pair) => {
        const [ course, pre ] = pair;
        if(map[course]){
            map[course].push(pre);
        }
    })
    
    // console.log(map); // { '0': [], '1': [0] }
    
    let preArray = [];
    let visited = new Set(); /** helps preventing adding same course to output result array */
    let hasCycle = new Set(); /** helps detecting cycle with in course path from map we built  */
    
    let dfs = (course) => {
        
        if(hasCycle.has(course)) return false;
        
        if(visited.has(course)) return true;
        
        hasCycle.add(course); /** add to cycle set before processing course and it's pre */
        let preReqs = map[course];
        for(let pre of preReqs){
            let result = dfs(pre);
            if(!result) return false;
        }
        
        hasCycle.delete(course); /** remove course from set as we done processing courses pre */
        visited.add(course); /** add to visisted so when we pick next course form map, we dont add it's pre to result  */
        preArray.push(course); /** add it to result */
        
        return true;
        
    }
    
    /** IMP: call dfs by sending course from numCourses not from adjList */
    for(let course=0; course < numCourses; course++){
        let result = dfs(course);;
        if(!result) return []; /** if we find no dependecy, base requirement */
    }
    
    return preArray;
};



console.log(findOrder(2, [[0,1]])); // true
console.log(findOrder(2, [[1,0],[0,1]])); // false
console.log(findOrder(2, [[1,0]])); // true
console.log(findOrder(2, [[1,1]])); // false

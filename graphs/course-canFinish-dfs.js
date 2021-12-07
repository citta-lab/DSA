/** 
 * Course Schedule : 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must 
 * take course bi first if you want to take course ai. 
 * 
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1. 
 * Return true if you can finish all courses. Otherwise, return false. 
 * 
 * Example: 
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]] 
 * Output: false
 * 
 * leetcode: https://leetcode.com/problems/course-schedule/
 * video: https://www.youtube.com/watch?v=EgI5nU9etnU
 * 
*/

var canFinish = function(numCourses, prerequisites) {
    
    let courseMap = {};
    
    /** Step 1: intialize map with empty array, so we can add prereqs */
    for(let i=0; i<numCourses; i++){
        courseMap[i] = []; 
    }
    
    // console.log(courseMap); // returns { '0': [], '1': [] }
    
    /** Step 2: add preres for the courses */
    prerequisites.forEach((arr) => {
        const [ course, pre] = arr;
        if(courseMap[course]){
            courseMap[course].push(pre);
        }
    });
    
    // console.log(courseMap); // returns { '0': [], '1': [ 0 ] }
    
    /** 
        Step 3: apply dfs to verify if we have "CYCLE", or course has any "DEPNDECY" 
        or process courses "DEPENCIES" */
    let visited = new Set();
    let dfs = (course) => {
        
        /** Step 3.1: if it's already visited then we have a cycle */
        if(visited.has(course)){
            return false;
        }
        
        /** Step 3.2: if we have empty array (i.e []) then that course can be completed */
        if(courseMap[course].length === 0){
            return true;
        }
        
        /** Step 3.3: now we are processing the course so add it to visted set */
        visited.add(course);
        
        /** 
           Step 3.4: 
           using depency map we can process all the pre-required courses to check 
           if we can complete the course 
         */
        let preReqs = courseMap[course];
        for(let pre of preReqs){
            let canComplete = dfs(pre);
            if(!canComplete) return false;
        }
        
        /** Step 3.5: hence we done processing course and it's prereq we mark it done by doing below */
        visited.delete(course);
        courseMap[course] = [];
        
        /** Step 3.6: if we didnt have false return then we can finish the course */
        return true;
    }
    
    /** Step 4: call our dfs on each course */
    for(let course=0; course < numCourses; course++){
        let canComplete = dfs(course);
        if(!canComplete) return false;
    }
    
    /** Step 5: if no false return then we can finish the course */
    return true;
    
    
};

console.log(canFinish(2, [[0,1]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,1]])); // false
/** 

1136. Parallel Courses

You are given an integer n, which indicates that there are n courses labeled from 1 to n. 
You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], 
representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei
has to be taken before course nextCoursei.

In one semester, you can take any number of courses as long as you have taken all the prerequisites 
in the previous semester for the courses you are taking.

Return the minimum number of semesters needed to take all courses. If there is no way to take all the courses, return -1. 

Example:
Input: n = 3, relations = [[1,3],[2,3]]
Output: 2
Explanation: The figure above represents the given graph.
In the first semester, you can take courses 1 and 2.
In the second semester, you can take course 3.

leetcode-question:1136
leetcode:https://leetcode.com/problems/parallel-courses/

Hint: Kahn's inDegree with BFS level Order
*/

/** Time: O(N+E) => we use O(N) in building graph and O(N+E) in BFS.
    Space: O(N+E) => In graph we spend O(N+E) as N keys and E edges */
var minimumSemesters = function(n, relations) {
    /** Step 1: Build adjList but in this case pre-reqs are in order so
    we would be mapping pre-req: [nextCourses] in order*/
    let adjList = {};
    for(let relation of relations){
        const [pre, next] = relation;
        if(!adjList[pre]) adjList[pre] = [];
        if(!adjList[next]) adjList[next] = [];
        
        adjList[pre].push(next);
    }
    
    console.log(adjList);
    
    /** Step 2: Follow the same as above but initalize it to 0, then
    add degree count for nextCourse as thats the goal to finish */
    let inDegree = {};
    for(let relation of relations){
        const [pre, next] = relation;
        if(!inDegree[pre]) inDegree[pre] = 0;
        if(!inDegree[next]) inDegree[next] = 0;
        
        inDegree[next] = inDegree[next] + 1;
    }
    
    console.log(inDegree);
    
    /** Step 3: Find inDegree with 0 or missing ( indicates course can be finished without pre-req) and add it to Queue for BFS */
    let queue =[];
    for(let course = 1; course<=n; course++){
        if(inDegree[course] === 0 || !inDegree[course]){
            queue.push(course);
        }
    }
    
    console.log(queue);
    
    /** Step 4: process the Queue in LEVEL order which will give us sem count. Once childrens are fetched updated the inDegree for all it's children, add any inDegree children to Queue so we can prrocess after the current level */
    let courseCount = 0;
    let sem = 0;
    while(queue.length){
        let size = queue.length;
        for(let i=0; i<size; i++){
            let node = queue.shift();
            courseCount++;
            let children = adjList[node] || [];
            for(let child of children){
                inDegree[child] = inDegree[child] - 1;
                if(inDegree[child] === 0){
                    queue.push(child);
                }
            }
        }
        
        /** sem count changes after every level */
        sem++;
    }
    
    console.log(sem);
    console.log(courseCount);
    
    /** Step 5: if some reason couldn't process all courses then we failed, otherwise send sem count */
    return courseCount === n ? sem : -1;
};

let n= 3
let relations = [[1,3],[2,3]]
console.log(minimumSemesters(n, relations);

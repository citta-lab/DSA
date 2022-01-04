# kahn's-algorithm / inDegree-algorithm

The idea here is to understand the dependecy and solve the problem intuitively. For example, if we have some A depeneds on B then we can represent it in a diagram as
A <-- B which indicates A now has 1 inDegree, B has 0 inDegree. If i say C also depends on A then A's inDegree becomes 2, B's is still 0 and now C's is also 0 so on. Once
>> Dont get confused with dependecy drawing as it is the crucial piece in calculating inDegree. Typically, we would have blindly drawn A --> B, but in this is indicating
we need to finish A before B but our example was A depeneds on B. 

Example:
Most of the course and pre-req dependecy fall into this category. Lets take a example of `prerequisites = [[1,0],[2,0],[3,1],[3,2]]` in which `[course, pre-req]` are given in
that order. In typlical scenario given the edges like this we would have drawn something like ( WRONG in this CONTEXT ),
```js
      3
    /  \
   1.   2
    \  /
     0
```
Becasue above diagram indicates 3 doesnt have any dependency ( as no one is depending on it ) but the given data `[3,1],[3,2]` clearly indicates 3 depends on both 1 and 2. So
PAY ATTENTION to the given CONTEXT and build the graph and then the adjacency list for your problem while solving. So the the CORRECT way of drawing the graph based
on given data is,
```js
     0 [no incoming <- is 0]
    / \
   1.  2 [no incoming <- is 1] same for node/course 1.
    \ /
     3 [no incoming <- is 2]
```

## Steps
1. Understand the given data and draw the DIRECTED graph based on `[course, pre-req]` pair. 
2. Build our adjacency list for pre-req's. So `adjList[pre-req].push(course)` will build the right adjacency list for inDegree. ( ex: `adjList = {}` )
3. Build inDegree for each course ( not pre-req ) so exact same workflow as #2 and count number of times course depends on ( ex: `inDegree = {}` )
4. Loop throug the given number of courses ( not prerequisists ) as this represents all the course with/without dependecy and if if we have ZERO inDegree for any given 
5. course then add it to the QUEUE. (i.e `if(adjList[course] === 0 || adjList[course] ) { queue.push(course) } `. 
6. Process queue as long as its not EMPTY.
7. Add the processing pre-req to result array ( which is our final order ) and process pre-reqs children/courses by accessing adjList. (i.e `adjList[pre-req]` )
8. IMPORTANT: now DECREASE the `inDegree` for all it's courses as we just processed the PRE-REQ. (ex: `inDegree[course] = inDegree[course] - 1` )
9. Immediately after #8 we look if we have courses with ZERO inDegree and add it to the QUEUE. ( ex:  `if(inDegree[course] === 0) { queue.push(course) } `
10. continue until queue is empty then return RESULT array if numCourses === countedCourses. 

## Implementation
## Given 
```
Input: 
numCourses = 4, 
prerequisites = [[1,0],[2,0],[3,1],[3,2]]
```
## Build AdjList
```js
    let adjList = {};
    for(let pre of prerequisites) {
        let [first, second] = pre;
        if(!adjList[first]) adjList[first] = [];
        if(!adjList[second]) adjList[second] = [];
        
        /** hence second needs to be done before first */
        adjList[second].push(first);
    }
    
    console.log(adjList);
```
Resulting adjList will be like
```js
{ '0': [ 1, 2 ], '1': [ 3 ], '2': [ 3 ], '3': [] }
```

## Build InDegree List
```js
    let inDegree = {}
    for(let pre of prerequisites) {
         let [first, second] = pre;
         if(!inDegree[first]) inDegree[first] = 0;
         if(!inDegree[second]) inDegree[second] = 0;
         inDegree[first] = inDegree[first] + 1;
     }
    
    console.log(inDegree);
```
resulting inDegree list will be 
```js
{ '0': 0, '1': 1, '2': 1, '3': 2 }
```

## Build Queue based on Courses 
```js
    let queue = [];
    for(let course=0; course<numCourses; course++){
        /** !inDegree[course]: helps in handling when courses doesn't have pre-reqs then adjList will not have any but we need to handle it */
        if(inDegree[course] === 0 || !inDegree[course]){ 
            queue.push(course);
        }
    };
    
    console.log(queue); // [0]
```

## Initialize & Prep for Queue 
```js
    let topoOrder = []; /** final result */
    let courseCount = 0; /** to make sure we processed all the courses */
    
    while(queue.length){
        /** QUEUE operations */
    }
    
    /** making sure we processed all the GIVEN courses */
    if(courseCount === numCourses){
        return topoOrder;
    }
    
    /** failure if we couldn't process all GIVEN course */
    return [];
```

## Process QUEUE & update inDegree
```js
    let topoOrder = [];
    let courseCount = 0;
    
    while(queue.length){
        let preReq = queue.shift(); // <-- operating a Queue so act like one
        topoOrder.push(preReq);
        courseCount ++;
        
        let children = adjList[preReq] || [];
        for(let child of children){
            /** child/course update each course's inDegree to indicate it's preReq is processed */
            inDegree[child] = inDegree[child] - 1;
            
            if(inDegree[child] === 0){
                queue.push(child);
            }
        }
    }
```

## Return Result
```js
   /** making sure we processed all the GIVEN courses */
    if(courseCount === numCourses){
        return topoOrder;
    }
    
    /** failure if we couldn't process all GIVEN course */
    return [];
```

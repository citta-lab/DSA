/** 
 * 
 * 973. K Closest Points to Origin 
 * 
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, 
 * return the k closest points to the origin (0, 0).The distance between two points on the X-Y plane is the 
 * Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).You may return the answer in any order. 
 * The answer is guaranteed to be unique (except for the order that it is in). 
 * 
 * Input: points = [[1,3],[-2,2]], k = 1
 * Output: [[-2,2]]
 * 
 * Input: points = [[3,3],[5,-1],[-2,4]], k = 2
 * Output: [[3,3],[-2,4]]
 * 
 * leetcode-question:973
 * leetcode:https://leetcode.com/problems/k-closest-points-to-origin/
 * video:https://www.youtube.com/watch?v=rI2EBUEMfTk
 * 
 * Hint:
 * - Bruteforce(using sort): O(nlogN) and Space:O(N)
 * - loop through each pair and apply euclidean formula without applying squareroot
 * -- i.e let sum = Math.pow((x-0), 2) - Math.pow((y-0), 2)
 * - push the [sum, x, y] into another array which can be sorted to keep the min sum 
 * (distance) at top.
 * - while loop until k == 0 and pick array from first 
 * 
 * - Optimal (using PriorityQueue): O(N logK) and Space:O(N)
 * 
 * 
 * Heap Helper: https://github.com/datastructures-js
 * */

/** Bruteforce: Time:O(nlogn) and Space:O(N) */
var kClosest = function(points, k) {
    let calArray = [];
    
    for(let pair of points){
        
        const [x,y] = pair;
        
        /** apply formula */
        const result = Math.pow((x-0),2) + Math.pow((y-0), 2);
        calArray.push([result, x , y]);
    }
    
    console.log(calArray); // [ [ 10, 1, 3 ], [ 8, -2, 2 ] ]
    
    /** step 2: return k closest to origin */
    /** 2.1: using sort to have result close to 0 as JS doesnt have minHeap built in */
    calArray.sort((a,b) => a[0] - b[0]);
    
    console.log(calArray); // [ [ 8, -2, 2 ], [ 10, 1, 3 ] ]
    
    /** 2.2: pick k closest elements */
    let resultArray = [];
    while(k > 0){
        let pluckFromFirst = calArray.shift();
        let [sum, xVal, yVal] = pluckFromFirst;
        resultArray.push([xVal, yVal]);
        
        k--
    }
    
    return resultArray
};


/** Using PriorityQueue:  */
/** Time:O(N logK) and Space:O(N) */
var kClosest = function(points, k) {
    
    let maxPQ = new MaxPriorityQueue();
    
    for(let pair of points){
        
        const [x,y] = pair;
        
        /** apply formula */
        const result = Math.pow((x-0),2) + Math.pow((y-0), 2);
        
        /** add it to priority queue */
        if(maxPQ.size() < k){
            maxPQ.enqueue(pair, result);
        }else if(result < maxPQ.front().priority){
            /** if queue is full, delete the far distance one and add new one */
            maxPQ.dequeue();
            maxPQ.enqueue(pair, result);
        }
    }
    
    return maxPQ.toArray().map(el => el.element);
};
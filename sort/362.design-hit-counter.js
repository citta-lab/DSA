/**
 * 362. Design Hit Counter
 * 
 * Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).
 * 
 * Your system should accept a timestamp parameter (in seconds granularity)
 * , and you may assume that calls are being made to the system in 
 * chronological order (i.e., timestamp is monotonically increasing). 
 * Several hits may arrive roughly at the same time.
 * 
 * Implement the HitCounter class:
 * - HitCounter() Initializes the object of the hit counter system.
 * - void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
 * - int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., the past 300 seconds).
 * 
 * leetcode:https://leetcode.com/problems/design-hit-counter/
 * leetcode-question:362
 * 
 * Hint
 * - Time:O(logN) and Space: O(N)
 * - Binary Search 
 * - Goal is to find asked size of request between currently 
 * asked timestamp MINUS 5mins (300sec).
 * - if we can find start of 5mins, and current timestamp index
 * then anything between them is the SIZE
 * 
 * Note: Fails in 22nd test case
 * 
 * 
 * - Time:O(N) and Space:O(N)
 * - Queue, window will always hold timestamp less than 300 sec
 */

/*************************************************************
 * 
 * Binary Search :: Time:(logN) and Space:O(N)
 * 
 **************************************************************/
var HitCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.arr.push(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    
    /** will find range start and end by using binary search */
    let upperRangeIdx = binarySearch(this.arr, timestamp);
    let lowerRangeIdx = binarySearch(this.arr, timestamp - 300);
    
    return upperRangeIdx - lowerRangeIdx;
};

function binarySearch (arr, target) {
    
    if(!arr || !arr.length) return 0;
    
    let left = 0;
    let right = arr.length-1; 
    
    while(left <= right){
        let midIdx = Math.floor((left+right)/2);
        let midTime = arr[midIdx];
        
        if(midTime === target) return midIdx;
        
        if(midTime < target){
            left = midIdx + 1;
        }else{
            right = midIdx - 1;
        }
    }
    
    return right;   
}


/*************************************************************
 * 
 * Queue:: Time:O(N) and Space:O(N)
 * 
 **************************************************************/
var HitCounter = function() {
    this.arr = [];
};

HitCounter.prototype.hit = function(timestamp) {
    this.arr.push(timestamp);
};

HitCounter.prototype.getHits = function(timestamp) {
    while(this.arr.length > 0){
        
        /** lets peek() the first item to see if it is older than 5min */
        let firstEntry = this.arr[0];
        
        /** check diff for previous all items with respect to current */
        let diff = timestamp - firstEntry;
        
        /** if we keep finding older than 300 sec then we remove due to while*/
        if(diff >= 300){
            this.arr.shift();
        } else{
            break;
        }
    }
    
    return this.arr.length;    
};


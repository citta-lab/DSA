/** 
 * 
 * 346. Moving Average from Data Stream 
 * 
 * Given a stream of integers and a window size, calculate the moving average of all 
 * integers in the sliding window. 
 * 
 * Implement the MovingAverage class:
 * - MovingAverage(int size) Initializes the object with the size of the window size
 * - double next(int val) Returns the moving average of the last size values of the stream.
 * 
 * Input : ["MovingAverage", "next", "next", "next", "next"]
 * [[3], [1], [10], [3], [5]]
 * 
 * Output : [null, 1.0, 5.5, 4.66667, 6.0]
 * 
 * leetcode-question:346
 * leetcode:https://leetcode.com/problems/moving-average-from-data-stream/
 * 
 * Hint:
 * - BruteForce => Time:O(N) and Space: O(N)
 * - Add numbers to queue, calculate average by keeping window size in mind
 * - For loop will start from startIndex = Math.max(0, this.queue.length-this.size);
 * - average will use divider = Math.min(this.size, this.queue.length);
 * 
 * - Optimal => Time:O(1) and Space:O(N)
 * - Using Dequeue:
 * - we will keep popping elements from left whenever we cross the alloted size 
 * - in Js we can use shift which will cost O(N) but dequeue can pop left element at O(1) 
 * - https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b
 * */

/** BRUTEFORCE: Time:O(N) and Space:O(M) where M is the queue */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = [];
};

MovingAverage.prototype.next = function(val) {
    
    this.queue.push(val);
    
    /** this helps in moving the start withrespect to initialized size */
    let startIndex = Math.max(0, this.queue.length - this.size);
    
    let sum = 0;
    for(let i=startIndex; i<this.queue.length; i++){
        sum += this.queue[i];
    }
    
    let divider = Math.min(this.size, this.queue.length);
    return sum / divider;
};


/** IMPROVED (CIRCULAR): Time:O(1) and Space:O(M) */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = new Array(this.size).fill(0);
    
    this.sum = 0;
    this.pointer = -1;
};

MovingAverage.prototype.next = function(val) {
    
    this.pointer ++;
    this.position = this.pointer % this.queue.length;
    
    /** subtract removing value from the previous sum */
    this.sum += val - this.queue[this.position];
    
    /** add currently RECEIVED value to our queue with calculated position */
    this.queue[this.position] = val;
    
    let divider = Math.min(this.size, this.pointer+1);
    //let divider = (this.pointer < this.queue.length ? this.pointer + 1: this.queue.length);
    return (this.sum / divider);
    
};


/** IMPROVED ( Dequeue ) : time:O(1) and space:o(m) */
var MovingAverage = function(size) {
    this.size = size;
    this.arr = [];
    
    this.count = 0;
    this.sum =0;
};

MovingAverage.prototype.next = function(val) {
    
    this.count ++
    this.arr.push(val);
    
    /** this will pluck the elements from start whenever we exceed size */
    let tail = this.count > this.size 
    ? this.arr.shift() 
    : 0; 
    
    /** we keep adding value to sum and remove any plucked first element when
    we cross the window size */
    this.sum = this.sum - tail + val;
    
    return this.sum * 1.0 / Math.min(this.count, this.size)
    
};

/**
 *
 * 636. Exclusive Time of Functions
 *
 * On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1.
 * Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function
 * call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. 
 * Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp.
 * You are given a list logs, where logs[i] represents the ith log message formatted as a string "{function_id}:{"start" | "end"}:{timestamp}". 
 * For example, "0:start:3" means a function call with function ID 0 started at the beginning of timestamp 3, and "1:end:2" means a 
 * function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively.
 * A function's exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice,
 * one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is 2 + 1 = 3.
 * Return the exclusive time of each function in an array, where the value at the ith index represents the exclusive time for the function with ID i.
 *
 * Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
 * Output: [3,4]
 *
 * Input: n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]
 * Output: [8]
 *
 *
 *
 * leetcode-question:636
 * leetcode:https://leetcode.com/problems/exclusive-time-of-functions/
 *
 * Hint:
 * Time: O(N) and Space:O(N)
 * - Use stack to keep track of function execution
 * - Use array to keep execution time of each function at it's respective start index
 * - we need to keep track of previous function start time 
 * - first step is to build obj from logs which we can understand `{ id: 1, startEvent: true/false, time: }`
 */

var exclusiveTime = function(n, logs) {
    // To track sums of time for each program
    let sums = new Array(n).fill(0);
    
    // To track calls for each function
    let fnStack = [];
    
    // To track previous fn call start time
    let prevTime = -1;
    
    // To extract the log details from input
    const getLogDetails = (log) => {
        const details = log.split(":");
        return {
            id: parseInt(details[0]),
            startEvent: details[1] === "start" ? true : false,
            time: parseInt(details[2]),
        }
    }
    
    logs.forEach(log => {
        let {id, startEvent, time} = getLogDetails(log);
      
        /** whenever we find first or diff start event */
        if (startEvent) {
            /** 
             * if function exist in stack, then let's update
             * previous function's time before current program starts
             */
            if (fnStack.length) {
                let prevFn = fnStack[fnStack.length - 1];
                sums[prevFn] += time - prevTime;
            }
            
            // Let's push this function to the stack and record the time it started
            fnStack.push(id);
            prevTime = time;
        } else{
            // Let's get the last executing function and calculate how much time it took
            let lastFn = fnStack.pop();
            sums[lastFn] += (time - prevTime + 1);
            
            // Let's reset the prevTime for next function to use to calculate it's total time
            prevTime = time + 1;
        }
    });
    
    return sums;
};

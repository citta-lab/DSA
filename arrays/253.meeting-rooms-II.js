/** 
 * 
 * 253. Meeting Rooms II  
 * 
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
 * return the minimum number of conference rooms required. 
 * 
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: 2
 * 
 * Input: intervals = [[7,10],[2,4]]
 * Output: 1
 * 
 * Input: intervals = [[9,10],[4,9],[4,17]]
 * Output: 2
 * 
 * leetcode-question:253
 * leetcode:https://leetcode.com/problems/meeting-rooms-ii/
 * video:https://www.youtube.com/watch?v=FdzJmTCVyJU
 * BLIND: 58 (58/75)
 * 
 * Hint:
 * - Time:O(nlogn) from sorting Space:O(n) from start/end array
 * - we need to consider handling situation where we will have long meeting but then
 * 2 short overlapping (end of first and start of next) with in long meeting end time.
 * - will use WHILE loop on start and end, we increment count if start is LESS than end,
 * and move START pointer.
 * - we will check if start is GREATER/EQUAL to end, then we decrement COUNT and move
 * END pionter.
 * - At last we return max between counter and maxCounter (global variable)
 * */

/** Time: O(nlogn) and Space:O(n) */
var minMeetingRooms = function(intervals) {
    
    /** sorting just the start points */
    let start = intervals
        .map(pair => pair[0])
        .sort((a,b) => a-b);
    
    /** sorting just the end points */
    let end = intervals
        .map(pair => pair[1])
        .sort((a,b) => a-b);
    
    
    let maxCount = 0; /** we will hold max room required at any given time */
    let curCount = 0;
    
    let startPoint = 0;
    let endPoint = 0;
    
    /** 
    - first if condition is similar to meeting room I problem, 
    - but we might also have situation where we have a long 
    meeting from 0--->60 and two short meetinfs like 10-->20 
    and 20-->50 in this case we only need 2 rooms not 3. 
    so second if will decrement the room count.
    
    ex: [[9,10],[4,9],[4,17]]
    */
    while(startPoint < intervals.length){
        if(start[startPoint] < end[endPoint]){
            curCount++
            startPoint++
        }else if(start[startPoint] >= end[endPoint]){
            curCount--
            endPoint++
        }
        
        maxCount = Math.max(maxCount, curCount);
    }
    
    return maxCount;  
};
/** 
 * 
 * 252. Meeting Rooms 
 * 
 * Given an array of meeting time intervals where intervals[i] = [starti, endi], 
 * determine if a person could attend all meetings. 
 * 
 * Input: intervals = [[7,10],[2,4]]
 * Output: true
 * 
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: false
 * 
 * leetcode-question:252
 * leetcode:https://leetcode.com/problems/meeting-rooms/
 * video:https://www.youtube.com/watch?v=PaJxqZVPhbg
 * BLIND: 57 (57/75)
 * 
 * Hint:
 * Best Appraoch:
 * - Time: O(nlogn) and Space:O(1)
 * - sort by start time i.e O(nlogn)
 * - start with index 1 so we can compare intervals[i-1] with intervals[i]
 * - it's FALSE only when preEnd time is greater than curStart time.
 * 
 * Second Best Appraoch:
 * - Time: O(nlogn) and Space:O(n)
 * - we extract all start time to an array and sort
 * - we extract all end time to an array and sort
 * - we do loop from 1st element (0 indexed) and compare if current start time
 * is less than previous end time. if yes we return FALSE
 * 
 * */

/** Time:O(nlogn) Space:O(1) */
var canAttendMeetings = function(intervals) {
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    for(let i=1; i<intervals.length; i++){
        
        let prePair = intervals[i-1];
        let curPair = intervals[i];
        
        const [preStart, preEnd] = prePair;
        const [curStart, curEnd] = curPair;
        
        /** if our current start comes before previous end time
        then we know we cant attendcthe meeting */
        if(curStart < preEnd) return false;
    }
    
    return true
};

/** Time: O(nlogn) && space: O(N) */
var canAttendMeetings = function(intervals) {
    
    /** all start times are sorted ex: [ 0, 5, 15 ] */
    let start = intervals
        .map((pair) => pair[0])
        .sort((a,b) => a - b);
    
    /** all end times are sorted ex: [ 10, 20, 30 ] */
    let end = intervals
        .map((pair) => pair[1])
        .sort((a,b) => a - b);
    console.log(end);
    
    /** we iterate from 1 so we can compare with previous 0 index
    value. if we ever find startTime < previousEndTime then we 
    can say we can't attend all meetings .
    
    ie. you can't attend meeting unless you are done with 
    previous meeting (endtime) */
    
    for(let i=1; i<intervals.length; i++){
        if(start[i] < end[i-1]){
            return false
        }
    }
    
    return true
};
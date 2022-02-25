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
 * - Time: O(nlogn) and Space:O(1)
 * - sort by start time i.e O(nlogn)
 * - start with index 1 so we can compare intervals[i-1] with intervals[i]
 * - it's FALSE only when preEnd time is greater than curStart time.
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
/** 
 * 
 * 57. Insert Interval  
 * 
 * You are given an array of non-overlapping intervals intervals 
 * where intervals[i] = [starti, endi] represent the start and the end of the ith interval 
 * and intervals is sorted in ascending order by starti. You are also given 
 * an interval newInterval = [start, end] that represents the start and end of another interval.
 * 
 * Insert newInterval into intervals such that intervals is still sorted 
 * in ascending order by starti and intervals still does not have any overlapping 
 * intervals (merge overlapping intervals if necessary).
 * 
 * Return intervals after the insertion. 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [10,15]
 * Output: [[1,5],[6,9],[10,15]]
 * 
 * leetcode-question:57
 * leetcode:https://leetcode.com/problems/insert-interval/
 * video:https://www.youtube.com/watch?v=A8NUOmlwOlM
 * 
 * BLIND: 18 (18/75)
 * 
 * Hint:
 * - This problem is almost similar to merge-intervals but here array is already sorted
 * - While adding newInterval to sorted intervals we need to consider 3 things
 * - # handle newInterval if it needs to be added at first and return updated result array
 * -- i.e `return [...result, ...intervals.slice(i)];`
 * - # handle adding interval form intervals to result if newInterval comes after
 * - # handle merging newInterval until newInterval[1] is greater than interval[i][1]
 * -- i.e we can keep updating `newInterval = = [Math.min(first, newFirst), Math.max(second, newSecond)]`
 * - # handle adding newInterval at the end of intervals if newInterval[1] is greater than tail
 *  
 * */

/** time: O(n) and space:O(n) from result array */
var insert = function(intervals, newInterval) {
    
    let result = [];
    
    for(let i=0; i<intervals.length; i++){
        
        /** lets take first element from the intervals array */
        let interval = intervals[i];
        let [first, second] = interval; 
        
        /** extract elements from newInterval */
        let [newFirst, newSecond] = newInterval;
        
        /** check if newInterval might need to be at the start */
        if(first > newSecond){
            result.push(newInterval);
            return [...result, ...intervals.slice(i)]; // <-- need to consider adding intervals after i'th element
        } else if (second < newFirst){
            /** check if newIntervals comes after current iterating element */
            result.push(interval);
        } else {
            /** newInterval might be in between the elements or at last of the intervals */
            newInterval = [Math.min(first, newFirst), Math.max(second, newSecond)]
        }
    }
    
    result.push(newInterval);
    return result
};
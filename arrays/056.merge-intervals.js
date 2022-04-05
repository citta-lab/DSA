/** 
 * 56. Merge Intervals  
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all 
 * overlapping intervals, and return an array of the non-overlapping intervals 
 * that cover all the intervals in the input. 
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * 
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * 
 * Input: intervals = [[1,4]]
 * Output: [[1,4]]
 * 
 * Input: intervals = [[1,8],[4,5]]
 * Output: [[1,8]]
 * 
 * 
 * leetcode-question:56
 * leetcode:https://leetcode.com/problems/merge-intervals/
 * video:https://www.youtube.com/watch?v=44H3cEC2fFM
 * 
 * BLIND: 17 (17/21)
 * 
 * */

/** time: O(nlogn) space:O(logn) */
 var merge = function(intervals) {
    
    let result = [];
    
    /** helps us having sorted by first element of each pair */
    intervals.sort((a,b) => a[0] - b[0])
    
    /** lets have the first element in result by default */
    result.push(intervals[0]);
    
    /** lets iterative rest of them and compare with last element of result */
    for(let i=1; i < intervals.length; i++){
        
        const [rFirst, rSecond] = result[result.length-1];
        const [newFirst, newSecond] = intervals[i];
        
        if(newFirst <= rSecond){
            
             /** 
             update last index of arry in result 
                - case 1: if example is like [[2,4],[3,7]] out result should be [[2,7]]
                - case 2: if example is like [[2,7],[3, 5]] our result should be [[2,7]] 
            */
            
            result[result.length-1][1] = Math.max(rSecond, newSecond);
        }else {
            result.push([newFirst, newSecond])
        }
    }
    return result;
};